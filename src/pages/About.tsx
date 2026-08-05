const SECTIONS = [
  {
    title: '개발 철학',
    body: '기술은 사람과 커뮤니티를 위한 도구여야 한다고 믿습니다. 화려한 기술보다 실제 문제를 해결하는 단순하고 검증 가능한 코드를 지향합니다.',
  },
  {
    title: 'Community',
    body: '지역 커뮤니티의 작은 활동들이 모여 큰 가치를 만듭니다. 그 가치가 기록되고 보상받는 구조를 만드는 것이 Local Loop의 출발점입니다.',
  },
  {
    title: 'Web3',
    body: '블록체인은 신뢰를 코드로 대체하는 기술입니다. NFT와 스마트 컨트랙트를 활용해 커뮤니티 기여를 투명하게 증명하는 시스템을 만듭니다.',
  },
  {
    title: 'AI',
    body: 'AI를 개발 생산성과 커뮤니티 운영 자동화에 적극 활용합니다. 반복 작업은 자동화하고, 사람은 가치 있는 결정에 집중해야 합니다.',
  },
  {
    title: 'Local Loop 비전',
    body: '동네 가게의 쿠폰부터 봉사활동 인증까지, 지역의 모든 가치 순환을 블록체인 위에서 연결하는 것. 이 포트폴리오는 그 생태계의 첫 번째 조각입니다.',
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="mt-8 space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-emerald-400">{section.title}</h2>
            <p className="mt-2 leading-relaxed text-slate-300">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
