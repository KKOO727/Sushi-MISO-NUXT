<template>
	<div>
		<validation-observer ref="observer">
			<div class="form-row justify-content-center mb-4">
				<div class="col-md-12">
					<div class="d-flex">
						<div class="d-inline border-bottom mb-4">
							<div
								class="font-weight-bold fs-4 mb-2"
								:class="{ 'text-white': items.listOwnerAddress }"
							>
								LIST OWNER ADDRESS*
							</div>
						</div>
					</div>
					<base-input
						v-model="model.listOwner"
						name="List Owner"
						placeholder="List Owner Address"
						type="text"
						rules="required|isAddress"
						@focus="focusInput('listOwnerAddress')"
					></base-input>
					<div class="d-flex">
						<p
							class="border-bottom font-weight-bold cursor-pointer"
							:class="{ 'text-white': items.listOwnerAddress }"
							style="color: rgba(255, 255, 255, 0.5)"
							@click="selectCurrentAccount"
						>
							Use my account
						</p>
					</div>
				</div>
			</div>

			<div class="form-row justify-content-center mb-4 pt-4">
				<div class="col-md-12">
					<div class="d-flex">
						<div class="d-inline border-bottom mb-4">
							<div
								class="font-weight-bold fs-4 mb-2"
								:class="{ 'text-white': items.auction_payment_token }"
							>
								AUCTION PAYMENT TOKEN*
							</div>
						</div>
					</div>
					<auction-payment-token
						:tokens-approved="auctionPaymenttokenApproved"
						@currency-updated="updateCurrency($event)"
					/>
				</div>
			</div>

			<!-- <div class="form-row justify-content-center">
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
					</div> -->
		</validation-observer>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Steps, Step } from 'element-ui'
import { subscribeToPointListDeployedEvent } from '@/services/web3/listFactory'
import AuctionPaymentToken from '../Auctions/Factories/AuctionPaymentToken.vue'

export default {
	components: {
		[Steps.name]: Steps,
		[Step.name]: Step,
		AuctionPaymentToken,
	},
	props: {
		initModel: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			wizardModel: null,
			pointListAddress: null,
			pointListDeployedEventSubscribtion: null,
			items: {
				listOwnerAddress: false,
				auction_payment_token: false,
				importList: false,
				addresses_purchaseCaps: false,
			},
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
		auctionPaymenttokenApproved() {
			return this.model.listOwner !== ''
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
		updateCurrency(currency) {
			this.items.listOwnerAddress = false
			this.items.importList = false
			this.items.addresses_purchaseCaps = false
			this.model.auction.payment_currency = currency
			this.items.auction_payment_token = true
			this.$emit('active-focus', this.items)
		},
	},
}
</script>

<style lang="scss">
.input-file-container {
	position: relative;
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
.input-file {
	position: absolute;
	top: 0;
	left: 0;
	width: 225px;
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
</style>
