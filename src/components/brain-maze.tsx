export function BrainMaze({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <filter id="brain-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#brain-glow)" strokeLinecap="round" strokeLinejoin="round">
        {/* four lobes as nested rounded mazes */}
        <path
          d="M160 140 C 110 138, 72 108, 68 64 C 66 36, 92 18, 128 28 C 148 34, 156 58, 158 88 C 150 70, 128 58, 108 68 C 92 76, 90 98, 112 108 C 132 118, 148 112, 158 98"
          stroke="var(--color-gold)"
          strokeWidth="2.2"
        />
        <path
          d="M160 140 C 210 138, 248 108, 252 64 C 254 36, 228 18, 192 28 C 172 34, 164 58, 162 88 C 170 70, 192 58, 212 68 C 228 76, 230 98, 208 108 C 188 118, 172 112, 162 98"
          stroke="var(--color-cyan)"
          strokeWidth="2.2"
        />
        <path
          d="M160 140 C 110 142, 72 172, 68 216 C 66 244, 92 262, 128 252 C 148 246, 156 222, 158 192 C 150 210, 128 222, 108 212 C 92 204, 90 182, 112 172 C 132 162, 148 168, 158 182"
          stroke="var(--color-cyan)"
          strokeWidth="2.2"
        />
        <path
          d="M160 140 C 210 142, 248 172, 252 216 C 254 244, 228 262, 192 252 C 172 246, 164 222, 162 192 C 170 210, 192 222, 212 212 C 228 204, 230 182, 208 172 C 188 162, 172 168, 162 182"
          stroke="var(--color-gold)"
          strokeWidth="2.2"
        />
        <path
          d="M160 52 C 138 48, 118 56, 108 74"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          opacity="0.7"
        />
        <path
          d="M160 52 C 182 48, 202 56, 212 74"
          stroke="var(--color-cyan)"
          strokeWidth="1.4"
          opacity="0.7"
        />
        <path
          d="M160 228 C 138 232, 118 224, 108 206"
          stroke="var(--color-cyan)"
          strokeWidth="1.4"
          opacity="0.7"
        />
        <path
          d="M160 228 C 182 232, 202 224, 212 206"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          opacity="0.7"
        />
        <circle cx="160" cy="140" r="10" fill="var(--color-gold)" />
        <circle cx="160" cy="140" r="18" stroke="var(--color-gold)" strokeWidth="1.2" opacity="0.5" />
      </g>
    </svg>
  );
}
