import { type Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://geki.tocca.systems'),
  title: {
    template: '%s - GEKI TOCCA',
    default: 'GEKI TOCCA - 舞台制作のタスク・スケジュール管理',
  },
  description:
    '舞台・演劇・イベント制作チームのための管理ツール。公演ごとのタスク管理、イベントスケジュール、メンバー管理を一元化し、制作進行をスムーズにします。',
  openGraph: {
    title: 'GEKI TOCCA - 舞台制作のタスク・スケジュール管理',
    description: '舞台・演劇・イベント制作チームのための管理ツール。公演ごとのタスク管理、イベントスケジュール、メンバー管理を一元化。',
    images: [
      {
        url: '/logo.png',
        width: 725,
        height: 725,
        alt: 'GEKI TOCCA ロゴ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'GEKI TOCCA - 舞台制作のタスク・スケジュール管理',
    description: '舞台・演劇・イベント制作チームのための管理ツール。公演ごとのタスク管理、イベントスケジュール、メンバー管理を一元化。',
    images: ['/logo.png'],
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        notoSansJP.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
