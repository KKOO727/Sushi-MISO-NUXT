<template>
	<div>
		<validation-observer ref="observer">
			<div class="form-row justify-content-center mb-4">
				<div class="col-md-12">
					<div class="d-flex">
						<div class="d-inline border-bottom mb-2">
							<div
								class="font-weight-bold fs-4 mb-2"
								:class="{ 'text-white': items.importList }"
							>
								IMPORT OR CREATE LIST*
							</div>
						</div>
					</div>
					<p class="mb-4">
						Autofill your list by uploading a .csv file below, or create one manually.
					</p>
					<div
						class="import_create_list row d-flex"
						rules="required"
						@focus="focusInput('importList')"
					>
						<div class="col-md-6">
							<div class="justify-content-center">
								<div v-if="successFileLoad === 'ready'" class="input-file-container ready-state">
                                    <i class="el-icon el-icon-upload"></i>
									<input
										type="file"
										class="input-file"
                                        accept=".csv"
										@change="onFileChange"
									/>
                                    <div class="upload__text">
                                        <p class="p-0">Choose or Drop a .csv</p>
                                        <p class="p-0">file here to import list.</p>
                                    </div>
								</div>
								<div v-if="successFileLoad === 'success'" class="input-file-container">
                                    <i class="el-icon el-icon-success"></i>
                                    <div class="upload__text">
                                        <p class="p-0">File {{fileName}} was uploaded successfully.</p>
                                        <input
                                        ref="fileUploadSuccess"
										type="file"
										class="input-file d-none"
                                        accept=".csv"
										@change="onFileChange"
									/><a class="file-choose-again" @click="$refs.fileUploadSuccess.click()">User a different file</a>
                                    </div>
								</div>
								<div v-if="successFileLoad === 'error'" class="input-file-container">
                                    <i class="el-icon el-icon-error"></i>
                                    <div class="upload__text">
                                        <p class="p-0">Error in processing file {{fileName}}.</p>
                                        <input
                                        ref="fileUploadError"
										type="file"
										class="input-file d-none"
                                        accept=".csv"
										@change="onFileChange"
									/><a class="file-choose-again" @click="$refs.fileUploadError.click()">User a different file</a>
                                    </div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="justify-content-center">
                                <img src="@/assets/images/VipList.svg"/>
                            </div>
                        </div>
					</div>
					<div class="d-flex mt-4">
						<p
							class="border-bottom font-weight-bold"
							:class="{ 'text-white': items.importList }"
							style="color: rgba(255, 255, 255, 0.5)"
							@click="addPoint"
						>
							Create a list manually
						</p>
					</div>
				</div>
			</div>

			<div class="form-row justify-content-center">
                <div
                    v-for="(point, index) in model.points"
                    :key="index"
                    class="col-12 d-flex justify-content-center"
                >
                    <div class="col-md-5">
                        <base-input
                            v-model="point.account"
                            :label="`Account ${index + 1}`"
                            name="Account"
                            placeholder="Account Address"
                            type="text"
                            rules="required|isAddress"
                        ></base-input>
                    </div>
                    <div class="col-md-5">
                        <base-input
                            v-model="point.amount"
                            :label="`Amount ${index + 1}`"
                            name="Amount"
                            placeholder="Amount"
                            type="number"
                            step="0.00001"
                            min="0"
                            rules="required|min_value:0"
                        ></base-input>
                    </div>
                    <div class="col-md-1 mt-4">
                        <base-button
                            type="primary"
                            :min-width="50"
                            @click.prevent="removePoint(index)"
                        >
                            -
                        </base-button>
                    </div>
                </div>
            </div>
		</validation-observer>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Steps, Step } from 'element-ui'
import { subscribeToPointListDeployedEvent } from '@/services/web3/listFactory'

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
				importList: true,
				addresses_purchaseCaps: false,
			},
            successFileLoad: 'ready',
            fileName: '',
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
	},
	watch: {
		fileinput() {
			const arr = this.fileinput.split('\r\n')
			const points = arr
				.filter((elm) => elm !== '')
				.map((elm) => {
					const childArray = elm.split(',')
					return {
						account: childArray[0],
						amount: childArray[childArray.length - 1],
					}
				})
            this.successFileLoad = (this.fileValidate(points)) ? 'success':'error'
			this.model.points = (this.fileValidate(points)) ? points: []
		},
	},
	mounted() {
		this.subscribeToPointListDeployedEvent()
	},
	beforeDestroy() {
		this.unsubscribeFromPointListDeployedEvent()
	},
	methods: {
		selectCurrentAccount() {
			this.model.listOwner = this.coinbase
		},
		addPoint() {
			this.model.points.push({ account: '', amount: 0 })
		},
		onFileChange(e) {
			const files = e.target.files || e.dataTransfer.files
			if (!files.length) return
			this.createInput(files[0])
            this.fileName = files[0].name
		},
		createInput(file) {
			const reader = new FileReader()
			const vm = this
			reader.onload = (e) => {
				vm.fileinput = reader.result
			}
			reader.readAsText(file)
		},
		removePoint(index) {
			this.model.points.splice(index, 1)
		},
		subscribeToPointListDeployedEvent() {
			this.pointListDeployedEventSubscribtion = subscribeToPointListDeployedEvent()
				.on('data', (event) => {
					if (this.transactionHash) {
						if (this.transactionHash.toLowerCase() === event.transactionHash) {
							this.pointListAddress = event.returnValues.pointList
							this.changeStep()
						}
					}
				})
				.on('error', (error) => {
					console.log('event error:', error)
				})
		},
		unsubscribeFromPointListDeployedEvent() {
			if (this.pointListDeployedEventSubscribtion) {
				this.pointListDeployedEventSubscribtion.unsubscribe()
			}
		},
		redirect(url) {
			this.$router.push(url)
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
            return points.length > 0 && points[0].account.slice(0,2) === '0x' && !isNaN(Number(points[0].amount))
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
    color: #169C00;
}
.input-file-container .el-icon-error {
    color: #F5333B;
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
