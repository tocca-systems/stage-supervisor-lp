import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'プライバシーポリシー - GEKI TOCCA',
}

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>

          <div className="prose prose-slate max-w-none">
            <h2>1. 取得する情報</h2>
            <p>
              当社は、本サービスの提供にあたり、以下の情報を取得することがあります。
            </p>
            <h3>ユーザーが直接提供する情報</h3>
            <ul>
              <li>氏名、メールアドレス</li>
              <li>団体名、公演名</li>
              <li>スケジュール、タスク、メモなどのコンテンツ</li>
            </ul>
            <h3>サービス利用により自動的に取得する情報</h3>
            <ul>
              <li>ログイン情報、IPアドレス</li>
              <li>ブラウザ・端末情報</li>
              <li>Cookie情報</li>
            </ul>
            <h3>決済情報</h3>
            <p>
              支払い状況に関する情報を取得します。なお、クレジットカード番号は決済代行会社（Stripe）が管理し、当社では保持しません。
            </p>

            <h2>2. 利用目的</h2>
            <p>取得した情報は、以下の目的で利用します。</p>
            <ul>
              <li>本サービスの提供・運営</li>
              <li>ユーザー認証</li>
              <li>サービス改善</li>
              <li>問い合わせ対応</li>
              <li>重要なお知らせの送信</li>
              <li>利用規約違反への対応</li>
            </ul>

            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。
            </p>
            <ul>
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づき開示が求められた場合</li>
              <li>本サービス提供に必要な範囲での業務委託先への提供</li>
            </ul>

            <h2>4. 外部サービスの利用</h2>
            <p>本サービスでは、以下の外部サービスを利用しています。</p>
            <ul>
              <li>Supabase（認証・データベース管理）</li>
              <li>Stripe（決済処理）</li>
              <li>メール配信サービス</li>
            </ul>
            <p>
              これらのサービスにおける個人情報の取り扱いについては、各サービスのプライバシーポリシーをご確認ください。
            </p>

            <h2>5. 個人情報の管理</h2>
            <p>
              当社は、取得した個人情報について、適切な技術的・組織的安全管理措置を講じます。
            </p>

            <h2>6. データの保存期間</h2>
            <ul>
              <li>アカウント有効期間中は、ユーザーデータを保持します。</li>
              <li>退会後も、団体・公演関連データは一定期間保持されます。</li>
              <li>削除された団体データは論理削除後、猶予期間経過後に完全削除されます。</li>
            </ul>

            <h2>7. ユーザーの権利</h2>
            <p>
              ユーザーは、当社に対して以下の請求を行うことができます。
            </p>
            <ul>
              <li>個人情報の開示</li>
              <li>個人情報の訂正・追加・削除</li>
              <li>個人情報の利用停止</li>
              <li>個人情報の削除</li>
            </ul>

            <h2>8. Cookieの利用について</h2>
            <p>
              本サービスでは、利便性向上のためCookieを利用しています。ユーザーはブラウザの設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。
            </p>

            <h2>9. プライバシーポリシーの変更</h2>
            <p>
              当社は、法令の改正やサービスの変更に応じて、本プライバシーポリシーを改定することがあります。変更後のプライバシーポリシーは、本サービス上に掲載した時点から効力を生じます。
            </p>

            <h2>10. お問い合わせ窓口</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>制定日：2024年12月1日</p>
              <p>事業者名：TOCCA SYSTEMS</p>
              <p>連絡先：support@tocca.systems</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
