import type { HardhatUserConfig } from 'hardhat/config'
import hardhatEthers from '@nomicfoundation/hardhat-ethers'
import 'dotenv/config'

// .env (커밋 금지):
//   SEPOLIA_RPC_URL=https://...
//   PRIVATE_KEY=0x...   ← 배포 전용 지갑 키. 절대 저장소에 포함하지 않는다.
const config: HardhatUserConfig = {
  plugins: [hardhatEthers],
  solidity: '0.8.28',
  networks: {
    sepolia: {
      type: 'http',
      url: process.env.SEPOLIA_RPC_URL || 'https://rpc.sepolia.org',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
}

export default config
