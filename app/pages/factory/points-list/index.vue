<template>
	<div>
		<div class="row d-flex justify-content-center">
			<div class="col-md-11 mt-6">
				<points-list-factory-form></points-list-factory-form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { tokenFactory } from '@/constants/contracts'
import PointsListFactoryForm from '@/components/Miso/PointsList/PointsListFactoryForm'

const tokenFactoryAddress = tokenFactory.address

export default {
	components: {
		PointsListFactoryForm,
	},
	layout: 'DashboardLayout',
	data() {
		return {
			contractAddress: '',
			deploymentFee: 0.1,
		}
	},
	computed: {
		...mapGetters({
			currentProvidersNetworkId: 'ethereum/currentProvidersNetworkId',
		}),
	},
	mounted() {
		this.contractAddress = this.getTokenFactoryAddress()
	},
	methods: {
		getTokenFactoryAddress() {
			return tokenFactoryAddress[this.currentProvidersNetworkId]
		},
	},
}
</script>
