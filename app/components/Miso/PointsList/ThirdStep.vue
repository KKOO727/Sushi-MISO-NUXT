<template>
	<div>
		<validation-observer ref="observer">
			<div class="form-row justify-content-center mb-5">
				<div class="col-md-12">
					<div class="d-flex mb-4">
						<div class="d-inline border-bottom mb-2">
							<div class="font-weight-bold fs-4 mb-2 text-white">OWNER ADDRESS</div>
						</div>
					</div>
					<div
						class="owner_address d-flex align-items-center p-3"
						style="background: #0d163f"
					>
						{{ model.listOwner }}
					</div>
				</div>
			</div>
			<div class="form-row justify-content-center mb-4">
				<div class="col-md-12">
					<div class="row pl-3 pb-3">
						<div class="col-4 mb-2 pl-0">
							<span class="border-bottom font-weight-bold fs-4 mb-2 text-white">
								Entry Index
							</span>
						</div>
						<div class="col-4 pl-0 mb-2">
							<span class="border-bottom font-weight-bold fs-4 mb-2 text-white">
								Status
							</span>
						</div>
					</div>
					<div v-for="(item, index) in groupedPoints" :key="index">
						<div class="row pl-3 pb-2 align-items-center">
							<div class="col-4 mb-2 pl-0">
								<span class="font-weight-bold fs-3 mb-2 text-white">
									{{ item.rangeStart }} - {{ item.rangeEnd }}
								</span>
							</div>
							<div class="col-4 pl-0 mb-2">
								<span v-if="item.status" class="font-weight-bold fs-3 mb-2 text-white">
									Approved
								</span>
								<span v-else class="font-weight-bold fs-3 mb-2 text-white">
									Not Approved
								</span>
							</div>
							<div class="col-4 mb-2">
								<base-button
									:loading="addtoListLoading"
									round
									type="default"
									class="btn btn-default"
									@click.native="addtoList(index)"
								>
									Add to List
								</base-button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="form-row justify-content-center mb-4">
				<div class="col-md-7">
					<div class="d-flex mb-1">
						<div class="d-inline">
							<div class="font-weight-bold fs-4 text-white opacity-2">
								Total Entries
							</div>
						</div>
					</div>
					<div class="fs-4 d-flex align-items-center text-white font-bold">
						{{ model.points.length }}
					</div>
				</div>
				<div class="col-md-5">
					<base-button
						:loading="addtoListLoading"
						round
						type="default"
						class="btn btn-default"
						@click.native="downloadCSV"
					>
						DOWNLOAD .CSV TO REVIEW
					</base-button>
				</div>
			</div>
		</validation-observer>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Steps, Step } from 'element-ui'

export default {
	components: {
		[Steps.name]: Steps,
		[Step.name]: Step,
	},
	props: {
		initModel: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			pointListAddress: null,
			pointListDeployedEventSubscribtion: null,
			fileinput: '',
			items: {
				listOwnerAddress: false,
				auction_payment_token: false,
				importList: false,
				addresses_purchaseCaps: false,
			},
			successFileLoad: 'ready',
			fileName: '',
			addtoListLoading: false,
			entryCounts: 0,
            groupedPoints: [],
		}
	},
	computed: {
		...mapGetters({
			coinbase: 'ethereum/coinbase',
			explorer: 'ethereum/explorer',
		}),
		model() {
			return this.initModel
		},
        csvContent() {
            const rows = this.model.points

            return "data:text/csv;charset=utf-8," + rows.map(e => [e.account, e.amount].join(",")).join("\n");
        },
	},
    watch: {
        model: {
            deep: true,
            handler() {
                this.groupedPoints = this.getGroupedPoints();
            }
        }
    },
	methods: {
		selectCurrentAccount() {
			this.model.listOwner = this.coinbase
		},
		validate() {
			return this.$refs.observer.validate().then((res) => {
				this.$emit('on-validated', res, this.model)
				return res
			})
		},
		focusInput(val) {
			for (const key in this.items) {
				if (val === key) {
					this.items[key] = true
				} else {
					this.items[key] = false
				}
			}
			this.$emit('active-focus', this.items)
		},
		fileValidate(points) {
			return (
				points.length > 0 &&
				points[0].account.slice(0, 2) === '0x' &&
				!isNaN(Number(points[0].amount))
			)
		},
		addtoList(index) {
            this.$set(this.groupedPoints[index], 'status', true);
        },
		downloadCSV() {
			const encodedUri = encodeURI(this.csvContent);
			const link = document.createElement("a");
			link.setAttribute("href", encodedUri);
			link.setAttribute("download", "my_data.csv");
			document.body.appendChild(link);

			link.click(); 
		},
        
        getGroupedPoints() {
            const points = this.model.points;
            if(points.length === 0) return;

            const countByGroup = 10;
            const grouped = [];

            points.forEach((item, index) => {
                const addIndex = Math.floor(index / countByGroup);

                if(!grouped[addIndex]) {
                    const groupItem = { rangeStart: 0, rangeEnd: 0, points: [], status: false }
                    groupItem.rangeStart = addIndex * countByGroup + 1;
                    grouped.push(groupItem);
                }

                grouped[addIndex].rangeEnd = index + 1;
                grouped[addIndex].points.push(item);
            })

            return grouped;
        }
	},
}
</script>

<style lang="scss">
.input-file-container {
	position: relative;
	background-color: transparent;
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	box-sizing: border-box;
	width: 360px;
	height: 180px;
	text-align: center;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
.input-file-container .el-icon {
	font-size: 50px;
	margin: 40px 0 16px;
	line-height: 50px;
}
.input-file-container .el-icon-upload {
	color: #c0c4cc;
}
.input-file-container .el-icon-success {
	color: #169c00;
}
.input-file-container .el-icon-error {
	color: #f5333b;
}
.input-file-container .upload__text {
	color: #606266;
	font-size: 14px;
	text-align: center;
}
.input-file-trigger {
	display: block;
	padding: 14px 45px;
	background: #f46e41;
	background-image: linear-gradient(to bottom left, #f46e41, #ba54f5, #f46e41);
	background-size: 210% 210%;
	background-position: top right;
	background-color: #f46e41;
	transition: all 0.15s ease;
	box-shadow: none;
	color: #ffffff;
	font-size: 1rem !important;
	font-weight: bolder;
	cursor: pointer;
}
.input-file-container.ready-state .input-file {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	padding: 14px 0;
	cursor: pointer;
}
.input-file:hover + .input-file-trigger,
.input-file:focus + .input-file-trigger,
.input-file-trigger:hover,
.input-file-trigger:focus {
	background: #f46e41;
	background-image: linear-gradient(to bottom left, #f46e41, #ba54f5, #f46e41);
	background-size: 210% 210%;
	background-position: top right;
	background-color: #f46e41;
	transition: all 0.15s ease;
	box-shadow: none;
	color: #ffffff;
}
.input-file-container .upload__text .file-choose-again {
	text-decoration: underline;
}
</style>
