import MISO_TOKEN_FACTORY_ABI from './abis/MISOTokenFactory.json'
import MISO_FARM_FACTORY_ABI from './abis/MISOFarmFactory.json'
import LIST_FACTORY_ABI from './abis/ListFactory.json'
import MISO_LAUNCHER_ABI from './abis/MISOLauncher.json'
import MISO_MARKET_ABI from './abis/MISOMarket.json'
import CROWDSALE_ABI from './abis/Crowdsale.json'
import DUTCH_AUCTION_ABI from './abis/DutchAuction.json'
import BATCH_AUCTION_ABI from './abis/BatchAuction.json'
import HYPERBOLIC_AUCTION_ABI from './abis/HyperbolicAuction.json'
import POINT_LIST_ABI from './abis/PointList.json'
import ERC20_ABI from './abis/ERC20.json'
import POOL_LIQUIDITY_ABI from './abis/PoolLiquidity.json'
import MISO_RECIPE_02_ABI from './abis/MISORecipe02.json'
import WETH_ABI from './abis/WETH9.json'
import MISO_HELPER_ABI from './abis/MISOHelper.json'
import MISO_MASTER_CHEF_ABI from './abis/MISOMasterChef.json'

/* eslint-disable prettier/prettier */
export const tokenFactory = {
	address: {
		1: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // main
		3: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // ropsten
		4: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // rinkeby
		42: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // kovan
		5: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // goerli
		56: '', // BSC mainnet
		97: '0xc16F721fc5d8E17D99deE8F9758a389F1fb85E91', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD', // Matic testnet
	},
	abi: MISO_TOKEN_FACTORY_ABI,
}

export const farmFactory = {
	address: {
		1: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // main
		3: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // ropsten
		4: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // rinkeby
		42: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // kovan
		5: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // goerli
		56: '', // BSC mainnet
		97: '0xF4bEaafBAD06cbC828783627d8410AD833883920', // BSC testnet
		137: '', // Matic mainnet
		80001: '0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a', // Matic testnet
	},
	abi: MISO_FARM_FACTORY_ABI,
}

export const listFactory = {
	address: {
		1: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // main
		3: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // ropsten
		4: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // rinkeby
		42: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // kovan
		5: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // goerli
		56: '', // BSC mainnet
		97: '0xF6f4CD2A080F608a2D8194B6411BBC61394c95eE', // BSC testnet
		137: '', // Matic mainnet
		80001: '0xF66698695eC940078Ef6C102675F83608Ab693aA', // Matic testnet
	},
	abi: LIST_FACTORY_ABI,
}

export const misoLauncher = {
	address: {
		1: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // main
		3: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // ropsten
		4: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // rinkeby
		42: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // kovan
		5: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // goerli
		56: '', // BSC mainnet
		97: '0xfAF5945E53D77a1BDc8E510d83F639BBDDce29FE', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f', // Matic testnet
	},
	abi: MISO_LAUNCHER_ABI,
}

export const misoMarket = {
	address: {
		1: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // main
		3: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // ropsten
		4: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // rinkeby
		42: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // kovan
		5: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // goerli
		56: '', // BSC mainnet
		97: '0xdBD0Cb28F6e436Fd35c584409aFe9CdA0ffa4b81', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x9d6c60d26B8f776B85d5731AD56b88973C3D370b', // Matic testnet
	},
	abi: MISO_MARKET_ABI,
}

export const crowdsaleTemplate = {
	address: {
		1: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // main
		3: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // ropsten
		4: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // rinkeby
		42: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // kovan
		5: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // goerli
		56: '', // BSC mainnet
		97: '0xE7CE8d3816B7b478b3527604D1C10E26a8AF6695', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D', // Matic testnet
	},
	abi: CROWDSALE_ABI,
}

export const dutchAuction = {
	address: {
		1: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // main
		3: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // ropsten
		4: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // rinkeby
		42: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // kovan
		5: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // goerli
		56: '', // BSC mainnet
		97: '0x0d82e3fb77d5AC33a0aeE5E9a81890ffeb25c92E', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x16F0d1860538B15De8CCBF2A356067E4c1C35382', // Matic testnet
	},
	abi: DUTCH_AUCTION_ABI,
}

export const batchAuction = {
	address: {
		1: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // main
		3: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // ropsten
		4: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // rinkeby
		42: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // kovan
		5: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // goerli
		56: '', // BSC mainnet
		97: '0xA17375B1Ef0616577E015bfE979157306493b170', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be', // Matic testnet
	},
	abi: BATCH_AUCTION_ABI,
}

export const hyperbolicAuction = {
	address: {
		1: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // main
		3: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // ropsten
		4: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // rinkeby
		42: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // kovan
		5: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // goerli
		56: '', // BSC mainnet
		97: '0x33686b29e5a1B4fA502b0d7678C78886928FE28F', // BSC testnet
		137: '', // Matic mainnet
		80001: '0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7', // Matic testnet
	},
	abi: HYPERBOLIC_AUCTION_ABI,
}

export const poolLiquidityTemplate = {
	address: {
		1: '', // main
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0xB73186801a10119e372a097F8f2647188DC417c9', // goerli
		56: '', // BSC mainnet
		97: '0x26E90aE3d4a41557D7141E280D3A495401a05371', // BSC testnet
		137: '', // Matic mainnet
		80001: '', // Matic testnet
	},
	abi: POOL_LIQUIDITY_ABI,
}

export const recipe02 = {
	address: {
		1: '', // main
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0x33B6Cc1627554D34E3446CD6721c5f4b56699794', // goerli
		56: '', // BSC mainnet
		97: '', // BSC testnet
	},
	abi: MISO_RECIPE_02_ABI,
}

export const pointList = {
	abi: POINT_LIST_ABI,
}

export const ERC20 = {
	abi: ERC20_ABI,
}

export const wethToken = {
	address: '0xbf81FD58BAC258905f052DEd3F6535Ea25336Fb3',
	abi: WETH_ABI,
}

export const sushi = {
	address: {
		1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '', // goerli
		56: '', // BSC mainnet
		97: '', // BSC testnet
		137: '', // Matic mainnet
		80001: '', // Matic testnet
	},
}

export const usdc = {
	address: {
		1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0x4169B19a55b0241ce811903fB437322fae72e3BE', // goerli
		56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // BSC mainnet
		97: '0x6C3355465DcC591427A22370E134bAB19463e692', // BSC testnet
		137: '', // Matic mainnet
		80001: '', // Matic testnet
	}, // main
	misoFeeAcct: '0x2a3070d384f2871c4fddf05f4c5dd9b6272fb54c', // integratorFeeAccount
}

export const tether = {
	address: {
		1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0x509ee0d083ddf8ac028f2a56731412edd63223b9', // goerli
		56: '0x55d398326f99059ff775485246999027b3197955', // BSC mainnet
		97: '', // BSC testnet
		137: '', // Matic mainnet
		80001: '', // Matic testnet
	}, // main
	misoFeeAcct: '0x2a3070d384f2871c4fddf05f4c5dd9b6272fb54c', // integratorFeeAccount
}

export const dai = {
	address: {
		1: '0x6b175474e89094c44da98b954eedeac495271d0f',
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0xF2D1F94310823FE26cFa9c9B6fD152834b8E7849', // goerli
		56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // BSC mainnet
		97: '', // BSC testnet
		137: '', // Matic mainnet
		80001: '', // Matic testnet
	}, // main
	misoFeeAcct: '0x2a3070d384f2871c4fddf05f4c5dd9b6272fb54c', // integratorFeeAccount
}

export const misoHelper = {
	address: {
		1: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4',
		3: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4', // ropsten
		4: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4', // rinkeby
		42: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4', // kovan
		5: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4', // goerli
		56: '', // BSC mainnet
		97: '0xc075F6CA73A7cE819bb925cCFC727209f0B21eA7', // BSC testnet
		137: '', // Matic mainnet
		80001: '0xAea50fa0a2aB411807131ADC10016FE0FfB506b4', // Matic testnet
	},
	abi: MISO_HELPER_ABI,
}

export const masterChefTemplate = {
	address: {
		1: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // main
		3: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // ropsten
		4: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // rinkeby
		42: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // kovan
		5: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // goerli
		56: '', // BSC mainnet
		97: '0x4EFbddC782B5Aaa4f188c05701f4ae0ea2Ea86F6', // BSC testnet
		137: '', // Matic mainnet
		80001: '0xC3989E0E00401D371DC44aEaA1b35564DaC001ad', // Matic testnet
	},
	abi: MISO_MASTER_CHEF_ABI,
}

export const uniswapFactory = {
	address: {
		1: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac', // main
		3: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // ropsten
		4: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // rinkeby
		42: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // kovan
		5: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // goerli
		56: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // BSC mainnet
		97: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // BSC testnet
		137: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // Matic mainnet
		80001: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // Matic testnet
	},
}
