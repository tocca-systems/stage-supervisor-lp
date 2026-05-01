import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'フリープランでどこまで使えますか？',
      answer:
        'フリープランでは、公演1件（先着100団体は3件まで）・メンバー10名までで、タスク管理・スケジュール管理・メンバー管理の基本機能をすべてご利用いただけます。予算管理・チケット予約管理・日程調整も1公演でご利用可能です。掲示板はスタンダードプランの機能となります。',
    },
    {
      question: 'いつでもプランを変更できますか？',
      answer:
        'はい、いつでもアップグレード・ダウングレードが可能です。アップグレードは即時反映され、ダウングレードは次の請求サイクルから適用されます。',
    },
    {
      question: '支払い方法は何がありますか？',
      answer:
        'クレジットカード（Visa、Mastercard、American Express、JCB）でのお支払いに対応しています。Stripeを通じた安全な決済を行っています。',
    },
  ],
  [
    {
      question: 'データのエクスポートはできますか？',
      answer:
        '予算・経費管理の経費一覧をCSV形式でエクスポートできます。タスクやスケジュールのエクスポートは今後対応予定です。',
    },
    {
      question: 'スマートフォンでも使えますか？',
      answer:
        'はい、Webブラウザから利用できるため、スマートフォンやタブレットでもお使いいただけます。レスポンシブ対応しています。',
    },
    {
      question: 'チームメンバーの招待方法は？',
      answer:
        '招待リンクを発行して共有するだけで、簡単にメンバーを追加できます。',
    },
  ],
  [
    {
      question: '複数の団体で利用できますか？',
      answer:
        'はい、1つのアカウントで複数の団体に所属できます。劇団の掛け持ちなど、自由にご利用いただけます。',
    },
    {
      question: 'セキュリティは大丈夫ですか？',
      answer:
        'Supabaseの認証基盤を使用し、すべての通信はHTTPSで暗号化されています。データは安全に保護されています。',
    },
    {
      question: 'サポートはありますか？',
      answer:
        'スタンダードプランでは優先サポートをご利用いただけます。フリープランの方もお問い合わせいただけますが、回答にお時間をいただく場合があります。',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            よくあるご質問
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 lg:max-w-none lg:grid-cols-3 lg:grid-rows-[repeat(3,auto)] lg:gap-8"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex} className="contents lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-8">
              {column.map((faq, faqIndex) => (
                <div
                  key={faqIndex}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0"
                >
                  <h3 className="font-display text-base/7 font-semibold text-slate-900 sm:text-lg/7">
                    {faq.question}
                  </h3>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-700 sm:mt-4 sm:pt-4 lg:border-0 lg:pt-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
