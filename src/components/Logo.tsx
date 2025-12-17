import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo_lockup_horizontal.png"
      alt="GEKI TOCCA"
      width={200}
      height={40}
      className={className}
      priority
    />
  )
}
