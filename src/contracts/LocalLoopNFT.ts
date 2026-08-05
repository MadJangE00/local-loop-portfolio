/**
 * LocalLoopNFT (ERC721 + Enumerable + URIStorage) 조회에 필요한 최소 ABI.
 * hardhat/contracts/LocalLoopNFT.sol 과 일치해야 한다.
 */
export const LOCAL_LOOP_NFT_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address owner) view returns (uint256)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function totalSupply() view returns (uint256)',
] as const
