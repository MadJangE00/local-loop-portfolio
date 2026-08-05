export const SEPOLIA_CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID ?? 11155111)

export const SEPOLIA_CHAIN_ID_HEX = `0x${SEPOLIA_CHAIN_ID.toString(16)}`

export const CONTRACT_ADDRESS: string = import.meta.env.VITE_CONTRACT_ADDRESS ?? ''

export const RPC_URL: string = import.meta.env.VITE_RPC_URL ?? ''

export const SEPOLIA_NETWORK_PARAMS = {
  chainId: SEPOLIA_CHAIN_ID_HEX,
  chainName: 'Sepolia',
  nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: ['https://rpc.sepolia.org'],
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
}

export const GITHUB_URL = 'https://github.com/localloop26'

export const CONTACT_EMAIL = 'localloop26@gmail.com'
