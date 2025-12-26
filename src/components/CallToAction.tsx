import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            今すぐ始めましょう
          </h2>
          <p className="mt-4 text-lg tracking-tight text-cyan-100">
            <span className="whitespace-nowrap">チームの制作進行を、</span>
            <span className="whitespace-nowrap">もっとスムーズに。</span>
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">フリープランで</span>
            <span className="whitespace-nowrap">今すぐお試しいただけます。</span>
          </p>
          <Button href="https://gekiapp.tocca.systems/auth/sign-up" color="white" className="mt-10">
            無料で始める
          </Button>
        </div>
      </Container>
    </section>
  )
}
