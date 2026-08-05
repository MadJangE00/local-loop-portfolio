const IPFS_GATEWAY = 'https://gateway.pinata.cloud/ipfs/'

/** ipfs:// URI를 HTTP 게이트웨이 URL로 변환한다 */
export function resolveIpfsUrl(uri: string): string {
  if (uri.startsWith('ipfs://')) {
    return IPFS_GATEWAY + uri.slice('ipfs://'.length).replace(/^ipfs\//, '')
  }
  return uri
}
