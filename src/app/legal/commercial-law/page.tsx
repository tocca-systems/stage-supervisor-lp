import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata = {
  title: '特定商取引法に基づく表記 - GEKI TOCCA',
}

export default function CommercialLawPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-cyan-600 hover:text-cyan-800 mb-8 inline-block"
          >
            &larr; トップページへ戻る
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="prose prose-slate max-w-none">
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="min-w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top w-1/3">
                    事業者名
                  </th>
                  <td className="py-4 text-gray-700">株式会社トッカシステムズ</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    代表者名
                  </th>
                  <td className="py-4 text-gray-700">代表取締役　谷 樹</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    所在地
                  </th>
                  <td className="py-4 text-gray-700">
                    〒101-0051<br />
                    東京都千代田区神田神保町2-20 ワカヤギビル3階
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    連絡先
                  </th>
                  <td className="py-4 text-gray-700">
                    TEL：03-5213-4278<br />
                    FAX：03-5213-4279<br />
                    メールアドレス：<a href="mailto:info@tocca-net.jp" className="text-cyan-600 hover:text-cyan-800">info@tocca-net.jp</a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    サービス名
                  </th>
                  <td className="py-4 text-gray-700">GEKI TOCCA</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    サービス内容
                  </th>
                  <td className="py-4 text-gray-700">
                    舞台・演劇等の制作進行管理を支援するクラウド型SaaSサービス
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    販売価格
                  </th>
                  <td className="py-4 text-gray-700">
                    各有料プランの利用料金は、サービス内または料金ページに表示された金額とします。<br />
                    表示価格は、特に記載がない限り税込価格です。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    商品代金以外の必要料金
                  </th>
                  <td className="py-4 text-gray-700">
                    • インターネット接続に必要な通信費<br />
                    • 通信環境に関する費用<br />
                    <span className="text-sm">（※ これらはユーザーの負担となります）</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    支払方法
                  </th>
                  <td className="py-4 text-gray-700">
                    クレジットカード決済（決済代行サービス：Stripe）
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    支払時期
                  </th>
                  <td className="py-4 text-gray-700">
                    • 月額プラン：申込時および以後毎月の更新日に課金されます<br />
                    • 年額プラン：申込時に一括課金されます
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    サービス提供時期
                  </th>
                  <td className="py-4 text-gray-700">
                    利用登録および決済完了後、直ちに利用可能となります。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    解約について
                  </th>
                  <td className="py-4 text-gray-700">
                    • 解約は、団体ごとに設定された課金責任者（billing_admin）のみが行うことができます。<br />
                    • 解約手続き完了後も、契約期間終了日までは本サービスを利用することができます。<br />
                    • 契約期間途中での解約であっても、返金は行いません。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    支払い失敗時の対応
                  </th>
                  <td className="py-4 text-gray-700">
                    • 支払いが失敗した場合でも、直ちにサービスを停止することはありません。<br />
                    • 一定期間の猶予を設けた上で、支払いが確認できない場合、利用制限または利用停止を行うことがあります。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    返品・返金について
                  </th>
                  <td className="py-4 text-gray-700">
                    本サービスはデジタルコンテンツおよびオンラインサービスの性質上、返品・返金には応じられません。<br />
                    ただし、当社の責に帰すべき重大な不具合がある場合は、個別に協議のうえ対応することがあります。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    動作環境
                  </th>
                  <td className="py-4 text-gray-700">
                    本サービスを利用するために必要な推奨環境は、サービス内またはヘルプページに記載します。
                  </td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    表現およびサービスに関する注意書き
                  </th>
                  <td className="py-4 text-gray-700">
                    本サービスの効果や成果には個人差があり、特定の結果を保証するものではありません。
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

            <hr className="my-8" />

            <div className="text-sm text-gray-600">
              <p>【制定日】2025年12月17日</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
