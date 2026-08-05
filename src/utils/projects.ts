import type { Project } from '../components/ProjectCard'
import { GITHUB_URL } from './constants'

// TODO: 각 프로젝트의 실제 저장소 링크/설명으로 교체
export const PROJECTS: Project[] = [
  {
    title: 'NFT Coupon DApp',
    description:
      '지역 상점 쿠폰을 NFT로 발행하고 사용하는 DApp. 쿠폰의 발행·사용 이력이 온체인에 기록되어 위변조가 불가능하다.',
    stack: ['React', 'Solidity', 'ethers.js', 'IPFS'],
    github: GITHUB_URL,
  },
  {
    title: 'Local Loop',
    description:
      '지역 커뮤니티 활동을 블록체인 보상으로 연결하는 플랫폼. 참여자의 기여가 투명하게 기록되고 보상으로 순환된다.',
    stack: ['React', 'TypeScript', 'Hardhat', 'Sepolia'],
    github: GITHUB_URL,
  },
  {
    title: 'Social Value',
    description:
      '사회적 가치 활동을 측정하고 기록하는 서비스. 봉사·기부 등의 활동을 정량화하여 커뮤니티 평판으로 연결한다.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    github: GITHUB_URL,
  },
  {
    title: 'Dating App',
    description:
      '관심사 기반 매칭 데이팅 앱. 프로필 검증과 안전한 매칭 플로우에 중점을 두고 설계했다.',
    stack: ['React Native', 'Firebase'],
    github: GITHUB_URL,
  },
  {
    title: 'Coupang Auto Posting',
    description:
      '쿠팡 파트너스 상품 정보를 수집해 블로그 포스팅을 자동 생성하는 자동화 도구.',
    stack: ['Python', 'Selenium', 'OpenAPI'],
    github: GITHUB_URL,
  },
  {
    title: 'Blockchain Reward System',
    description:
      '커뮤니티 기여도에 따라 토큰 보상을 지급하는 리워드 시스템. Local Loop 생태계의 보상 엔진 역할을 한다.',
    stack: ['Solidity', 'Hardhat', 'ERC20'],
    github: GITHUB_URL,
  },
]
