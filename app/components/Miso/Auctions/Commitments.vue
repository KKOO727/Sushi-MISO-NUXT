<template>
	<card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
		<template slot="header">
			<!-- <div class="border-0 card-header"> -->
			<div class="row align-items-center">
				<h4 class="mb-0 ml-3 mt-3 font-weight-bold text-uppercase">Commitments</h4>
			</div>
		</template>
		<div>
			<div
				class="
					col-12
					d-flex
					justify-content-center justify-content-sm-between
					flex-wrap
					mb-3
				"
			>
				<el-select
					v-model="pagination.perPage"
					class="select-primary pagination-select"
					placeholder="Per page"
				>
					<el-option
						v-for="item in pagination.perPageOptions"
						:key="item"
						class="select-primary"
						:label="item"
						:value="item"
					></el-option>
				</el-select>
				<div v-if="coinbase">
					<base-switch
						v-model="isAll"
						on-text="ALL"
						off-text="MY"
						type="primary"
						@input="handleSwitch($event)"
					></base-switch>
				</div>
			</div>
			<el-table
				class="table-responsive table-flush"
				:data="queriedData"
				row-key="id"
				header-row-class-name="thead"
				@sort-change="sortChange"
			>
				<el-table-column label="Address" min-width="200px" prop="address">
					<template #default="{ row }">
						<eth-image
							class="avatar avatar-xs mr-2"
							:opts="{
								seed: row.address,
								size: 10,
								scale: 5,
							}"
						/>
						<span>{{ shortenAddress(row.address) }}</span>
					</template>
				</el-table-column>

				<el-table-column label="Amount Committed" min-width="150px" prop="commitment">
					<template #default="{ row }">
						<span>{{ row.amount }} {{ shortCurrency }}</span>
					</template>
				</el-table-column>

				<!-- <el-table-column label="Price" min-width="140px" prop="price">
					<template #default="{ row }">
						<span>{{ to18Decimals(row.price) }}</span>
					</template>
				</el-table-column> -->

				<!-- <el-table-column
					label="Min Tokens"
					min-width="160px"
					prop="totalTokensCommitted"
				>
					<template #default="{ row }">
						<span>{{ to18Decimals(row.commitment) / to18Decimals(row.price) }}</span>
					</template>
				</el-table-column> -->

				<!-- <el-table-column label="Bonus" min-width="120px" prop="bonus">
					<template #default="{ row }">
						<span>
							{{
								row.amount / to18Decimals(currentPrice) -
								row.amount / to18Decimals(row.price)
							}}
						</span>
					</template>
				</el-table-column> -->

				<el-table-column
					label="Tokens Claimable"
					min-width="130px"
					prop="totalTokens"
				>
					<template #default="{ row }">
						<span>
							{{ row.amount / currentPrice }}
						</span>
					</template>
				</el-table-column>
				<el-table-column label="Tx Hash" min-width="100px" prop="txHash">
					<template #default="{ row }">
						<a :href="`${txUrl}${row.txHash}`" target="_blank">
							{{ shortenAddress(row.txHash) }}
						</a>
					</template>
				</el-table-column>
				<el-table-column
					label="Block Number"
					min-width="100px"
					prop="timestamp"
					sortable
				>
					<template #default="{ row }">
						<span>{{ row.timestamp }}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div
			slot="footer"
			class="
				col-12
				d-flex
				justify-content-center justify-content-sm-between
				flex-wrap
			"
		>
			<div class>
				<p class="card-category">
					Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
				</p>
			</div>
			<base-pagination
				v-model="pagination.currentPage"
				class="pagination-no-border"
				:per-page="pagination.perPage"
				:total="total"
			></base-pagination>
		</div>
	</card>
</template>

<script>
import { mapGetters } from 'vuex'
import { Table, TableColumn, Select, Option } from 'element-ui'
import EthImage from '@/components/web3-core/eth-identication/EthImage.vue'
import * as moment from 'moment'
import { shortenAddress } from '@/util'
import clientPaginationMixin from '@/components/Tables/PaginatedTables/clientPaginationMixin'
import { BasePagination, BaseSwitch } from '@/components'

export default {
	components: {
		[Select.name]: Select,
		[Option.name]: Option,
		[Table.name]: Table,
		[TableColumn.name]: TableColumn,
		EthImage,
		BasePagination,
		BaseSwitch,
	},
	mixins: [clientPaginationMixin],
	props: {
		commitments: {
			type: Array,
			required: true,
		},
		shortCurrency: {
			type: String,
			required: true,
		},
		totalTokens: {
			type: String,
			required: true,
		},
		totalTokensCommitted: {
			type: [String, Number],
			required: true,
		},
		currentPrice: {
			type: String,
			required: true,
		},
		// minimumPrice: {
		// 	type: String,
		// 	required: true,
		// },
	},
	data() {
		return {
			isAll: true,
			tableData: [],
		}
	},
	computed: {
		...mapGetters({
			txUrl: 'ethereum/txUrl',
			coinbase: 'ethereum/coinbase',
		}),
	},
	watch: {
		coinbase() {
			this.handleSwitch(this.isAll)
		},
		commitments(data) {
			this.setTableData(data)
		},
	},
	mounted() {
		this.setTableData(this.commitments)
	},

	methods: {
		shortenAddress(addr) {
			return shortenAddress(addr, 8)
		},
		formatTimestamp(timestamp) {
			return `${moment(timestamp).format('MM/DD/YYYY LT')}`
		},
		setTableData(data) {
			this.tableData = data
		},
		handleSwitch(isAll) {
			if (isAll) {
				this.setTableData(this.commitments)
			} else {
				const currentAccountCommitments = this.commitments.filter(
					(commitment) =>
						commitment.address.toLowerCase() === this.coinbase.toLowerCase()
				)
				this.setTableData(currentAccountCommitments)
			}
		},
	},
}
</script>

<style></style>
