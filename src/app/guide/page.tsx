import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GuideContent } from '@/components/GuideContent'

export default function GuidePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-teal-600 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <Container className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-100 font-medium hover:text-white mb-8 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            トップへ戻る
          </Link>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            使い方ガイド
          </h1>
          <p className="mt-4 text-lg text-cyan-100 max-w-2xl">
            <span className="whitespace-nowrap">たった7ステップで、</span>
            <span className="whitespace-nowrap">チームの公演管理を始められます。</span>
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">アカウント作成から予算管理まで、</span>
            <span className="whitespace-nowrap">順番にご紹介します。</span>
          </p>
        </Container>
      </section>

      {/* ガイドコンテンツ */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <GuideContent />
          </div>
        </Container>
      </section>

      {/* CTA セクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <Container className="relative">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              さっそく始めてみましょう
            </h2>
            <p className="mt-4 text-lg tracking-tight text-cyan-100">
              <span className="whitespace-nowrap">フリープランなら無料で、</span>
              <span className="whitespace-nowrap">すぐにお試しいただけます。</span>
            </p>
            <Button href="https://gekiapp.tocca.systems/auth/sign-up" color="white" className="mt-10">
              無料で始める
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
