import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-with-text.png"
      alt="Stage Supervisor"
      width={200}
      height={40}
      className={className}
      priority
    />
  )
}
