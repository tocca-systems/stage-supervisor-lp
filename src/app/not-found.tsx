import Image from 'next/image'

import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg md:p-12">
        {/* 404画像 */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo_404.png"
            alt="404 - ページが見つかりません"
            width={400}
            height={300}
            className="w-full max-w-xs object-contain"
          />
        </div>

        {/* テキスト */}
        <h1 className="mb-3 text-xl font-bold text-gray-900">
          ページが見つかりません
        </h1>

        <p className="mb-8 text-sm text-gray-600">
          お探しのページは存在しないか、移動した可能性があります。
        </p>

        {/* ボタン */}
        <Button href="/">トップページへ戻る</Button>
      </div>
    </div>
  )
}
