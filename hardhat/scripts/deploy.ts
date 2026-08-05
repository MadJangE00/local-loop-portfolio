import { network } from 'hardhat'

const { ethers } = await network.connect()

const [deployer] = await ethers.getSigners()
console.log('Deploying with account:', deployer.address)

const nft = await ethers.deployContract('LocalLoopNFT', [deployer.address])
await nft.waitForDeployment()

const address = await nft.getAddress()
console.log('LocalLoopNFT deployed to:', address)
console.log('\n프론트엔드 .env 에 다음을 설정하세요:')
console.log(`VITE_CONTRACT_ADDRESS=${address}`)
