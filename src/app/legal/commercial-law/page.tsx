import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata = {
  title: '特定商取引法に基づく表記 - GEKI TOCCA',
}

function TableRow({ label, children, isLast = false }: { label: string; children: React.ReactNode; isLast?: boolean }) {
  return (
    <tr>
      <th
        className={`bg-gray-50 text-slate-900 font-semibold w-48 text-left align-top py-4 px-4 ${
          isLast ? '' : 'border-b border-gray-200'
        }`}
      >
        {label}
      </th>
      <td
        className={`text-gray-600 py-4 px-4 ${
          isLast ? '' : 'border-b border-gray-200'
        }`}
      >
        {children}
      </td>
    </tr>
  )
}

export default function CommercialLawPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 font-medium hover:opacity-80 mb-6"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            トップへ戻る
          </Link>

          <h1 className="text-2xl font-bold text-slate-900 mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                <TableRow label="事業者名">
                  株式会社トッカシステムズ
                </TableRow>

                <TableRow label="代表者名">
                  代表取締役　谷 樹
                </TableRow>

                <TableRow label="所在地">
                  〒101-0051<br />
                  東京都千代田区神田神保町2-20 ワカヤギビル3階
                </TableRow>

                <TableRow label="連絡先">
                  TEL：03-5213-4278<br />
                  FAX：03-5213-4279<br />
                  メールアドレス：
                  <a href="mailto:info@tocca-net.jp" className="text-cyan-600 hover:text-cyan-800">
                    info@tocca-net.jp
                  </a>
                </TableRow>

                <TableRow label="サービス名">
                  GEKI TOCCA
                </TableRow>

                <TableRow label="サービス内容">
                  舞台・演劇等の制作進行管理を支援するクラウド型SaaSサービス
                </TableRow>

                <TableRow label="販売価格">
                  各有料プランの利用料金は、サービス内または料金ページに表示された金額とします。<br />
                  表示価格は、特に記載がない限り税込価格です。
                </TableRow>

                <TableRow label="商品代金以外の必要料金">
                  • インターネット接続に必要な通信費<br />
                  • 通信環境に関する費用<br />
                  <span className="text-sm">（※ これらはユーザーの負担となります）</span>
                </TableRow>

                <TableRow label="支払方法">
                  クレジットカード決済（決済代行サービス：Stripe）
                </TableRow>

                <TableRow label="支払時期">
                  • 月額プラン：申込時および以後毎月の更新日に課金されます<br />
                  • 年額プラン：申込時に一括課金されます
                </TableRow>

                <TableRow label="サービス提供時期">
                  利用登録および決済完了後、直ちに利用可能となります。
                </TableRow>

                <TableRow label="解約について">
                  • 解約は、団体ごとに設定された課金責任者（billing_admin）のみが行うことができます。<br />
                  • 解約手続き完了後も、契約期間終了日までは本サービスを利用することができます。<br />
                  • 契約期間途中での解約であっても、返金は行いません。
                </TableRow>

                <TableRow label="支払い失敗時の対応">
                  • 支払いが失敗した場合でも、直ちにサービスを停止することはありません。<br />
                  • 一定期間の猶予を設けた上で、支払いが確認できない場合、利用制限または利用停止を行うことがあります。
                </TableRow>

                <TableRow label="返品・返金について">
                  本サービスはデジタルコンテンツおよびオンラインサービスの性質上、返品・返金には応じられません。<br />
                  ただし、当社の責に帰すべき重大な不具合がある場合は、個別に協議のうえ対応することがあります。
                </TableRow>

                <TableRow label="動作環境">
                  本サービスを利用するために必要な推奨環境は、サービス内またはヘルプページに記載します。
                </TableRow>

                <TableRow label="表現およびサービスに関する注意書き" isLast>
                  本サービスの効果や成果には個人差があり、特定の結果を保証するものではありません。
                </TableRow>
              </tbody>
            </table>
          </div>

          <hr className="border-gray-200 my-8" />

          <div className="text-gray-600">
            <p>【制定日】2025年12月17日</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
