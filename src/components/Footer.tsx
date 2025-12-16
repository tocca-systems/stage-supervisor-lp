import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <p className="text-center font-display text-xl font-semibold text-slate-900">
            GEKI TOCCA
          </p>
          <nav className="mt-8 text-sm" aria-label="クイックリンク">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">機能</NavLink>
              <NavLink href="#pricing">料金</NavLink>
              <NavLink href="https://stage-supervisor-saas.vercel.app/legal/terms">利用規約</NavLink>
              <NavLink href="https://stage-supervisor-saas.vercel.app/legal/privacy">プライバシーポリシー</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="https://stage-supervisor-saas.vercel.app/legal/commercial-law" className="text-sm text-slate-500 hover:text-slate-700">
              特定商取引法に基づく表記
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} GEKI TOCCA. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
