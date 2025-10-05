export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  // Minimal placeholder: soft rounded diamond with CF monogram
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Cumberland Flux</title>
      <defs>
        <linearGradient id="cfGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="hsl(var(--secondary))" />
          <stop offset="1" stopColor="hsl(var(--primary))" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="10"
        transform="rotate(45 24 24)"
        fill="url(#cfGrad)"
      />
      <text
        x="50%"
        y="53%"
        textAnchor="middle"
        fontFamily="var(--font-display, inherit)"
        fontSize="16"
        fontWeight="700"
        fill="hsl(var(--on-primary))"
      >
        CF
      </text>
    </svg>
  );
}
