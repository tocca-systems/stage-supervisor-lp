# GEKI TOCCA LP

GEKI TOCCA（舞台・演劇等の制作進行管理SaaS）のランディングページです。

## 技術スタック

- [Next.js](https://nextjs.org) 15
- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.dev)
- TypeScript

## 開発環境のセットアップ

依存パッケージをインストール：

```bash
npm install
```

開発サーバーを起動：

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## ビルド

本番用ビルド：

```bash
npm run build
```

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router
│   ├── legal/              # 利用規約・プライバシーポリシー等
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/             # UIコンポーネント
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PrimaryFeatures.tsx
│   ├── Pricing.tsx
│   ├── Footer.tsx
│   └── ...
├── images/
└── styles/
public/
├── logo_lockup_horizontal.png
├── logo_lockup_vertical.png
├── logo_task.png
├── logo_schedule.png
├── logo_member.png
├── logo_stage.png
└── logo_404.png
```

## 関連リンク

- 本番サイト: https://geki.tocca.systems（予定）
- SaaSアプリ: https://gekiapp.tocca.systems
