import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { newsEntries } from '@/data/news'

export const metadata: Metadata = {
  title: 'お知らせ・更新履歴',
  description:
    'GEKI TOCCA の機能追加や改善のお知らせを掲載しています。最新のアップデート情報をご確認ください。',
}

function formatDate(date: string): string {
  const d = new Date(date)
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-teal-600 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <Container className="relative">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-medium text-cyan-100 transition-colors hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              トップへ戻る
            </Link>

            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              お知らせ・更新履歴
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cyan-100">
              GEKI TOCCA に追加された機能や改善内容をお知らせします。
            </p>
          </Container>
        </section>

        {/* 記事一覧 */}
        <section className="bg-slate-50 py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              {newsEntries.length === 0 ? (
                <p className="text-center text-slate-500">
                  まだお知らせはありません。
                </p>
              ) : (
                <ol className="space-y-10">
                  {newsEntries.map((entry) => (
                    <li
                      key={`${entry.date}-${entry.title}`}
                      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
                    >
                      <time
                        dateTime={entry.date}
                        className="text-sm font-medium text-cyan-700"
                      >
                        {formatDate(entry.date)}
                      </time>
                      <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        {entry.title}
                      </h2>
                      {entry.summary && (
                        <p className="mt-3 text-slate-600">{entry.summary}</p>
                      )}
                      <ul className="mt-4 space-y-2 text-slate-700">
                        {entry.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm sm:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
