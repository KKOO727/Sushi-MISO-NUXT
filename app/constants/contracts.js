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
		1: "0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD", // main
		3: "0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD", // ropsten
		4: "0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD", // rinkeby
		42: "0x1eC9e6f1aDF139A41B94d2590078103f7b8a09DD", // kovan
		5: "0x9fEc0402944037d8d96Cfd05bFDEb4324400653C", // goerli
		56: "", // BSC mainnet
		97: "0x20AcBac4BB3200b27DA8f2Fca154C8A346098254", // BSC testnet
	},
	abi: MISO_TOKEN_FACTORY_ABI,
}

export const farmFactory = {
	address: {
		1: "0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a", // main
		3: "0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a", // ropsten
		4: "0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a", // rinkeby
		42: "0xC5cF1bdf2b4c03Ea53dbA6a529cbE7bF0bE65c0a", // kovan
		5: "0xae4630aBD1a489fDa717C127F2744ec5d14fCBa2", // goerli
		56: "", // BSC mainnet
		97: "0xCFe87a56b896ec8aB9560569e14B70B262131B5a", // BSC testnet
	},
	abi: MISO_FARM_FACTORY_ABI,
}

export const listFactory = {
	address: {
		1: "0xF66698695eC940078Ef6C102675F83608Ab693aA", // main
		3: "0xF66698695eC940078Ef6C102675F83608Ab693aA", // ropsten
		4: "0xF66698695eC940078Ef6C102675F83608Ab693aA", // rinkeby
		42: "0xF66698695eC940078Ef6C102675F83608Ab693aA", // kovan
		5: "0x75360938051FE5087EC4159Fc5eC6857eA14471A", // goerli
		56: "", // BSC mainnet
		97: "0x2600BD29BB067489ED9969493E9D5caD6Fd29f28", // BSC testnet
	},
	abi: LIST_FACTORY_ABI,
}

export const misoLauncher = {
	address: {
		1: "0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f", // main
		3: "0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f", // ropsten
		4: "0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f", // rinkeby
		42: "0x77185e48DdC269B2d7D3b2938Df5862f8e601E0f", // kovan
		5: "0xe9214318a3281B7bFf99644949535159dd872f1C", // goerli
		56: "", // BSC mainnet
		97: "0xE25FE96924f68320C59F2Df776Fe63AFd3292cdF", // BSC testnet
	},
	abi: MISO_LAUNCHER_ABI,
}

export const misoMarket = {
	address: {
		1: "0x9d6c60d26B8f776B85d5731AD56b88973C3D370b", // main
		3: "0x9d6c60d26B8f776B85d5731AD56b88973C3D370b", // ropsten
		4: "0x9d6c60d26B8f776B85d5731AD56b88973C3D370b", // rinkeby
		42: "0x9d6c60d26B8f776B85d5731AD56b88973C3D370b", // kovan
		5: "0xBfc67Cd67928a0Ee6dF88a2d7cE4031533FCB7e5", // goerli
		56: "", // BSC mainnet
		97: "0x3a445de8fc2afAEc163e531D8f8C0A15D8af7D5c", // BSC testnet
	},
	abi: MISO_MARKET_ABI,
}

export const crowdsaleTemplate = {
	address: {
		1: "0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D", // main
		3: "0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D", // ropsten
		4: "0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D", // rinkeby
		42: "0x91d7D2724365dec4A1507ED44D1d823f6Fa8618D", // kovan
		5: "0x13221926114EdFf2B515782c8D4E857a04c1Ac63", // goerli
		56: "", // BSC mainnet
		97: "0x38916D314ba3101C35126D54BfeC11bb3Be9b6AA", // BSC testnet
	},
	abi: CROWDSALE_ABI,
}

export const dutchAuction = {
	address: {
		1: "0x16F0d1860538B15De8CCBF2A356067E4c1C35382", // main
		3: "0x16F0d1860538B15De8CCBF2A356067E4c1C35382", // ropsten
		4: "0x16F0d1860538B15De8CCBF2A356067E4c1C35382", // rinkeby
		42: "0x16F0d1860538B15De8CCBF2A356067E4c1C35382", // kovan
		5: "0x6f5391dD88C2FB327d5894dcbE42A5e3C87e2fC0", // goerli
		56: "", // BSC mainnet
		97: "0xb597Ebb2caAe14e3b73AC98dd68aBA75fb267475", // BSC testnet
	},
	abi: DUTCH_AUCTION_ABI,
}

export const batchAuction = {
	address: {
		1: "0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be", // main
		3: "0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be", // ropsten
		4: "0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be", // rinkeby
		42: "0x1E00f579f64956b1bb8749Cfb34CC3B7d08B34Be", // kovan
		5: "0x92F43e9C8636AE8E011e89c0928AC865a5d6A6E3", // goerli
		56: "", // BSC mainnet
		97: "0xB84465da75Da56aC2482AA41088B2e28aB4B2110", // BSC testnet
	},
	abi: BATCH_AUCTION_ABI,
}

export const hyperbolicAuction = {
	address: {
		1: "0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7", // main
		3: "0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7", // ropsten
		4: "0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7", // rinkeby
		42: "0x7B047A28a473c3Bf26e4c962d17b60cB4abF9Ce7", // kovan
		5: "0x5771c1647001250456EBE3B4310aE257e325D5b2", // goerli
		56: "", // BSC mainnet
		97: "0x6ED09B747077463311b7BF8D9897BC5472976008", // BSC testnet
	},
	abi: HYPERBOLIC_AUCTION_ABI,
}

export const poolLiquidityTemplate = {
	address: {
		1: "", // main
		3: "", // ropsten
		4: "", // rinkeby
		42: "", // kovan
		5: "0xB73186801a10119e372a097F8f2647188DC417c9", // goerli
		56: "", // BSC mainnet
		97: "0x26E90aE3d4a41557D7141E280D3A495401a05371", // BSC testnet
	},
	abi: POOL_LIQUIDITY_ABI,
}

export const recipe02 = {
	address: {
		1: "", // main
		3: "", // ropsten
		4: "", // rinkeby
		42: "", // kovan
		5: "0x33B6Cc1627554D34E3446CD6721c5f4b56699794", // goerli
		56: "", // BSC mainnet
		97: "", // BSC testnet
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
	address: "0xbf81FD58BAC258905f052DEd3F6535Ea25336Fb3",
	abi: WETH_ABI,
}

export const sushi = {
	address: {
		1: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
		3: "", // ropsten
		4: "", // rinkeby
		42: "", // kovan
		5: "", // goerli
		56: "", // BSC mainnet
		97: "", // BSC testnet
	}, 
}

export const usdc = {
	address: {
		1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		3: '', // ropsten
		4: '', // rinkeby
		42: '', // kovan
		5: '0x78deca24cba286c0f8d56370f5406b48cfce2f86', // goerli
		56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // BSC mainnet
		97: '', // BSC testnet
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
	}, // main
	misoFeeAcct: '0x2a3070d384f2871c4fddf05f4c5dd9b6272fb54c', // integratorFeeAccount
}

export const dai = {
	address: {
		1: "0x6b175474e89094c44da98b954eedeac495271d0f",
		3: "", // ropsten
		4: "", // rinkeby
		42: "", // kovan
		5: "0xF2D1F94310823FE26cFa9c9B6fD152834b8E7849", // goerli
		56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", // BSC mainnet
		97: "", // BSC testnet
	}, // main
	misoFeeAcct: "0x2a3070d384f2871c4fddf05f4c5dd9b6272fb54c", // integratorFeeAccount
}

export const misoHelper = {
	address: {
		1: "0xAea50fa0a2aB411807131ADC10016FE0FfB506b4",
		3: "0xAea50fa0a2aB411807131ADC10016FE0FfB506b4", // ropsten
		4: "0xAea50fa0a2aB411807131ADC10016FE0FfB506b4", // rinkeby
		42: "0xAea50fa0a2aB411807131ADC10016FE0FfB506b4", // kovan
		5: "0xD574aE11068Bb4b1a773Ab4260e00399E55d9C43", // goerli
		56: "", // BSC mainnet
		97: "0xd51CEf756e61b11028b6604430a66816d99Bf6FF", // BSC testnet
	},
	abi: MISO_HELPER_ABI,
}

export const masterChefTemplate = {
	address: {
		1: "0xC3989E0E00401D371DC44aEaA1b35564DaC001ad", // main
		3: "0xC3989E0E00401D371DC44aEaA1b35564DaC001ad", // ropsten
		4: "0xC3989E0E00401D371DC44aEaA1b35564DaC001ad", // rinkeby
		42: "0xC3989E0E00401D371DC44aEaA1b35564DaC001ad", // kovan
		5: "0x84B7dE9069904B40f733e4b4b810B06e7d74140e", // goerli
		56: "", // BSC mainnet
		97: "0x724E805B2Cb91067df95243963Ca50Dea91C6756", // BSC testnet
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
	},
}