/** Clean desk / office vector — designed illustration, not a stock photo. */
export function DeskIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Professional desk illustration"
    >
      <defs>
        <linearGradient id="dk-bg" x1="0" y1="0" x2="0" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAF8F5" />
          <stop offset="1" stopColor="#EDE6DB" />
        </linearGradient>
        <linearGradient id="dk-monitor" x1="140" y1="50" x2="340" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B2A4A" />
          <stop offset="1" stopColor="#0A1020" />
        </linearGradient>
      </defs>
      <rect width="480" height="280" rx="20" fill="url(#dk-bg)" />
      {/* wall accent */}
      <rect x="0" y="0" width="480" height="8" fill="#D4A574" opacity="0.45" />
      {/* desk surface */}
      <path d="M40 190 H440 V210 C440 218 434 224 426 224 H54 C46 224 40 218 40 210 V190 Z" fill="#3D4F6F" />
      <path d="M40 190 H440 V198 H40 Z" fill="#C4784A" opacity="0.85" />
      {/* monitor */}
      <rect x="145" y="58" width="190" height="118" rx="10" fill="url(#dk-monitor)" />
      <rect x="156" y="70" width="168" height="90" rx="4" fill="#152038" />
      {/* chart on screen */}
      <path d="M175 140 L205 115 L235 125 L265 95 L305 105" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="305" cy="105" r="4" fill="#C4784A" />
      {/* stand */}
      <rect x="228" y="176" width="24" height="14" fill="#1B2A4A" />
      <rect x="205" y="186" width="70" height="6" rx="2" fill="#1B2A4A" />
      {/* notebook */}
      <rect x="70" y="168" width="58" height="40" rx="3" fill="#F5EFE6" stroke="#D4A574" strokeWidth="2" />
      <path d="M80 180 H118 M80 188 H110 M80 196 H114" stroke="#3D4F6F" strokeWidth="1.5" opacity="0.45" />
      {/* coffee */}
      <ellipse cx="380" cy="178" rx="18" ry="6" fill="#1B2A4A" opacity="0.15" />
      <rect x="366" y="150" width="28" height="30" rx="4" fill="#C4784A" />
      <path d="M394 158 C404 158 404 172 394 172" stroke="#C4784A" strokeWidth="4" fill="none" />
      <ellipse cx="380" cy="150" rx="14" ry="4" fill="#D4A574" />
      {/* plant */}
      <rect x="420" y="160" width="18" height="28" rx="2" fill="#1B2A4A" />
      <ellipse cx="429" cy="150" rx="16" ry="10" fill="#2F6F4E" />
      <ellipse cx="418" cy="155" rx="10" ry="7" fill="#3D8B62" />
      {/* floating badge */}
      <rect x="300" y="210" width="120" height="36" rx="18" fill="#1B2A4A" />
      <text x="360" y="233" textAnchor="middle" fill="#D4A574" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        No Collection. No Fee.
      </text>
    </svg>
  );
}
