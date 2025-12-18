import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'プライバシーポリシー - GEKI TOCCA',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 mb-3">{title}</h2>
      {children}
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-medium text-slate-900 mb-2">{title}</h3>
      {children}
    </div>
  )
}

export default function PrivacyPage() {
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

          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            プライバシーポリシー
          </h1>
          <p className="text-gray-600 mb-8">
            株式会社トッカシステムズ（以下「当社」といいます。）は、当社が提供する
            「GEKI TOCCA」（以下「本サービス」といいます。）において、
            ユーザーの個人情報を以下の方針に基づき適切に取り扱います。
          </p>

          <div className="space-y-8">
            {/* 1. 取得する情報 */}
            <Section title="1. 取得する情報">
              <p className="text-gray-600 mb-4">
                当社は、本サービスの提供にあたり、以下の情報を取得することがあります。
              </p>

              <SubSection title="(1) ユーザーが直接提供する情報">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>氏名または表示名</li>
                  <li>メールアドレス</li>
                  <li>団体名、公演名等の登録情報</li>
                  <li>スケジュール、タスク、メモ等のサービス上の入力データ</li>
                  <li>問い合わせ時に提供される情報</li>
                </ul>
              </SubSection>

              <SubSection title="(2) サービス利用により自動的に取得する情報">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ログイン情報、アクセス日時</li>
                  <li>IPアドレス</li>
                  <li>ブラウザ・端末情報</li>
                  <li>Cookie等の識別情報（使用する場合）</li>
                </ul>
              </SubSection>

              <SubSection title="(3) 決済に関する情報">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    有料プラン利用時の支払い状況
                    <span className="text-sm ml-2">
                      ※ クレジットカード番号等の決済情報は、当社では保持せず、決済代行会社が管理します。
                    </span>
                  </li>
                </ul>
              </SubSection>
            </Section>

            {/* 2. 利用目的 */}
            <Section title="2. 利用目的">
              <p className="text-gray-600 mb-2">
                当社は、取得した情報を以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>本サービスの提供・運営のため</li>
                <li>ユーザー認証、アカウント管理のため</li>
                <li>サービスの改善、機能開発のため</li>
                <li>問い合わせ対応、サポート対応のため</li>
                <li>重要なお知らせ、通知の送信のため</li>
                <li>利用規約違反等への対応のため</li>
                <li>法令または利用規約に基づく対応のため</li>
              </ul>
            </Section>

            {/* 3. 個人情報の第三者提供 */}
            <Section title="3. 個人情報の第三者提供">
              <p className="text-gray-600 mb-2">
                当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づき開示が求められた場合</li>
                <li>本サービスの提供に必要な範囲で、業務委託先に提供する場合</li>
              </ul>
            </Section>

            {/* 4. 外部サービスの利用 */}
            <Section title="4. 外部サービスの利用">
              <p className="text-gray-600 mb-2">
                当社は、本サービスの運営にあたり、以下の外部サービスを利用します。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Supabase</strong>（認証・データベース管理）</li>
                <li><strong>Stripe</strong>（決済処理）</li>
                <li><strong>メール配信サービス</strong>（通知・問い合わせ対応）</li>
              </ul>
              <p className="text-gray-600 mt-2">
                これらの事業者は、各社のプライバシーポリシーに基づき情報を管理します。
              </p>
            </Section>

            {/* 5. 個人情報の管理 */}
            <Section title="5. 個人情報の管理">
              <p className="text-gray-600">
                当社は、個人情報の漏えい、滅失、毀損等を防止するため、
                適切な技術的・組織的安全管理措置を講じます。
              </p>
            </Section>

            {/* 6. データの保存期間 */}
            <Section title="6. データの保存期間">
              <p className="text-gray-600 mb-2">
                当社は、以下の方針に基づきデータを管理します。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ユーザーアカウントが有効な間、原則としてデータを保持します。</li>
                <li>
                  ユーザーがアカウントを無効化（退会）した場合でも、
                  所属していた団体や公演に関連するデータは、
                  サービス運営および整合性維持のため一定期間保持されます。
                </li>
                <li>
                  団体が削除された場合、当該団体のデータは<strong>論理削除状態</strong>となり、
                  一定期間（猶予期間）経過後に完全に削除されます。
                </li>
                <li>法令により保存が必要な情報は、当該法令に従い保管します。</li>
              </ul>
            </Section>

            {/* 7. ユーザーの権利 */}
            <Section title="7. ユーザーの権利">
              <p className="text-gray-600 mb-2">
                ユーザーは、当社に対し、以下を請求することができます。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>自身の個人情報の開示</li>
                <li>内容の訂正、追加、削除</li>
                <li>利用停止、削除の要請</li>
              </ul>
              <p className="text-gray-600 mt-2">
                これらの請求は、下記の問い合わせ窓口より受け付けます。
              </p>
            </Section>

            {/* 8. Cookie等の利用について */}
            <Section title="8. Cookie等の利用について">
              <p className="text-gray-600">
                当社は、サービスの利便性向上および利用状況の把握のため、
                Cookie等の技術を使用する場合があります。
                ユーザーは、ブラウザ設定によりCookieを無効にすることができます。
              </p>
            </Section>

            {/* 9. プライバシーポリシーの変更 */}
            <Section title="9. プライバシーポリシーの変更">
              <p className="text-gray-600">
                当社は、法令の変更やサービス内容の変更等に応じて、
                本ポリシーを改定することがあります。
                変更後の内容は、本サービス上に掲載した時点で効力を生じます。
              </p>
            </Section>

            {/* 10. お問い合わせ窓口 */}
            <Section title="10. お問い合わせ窓口">
              <p className="text-gray-600">
                本ポリシーに関するお問い合わせは、以下までご連絡ください。
              </p>
            </Section>

            <hr className="border-gray-200" />

            {/* 事業者情報 */}
            <div className="text-gray-600">
              <p>【事業者名】株式会社トッカシステムズ</p>
              <p>
                【連絡先】
                <a href="mailto:info@tocca-net.jp" className="text-cyan-600 hover:text-cyan-800">
                  info@tocca-net.jp
                </a>
              </p>
              <p className="mt-4">【制定日】2025年12月17日</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
