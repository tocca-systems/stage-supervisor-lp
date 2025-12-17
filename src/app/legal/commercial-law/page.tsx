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
            className="text-sm text-violet-600 hover:text-violet-800 mb-8 inline-block"
          >
            &larr; トップページへ戻る
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="prose prose-slate max-w-none">
            <table className="min-w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top w-1/3">
                    事業者名
                  </th>
                  <td className="py-4 text-gray-700">TOCCA SYSTEMS</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    代表者名
                  </th>
                  <td className="py-4 text-gray-700">請求があった場合に遅滞なく開示いたします</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    所在地
                  </th>
                  <td className="py-4 text-gray-700">
                    請求があった場合に遅滞なく開示いたします
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    連絡先
                  </th>
                  <td className="py-4 text-gray-700">
                    メールアドレス：support@tocca.systems<br />
                    <span className="text-sm text-gray-500">
                      ※電話番号は請求があった場合に遅滞なく開示いたします。お問い合わせはメールにてお願いいたします。
                    </span>
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
                    料金ページに記載の金額（税込）
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    支払方法
                  </th>
                  <td className="py-4 text-gray-700">
                    クレジットカード決済（Stripe決済代行）
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    支払時期
                  </th>
                  <td className="py-4 text-gray-700">
                    <ul className="list-disc pl-5 mt-0">
                      <li>月額プラン：毎月の更新日に課金</li>
                      <li>年額プラン：お申込み時に一括課金</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    サービス提供時期
                  </th>
                  <td className="py-4 text-gray-700">
                    登録・決済完了後、直ちにご利用いただけます
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    解約について
                  </th>
                  <td className="py-4 text-gray-700">
                    課金責任者のみ解約手続きが可能です。解約後も契約期間終了日まではサービスをご利用いただけます。返金には応じられません。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    返品・返金
                  </th>
                  <td className="py-4 text-gray-700">
                    本サービスはデジタルコンテンツおよびオンラインサービスの性質上、返品・返金には応じられません。
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    動作環境
                  </th>
                  <td className="py-4 text-gray-700">
                    インターネット接続環境および最新版のWebブラウザ（Chrome、Firefox、Safari、Edge推奨）
                  </td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left font-semibold text-gray-900 align-top">
                    注意事項
                  </th>
                  <td className="py-4 text-gray-700">
                    本サービスの効果や成果には個人差があります。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}
