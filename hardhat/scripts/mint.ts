import { network } from 'hardhat'

// 사용법:
//   CONTRACT_ADDRESS=0x... MINT_TO=0x... TOKEN_URI=ipfs://... \
//   npm run mint:sepolia
const { ethers } = await network.connect()

const contractAddress = process.env.CONTRACT_ADDRESS
const tokenURI = process.env.TOKEN_URI
if (!contractAddress || !tokenURI) {
  throw new Error('CONTRACT_ADDRESS 와 TOKEN_URI 환경 변수를 설정해 주세요.')
}

const [owner] = await ethers.getSigners()
const to = process.env.MINT_TO ?? owner.address

const nft = await ethers.getContractAt('LocalLoopNFT', contractAddress)
const tx = await nft.safeMint(to, tokenURI)
const receipt = await tx.wait()

console.log(`Minted to ${to}`)
console.log('Tx:', receipt?.hash)
