'use client'

import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'タスク管理',
    summary: 'チーム全体の進捗を一目で把握',
    description:
      '担当者・期限・優先度を設定して、公演準備の進捗を可視化。',
    image: '/screenshots/tasks.png',
  },
  {
    name: 'スケジュール管理',
    summary: '稽古・本番の予定を一元管理',
    description:
      '稽古、ミーティング、本番など、すべての予定をカレンダーで管理。Googleカレンダーとの連携で個人の予定と一緒に確認できます。',
    image: '/screenshots/calendar.png',
  },
  {
    name: '日程調整',
    summary: 'メンバーの空き時間を見える化',
    description:
      '候補日を提示してメンバーが空き時間を回答。全員の都合を一覧で比較して、最適な日程をワンクリックで決定できます。',
    image: '/screenshots/schedules-detail.png',
  },
  {
    name: 'ファイル管理',
    summary: '台本・図面・資料をまとめて共有',
    description:
      '公演に関するファイルをアップロードして一元管理。タスクやイベントに紐づけて、必要な資料にすぐアクセスできます。',
    image: '/screenshots/files.png',
  },
  {
    name: 'メンバー・グループ管理',
    summary: 'チーム編成を柔軟に管理',
    description:
      '役職管理、公演グループでのチーム分け、客演招待リンクでの外部メンバー参加に対応。オムニバス公演のチーム分けもスムーズです。',
    image: '/screenshots/members-groups.png',
  },
  {
    name: '通知設定',
    summary: '必要な情報だけを受け取る',
    description:
      'イベント変更、タスク更新、予約通知などをタイプ別にON/OFF。プッシュ通知にも対応し、重要な情報を見逃しません。',
    image: '/screenshots/notification-settings.png',
  },
  {
    name: 'チケット予約管理',
    summary: 'フライヤー画像も掲載できる予約フォーム',
    description:
      'お客様向けの予約フォームをワンクリックで作成。フライヤー画像・会場・住所・お支払い方法を掲載でき、メンバー別リンク・劇団扱いリンクにも対応。残席数の自動表示、チェックイン管理、リマインドメールの自動送信まで。',
    image: '/screenshots/reservation-form.png',
  },
  {
    name: '掲示板',
    summary: 'メンバー間の情報共有をスムーズに',
    description:
      '公演ごとに複数チャンネルを作成して、稽古連絡・全体共有・スタッフ間の打ち合わせなどを使い分け。チャンネル単位で通知 ON/OFF や閲覧範囲を制御できるので、必要な人にだけ情報が届きます。',
    image: '/screenshots/board.png',
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="実際の画面"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            実際の画面をご紹介
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            <span className="whitespace-nowrap">シンプルで直感的なインターフェース。</span>
            <span className="whitespace-nowrap">誰でもすぐに使い始められます。</span>
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={clsx(
                'flex flex-col items-center gap-8 lg:gap-16',
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              )}
            >
              {/* テキスト部分 */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <span className="mb-4 inline-block rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                  {feature.name}
                </span>
                <h3 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">
                  {feature.summary}
                </h3>
                <p className="mt-4 text-base text-slate-600">
                  {feature.description}
                </p>
              </div>

              {/* スクリーンショット部分 */}
              <div className="lg:w-2/3">
                <div className="relative">
                  {/* 背景装飾 */}
                  <div className={clsx(
                    'absolute -inset-4 rounded-2xl opacity-20 blur-xl',
                    index % 3 === 0 && 'bg-gradient-to-r from-cyan-400 to-teal-400',
                    index % 3 === 1 && 'bg-gradient-to-r from-teal-400 to-emerald-400',
                    index % 3 === 2 && 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                  )} />
                  {/* スクリーンショット */}
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    width={1280}
                    height={800}
                    className="relative rounded-xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
