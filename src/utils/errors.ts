export class WalletError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WalletError'
  }
}

/** 지갑/조회 과정의 에러를 사용자 친화적인 한국어 메시지로 변환한다 */
export function toFriendlyMessage(err: unknown): string {
  if (err instanceof WalletError) return err.message

  const e = err as { code?: number | string; message?: string }

  if (e?.code === 4001 || e?.code === 'ACTION_REJECTED') {
    return '요청이 취소되었습니다. MetaMask에서 연결을 승인해 주세요.'
  }
  if (e?.code === -32002) {
    return 'MetaMask에 이미 대기 중인 요청이 있습니다. MetaMask 창을 확인해 주세요.'
  }
  if (typeof e?.message === 'string' && e.message.toLowerCase().includes('network')) {
    return '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
  }
  return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
}
