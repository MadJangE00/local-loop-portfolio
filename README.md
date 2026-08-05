# Local Loop — Web3 Portfolio + Sepolia NFT Viewer

GitHub Pages에서 동작하는 개인 포트폴리오 사이트입니다. 프로젝트 소개와 함께
MetaMask를 연결해 Sepolia 테스트넷의 **Local Loop NFT**를 조회할 수 있는
Web3 Portfolio Platform입니다.

## 주요 기능

- **Home / Projects / About** — 자기소개, 기술 스택, 프로젝트 카드, Local Loop 비전
- **NFT Viewer** — MetaMask 연결 → Sepolia 네트워크 확인/자동 전환 → 보유 NFT 조회
  - `balanceOf → tokenOfOwnerByIndex → tokenURI → IPFS 메타데이터` 순서로 조회
- **에러 처리** — MetaMask 미설치, 연결 거부, 잘못된 네트워크, NFT 없음, 메타데이터/IPFS 실패
- **자동 배포** — main 브랜치 push 시 GitHub Actions가 GitHub Pages로 배포

## 기술 스택

| 영역 | 스택 |
| --- | --- |
| Frontend | React, TypeScript, Vite, TailwindCSS, React Router, ethers.js v6 |
| Blockchain | Solidity, Hardhat, OpenZeppelin ERC721, Sepolia Testnet |
| Storage | IPFS (Pinata) |
| Deploy | GitHub Pages, GitHub Actions |

## 프로젝트 구조

```text
├── src/
│   ├── components/   # Header, Hero, Footer, ProjectCard, Wallet*, NFT*, Loading, NetworkWarning
│   ├── pages/        # Home, Projects, About, NFTViewer
│   ├── hooks/        # useWallet, useNFT
│   ├── contracts/    # LocalLoopNFT ABI
│   └── utils/        # constants, ipfs, errors, projects
├── public/
├── hardhat/          # LocalLoopNFT.sol + 배포/민팅 스크립트
└── .github/workflows # GitHub Pages 배포 워크플로
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 환경 변수

`.env` 파일을 프로젝트 루트에 생성합니다 (`.env.example` 참고):

```env
VITE_CHAIN_ID=11155111
VITE_CONTRACT_ADDRESS=0x...   # 배포된 LocalLoopNFT 주소
VITE_RPC_URL=                 # (선택) 읽기 전용 RPC
```

> ⚠️ Private Key는 절대 저장소에 포함하지 않습니다.

## 스마트 컨트랙트 (hardhat/)

`LocalLoopNFT.sol` — ERC721 + ERC721Enumerable + ERC721URIStorage + Ownable

```bash
cd hardhat
npm install
cp .env.example .env   # SEPOLIA_RPC_URL, PRIVATE_KEY 설정

npm run compile
npm run deploy:sepolia   # 배포 후 출력되는 주소를 VITE_CONTRACT_ADDRESS에 설정

# 민팅 (배포자 = 컨트랙트 owner)
CONTRACT_ADDRESS=0x... TOKEN_URI=ipfs://... npm run mint:sepolia
```

NFT 이미지/메타데이터는 [Pinata](https://pinata.cloud)에 업로드한 뒤
`ipfs://<CID>` 형식의 URI를 민팅 시 사용합니다.

메타데이터 JSON 예시:

```json
{
  "name": "Local Loop Genesis",
  "description": "Local Loop 커뮤니티 멤버십 NFT",
  "image": "ipfs://<IMAGE_CID>"
}
```

## GitHub Pages 배포

1. GitHub 저장소 생성 후 push
2. 저장소 **Settings → Pages → Source**를 `GitHub Actions`로 설정
3. 저장소 변수/시크릿 설정
   - Variables: `VITE_CONTRACT_ADDRESS` (배포된 컨트랙트 주소)
   - Secrets: `VITE_RPC_URL` (선택)
4. main에 push하면 자동으로 빌드·배포됩니다

## 향후 확장

NFT Mint/Transfer, QR NFT 지급, NFT Coupon, Activity History,
Community Ranking, DAO, WalletConnect, Polygon/Mainnet 지원
