import { postAuctionLauncher } from '@/constants/contracts'

const postAuctionLauncherAbi = postAuctionLauncher.abi
let contractInstance

export const getContractInstance = (address) => {
	if (
		!contractInstance ||
		web3.currentProvider.isMetaMask !== contractInstance.currentProvider.isMetaMask
	) {
		contractInstance = new web3.eth.Contract(postAuctionLauncherAbi, address)
	}

	return contractInstance
}
