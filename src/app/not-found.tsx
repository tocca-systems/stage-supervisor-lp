import Image from 'next/image'

import { Button } from '@/components/Button'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex justify-center">
        <Image
          src="/logo_404.png"
          alt="404 - ページが見つかりません"
          width={600}
          height={400}
          className="w-full max-w-md object-contain"
        />
      </div>
      <h1 className="mt-8 text-lg font-semibold text-gray-900">
        ページが見つかりません
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Button href="/" className="mt-10">
        トップページへ戻る
      </Button>
    </SlimLayout>
  )
}
