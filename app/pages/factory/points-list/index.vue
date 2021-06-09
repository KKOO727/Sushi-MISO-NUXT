<template>
	<div>
		<div class="row">
			<div class="col-12 col-lg-9 col-xl-8 order-1 order-lg-0">
				<div class="hero-section mt-4 border-bottom-after position-relative px-2">
					<span class="text-secondary white-txt font-weight-bold pb-2 fs-10 h-100">
						New Permission List
					</span>
				</div>
				<client-only>
					<pointlist-wizard
						:next-button-text="nextBtnText"
						:next-btn-loading="nextBtnLoading"
						@update:startIndex="onTabChanged"
					>
						<wizard-tab :before-change="() => validateStep('step1')">
							<template slot="label">
								<span class="fs-5">1</span>
								<p>INITIAL SETUP</p>
							</template>
							<first-step
								ref="step1"
								:init-model="model"
								@on-validated="onStepValidated"
								@active-focus="allStepInputs"
							></first-step>
							<base-divider class="my-5" />
						</wizard-tab>
						<wizard-tab :before-change="() => validateStep('step2')">
							<template slot="label">
								<span class="fs-5">2</span>
								<p>SET PERMISSIONS</p>
							</template>
							<second-step
								v-if="model"
								ref="step2"
								:init-model="model"
								@on-validated="onStepValidated"
								@active-focus="allStepInputs"
							></second-step>
						</wizard-tab>
						<wizard-tab :before-change="() => deployPermissionList('step3')">
							<template slot="label">
								<span class="fs-5">3</span>
								<p>REVIEW & DEPLOY</p>
							</template>
							<third-step
								v-if="model"
								ref="step3"
								:init-model="model"
								@on-validated="onStepValidated"
							></third-step>
						</wizard-tab>
					</pointlist-wizard>
				</client-only>
			</div>
			<div
				class="col-12 col-lg-3 col-xl-4 bg-dark mb-sm-5 mb-md-0 darker-side order-0"
			>
				<div class="d-flex align-items-center mt-5 mb-2 pl-3">
					<div class="text-white fs-7 text-capitalize font-weight-bold pr-3">
						{{ sidebarTitles[tabIndex] }}
					</div>
					<p
						class="
							bg-brown
							fs-3
							py-1
							px-3
							mb-0
							d-flex
							align-items-center
							radius-lg
							text-white
							font-weight-bold
						"
					>
						Step {{ tabIndex + 1 }} of 3
					</p>
				</div>
				<div class="pl-3">* indicates required step</div>
				<div>
					<template v-for="(item, index) in allSteps">
						<zoom-y-transition :key="index" :duration="300">
							<notificatoin
								:active="item.active"
								:title="item.title"
								:description="item.desctiption"
								:top="item.top"
							/>
						</zoom-y-transition>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BaseDivider, PointlistWizard, WizardTab } from '@/components'
import { tokenFactory } from '@/constants/contracts'
import { Vue } from 'vue-property-decorator'
import { ZoomYTransition } from 'vue2-transitions'
import Notificatoin from '@/components/Miso/Factory/Liquidity/sidebarNotification'

import FirstStep from '@/components/Miso/PointsList/FirstStep'
import SecondStep from '@/components/Miso/PointsList/SecondStep.vue'
import ThirdStep from '@/components/Miso/PointsList/ThirdStep.vue'
import { getContractInstance } from '@/services/web3/listFactory'
import { sendTransaction, toWei } from '@/services/web3/base'

const tokenFactoryAddress = tokenFactory.address

export default {
	components: {
		Notificatoin,
		ZoomYTransition,
		BaseDivider,
		PointlistWizard,
		WizardTab,
		FirstStep,
		SecondStep,
		ThirdStep,
	},
	layout: 'DashboardLayout',
	data() {
		return {
			contractAddress: '',
			deploymentFee: 0.1,
			tabIndex: 0,
			transactionHash: null,
			model: {
				listOwner: '',
				points: [],
			},
			nextBtnLoading: false,
			sidebarTitles: ['Initial Setup', 'Set Permissions', 'Review & Deploy'],
			allSteps: [
				{
					active: false,
					top: 25,
					title: 'LIST OWNER ADDRESS*',
					desctiption:
						'Enter the wallet address of the owner or administrator of this list.  If that person is you, then enter your wallet address you most commonly use to manage actions on MISO.                   ',
				},
				{
					active: false,
					top: 35,
					title: 'IMPORT LIST',
					desctiption:
						'Autofill your list by uploading a .csv file with instructed format below, or enter list manually in the next step. \n\n CSV Formatting \n\n In your spreadsheet application, enter the name of your list as the filename and format the following: \n\nThe word “Address” in column 1A \n\nThe word “Amount” in column 1B \n\nAddresses and amounts in subsequent A & B columns, respectively \n\nExport from your spreadsheet application as a .CSV file and upload here',
				},
				{
					active: false,
					top: 25,
					title: 'ADDRESSES & PURCHASE CAPS*',
					desctiption:
						'Enter a wallet address, and set an amount (in tokens) this address will be able to purchase.  The criteria for who and how much is completely up to you - this list will act like a “guest list” and prevent people who are not on the list from purchasing, and/or prevent people on the list from buying more than their allotted amount.  You can have as many addresses on this list as you’d like.',
				},
			],
		}
	},
	computed: {
		...mapGetters({
			currentProvidersNetworkId: 'ethereum/currentProvidersNetworkId',
			coinbase: 'ethereum/coinbase',
		}),
		nextBtnText() {
			if (this.tabIndex === 2) return 'Review'
			else if (this.tabIndex === 3) return 'DEPLOY'
			return 'Next'
		},
	},
	mounted() {
		this.contractAddress = this.getTokenFactoryAddress()
		this.listFactoryContract = getContractInstance()
	},
	methods: {
		getTokenFactoryAddress() {
			return tokenFactoryAddress[this.currentProvidersNetworkId]
		},
		onTabChanged(newValue) {
			this.tabIndex = newValue

			this.allSteps.forEach((item) => {
				item.active = false
			})
		},
		allStepInputs(event, val) {
			let i = 0
			for (const key in event) {
				Vue.set(this.allSteps[i], 'active', event[key])
				i++
			}
			this.chosenAuctionType = val
		},
		async validateStep(ref) {
			return await this.$refs[ref].validate()
		},
		onStepValidated(validated, model) {
			this.model = { ...this.model, ...model }
		},
		async deployPermissionList() {
			// Deploy PointsList
			const methodToSend = this.listFactoryContract.methods.deployPointList(
				this.model.listOwner,
				this.model.points.map((point) => point.account),
				this.model.points.map((point) => toWei(point.amount))
			)

			const txHash = await sendTransaction(methodToSend, {
				from: this.coinbase,
			})

			if (txHash) {
				this.transactionHash = txHash
			}
			this.nextBtnLoading = false
		},
	},
}
</script>
