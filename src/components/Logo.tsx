export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 40" {...props}>
      {/* Theater curtain icon */}
      <circle cx="20" cy="20" r="18" fill="#7c3aed" />
      <path
        d="M10 14 L20 10 L30 14 L30 28 Q25 32 20 28 Q15 32 10 28 Z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="20" cy="18" r="4" fill="#7c3aed" />
      {/* Text: Stage Supervisor */}
      <text
        x="45"
        y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#0F172A"
      >
        Stage Supervisor
      </text>
    </svg>
  )
}
