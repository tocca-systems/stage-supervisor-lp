import Image from 'next/image'
import clsx from 'clsx'

const steps = [
  {
    number: 1,
    title: 'アカウント作成',
    description:
      'メールアドレスまたはGoogleアカウントで簡単にサインアップ。登録は無料で、1分もかからずにサービスを利用開始できます。',
    image: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: '団体を作成',
    description:
      '劇団や制作団体を登録します。団体名を入力するだけで作成完了。複数の団体を作成して、それぞれ独立した環境で管理することもできます。',
    image: '/screenshots/productions.png',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: 3,
    title: '公演を作成',
    description:
      '公演タイトル、公演期間、会場などの基本情報を入力して公演を登録。公演ごとにスケジュール・タスク・メンバーが独立して管理されます。',
    image: '/screenshots/production-form.png',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'スケジュール管理',
    description:
      '稽古・本番・仕込み・バラシなどの予定をカレンダーで一元管理。Googleカレンダーとの連携で、個人の予定と合わせて確認できます。',
    image: '/screenshots/calendar.png',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'タスク管理',
    description:
      'やるべきことをタスクとして登録し、担当者・期限・優先度を設定。進捗状況を一覧で確認でき、チーム全体の抜け漏れを防ぎます。',
    image: '/screenshots/tasks.png',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 6,
    title: 'メンバーを招待',
    description:
      '招待リンクを共有するだけで、チームメンバーを団体に追加。メンバーごとに管理者・メンバーの権限を設定して、安全に運用できます。',
    image: '/screenshots/members.png',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  },
  {
    number: 7,
    title: '予算管理',
    description:
      '公演の予算を設定し、経費をカテゴリごとに記録・管理。支出状況をリアルタイムで把握し、予算オーバーを未然に防ぎます。',
    image: '/screenshots/budget.png',
    badge: 'スタンダードプラン',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function GuideContent({ hasBudgetImage = true }: { hasBudgetImage?: boolean }) {
  return (
    <div className="space-y-16 lg:space-y-24">
      {steps.map((step, index) => {
        const showImage = step.image && (step.number !== 7 || hasBudgetImage)
        const isEven = index % 2 === 1

        return (
          <div
            key={step.number}
            className={clsx(
              'rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 p-6 sm:p-8',
              showImage && 'lg:p-10'
            )}
          >
            {/* カードヘッダー: ステップ番号 + アイコン + タイトル */}
            <div className="flex items-center gap-4 mb-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-lg font-bold text-white shadow-md">
                {step.number}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-cyan-600">{step.icon}</span>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {step.title}
                </h2>
                {'badge' in step && step.badge && (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                    {step.badge}
                  </span>
                )}
              </div>
            </div>

            {showImage ? (
              /* 画像あり: テキストと画像を横並び（デスクトップ）、偶数ステップで左右反転 */
              <div
                className={clsx(
                  'flex flex-col gap-6 lg:gap-10 lg:items-center',
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                )}
              >
                {/* テキスト */}
                <div className="lg:w-2/5">
                  <p className="text-base leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* スクリーンショット */}
                <div className="lg:w-3/5">
                  <div className="relative">
                    <div
                      className={clsx(
                        'absolute -inset-3 rounded-2xl opacity-20 blur-xl',
                        index % 3 === 0 && 'bg-gradient-to-r from-cyan-400 to-teal-400',
                        index % 3 === 1 && 'bg-gradient-to-r from-teal-400 to-emerald-400',
                        index % 3 === 2 && 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                      )}
                    />
                    <Image
                      src={step.image!}
                      alt={step.title}
                      width={800}
                      height={500}
                      className="relative rounded-xl shadow-2xl ring-1 ring-slate-900/5"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* 画像なし: テキストのみ */
              <p className="text-base leading-relaxed text-slate-600">
                {step.description}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
