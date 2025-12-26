import { Container } from '@/components/Container'

const features = [
  {
    name: 'スケジュール',
    description: '日程・カレンダー・イベント',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'タスク',
    description: '進捗・担当者・期限管理',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'ファイル',
    description: '資料の共有・紐づけ',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'メンバー',
    description: '役職・権限の管理',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: '予算',
    description: '支出・払戻の記録',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function TheaterTerminology() {
  return (
    <section
      id="theater-terminology"
      aria-label="公演管理に必要な機能"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 sm:py-28"
    >
      {/* 装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <Container className="relative">
        {/* メインメッセージ */}
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            <span className="whitespace-nowrap">もう複数のツールは</span>
            <span className="whitespace-nowrap text-cyan-600">必要ありません。</span>
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
            <span className="whitespace-nowrap">スケジュール、タスク、ファイル、メンバー、予算。</span>
            <span className="whitespace-nowrap">バラバラだった管理を公演ごとに一元化。</span>
          </p>
        </div>

        {/* 機能一覧 */}
        <div className="mt-12 sm:mt-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col items-center rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-100 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-900">{feature.name}</h3>
                  <p className="mt-1 text-center text-xs text-slate-500 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中央の矢印 */}
        <div className="mt-8 flex justify-center">
          <svg className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* 公演単位で管理 */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 px-6 py-3 shadow-lg shadow-cyan-500/25">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-lg font-semibold text-white">公演ごとに一元管理</span>
          </div>
        </div>

        {/* キャッチコピー */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-2xl font-display text-slate-900 sm:text-3xl">
            複数のツールを行き来する必要はもうありません。
          </p>
          <p className="mt-3 text-lg text-cyan-600 font-medium">
            公演に必要なすべてが、ここに揃っています。
          </p>
        </div>
      </Container>
    </section>
  )
}
