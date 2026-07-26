/** Vector-style professional handshake — designed, not stock photo. */
export function HandshakeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Professional handshake illustration"
    >
      <defs>
        <linearGradient id="hs-bg" x1="0" y1="0" x2="480" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B2A4A" />
          <stop offset="1" stopColor="#0A1020" />
        </linearGradient>
        <linearGradient id="hs-skin" x1="120" y1="80" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8C4A0" />
          <stop offset="1" stopColor="#C4784A" />
        </linearGradient>
        <linearGradient id="hs-sleeve" x1="40" y1="100" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3D4F6F" />
          <stop offset="1" stopColor="#1B2A4A" />
        </linearGradient>
      </defs>
      <rect width="480" height="280" rx="20" fill="url(#hs-bg)" />
      {/* soft stars */}
      <circle cx="60" cy="48" r="1.5" fill="#F5EFE6" opacity="0.7" />
      <circle cx="420" cy="40" r="1.2" fill="#D4A574" opacity="0.8" />
      <circle cx="400" cy="90" r="1" fill="#F5EFE6" opacity="0.5" />
      <circle cx="90" cy="220" r="1.3" fill="#D4A574" opacity="0.6" />
      {/* left sleeve */}
      <path
        d="M20 200 C70 170 110 150 160 145 L175 175 C120 185 70 210 30 250 Z"
        fill="url(#hs-sleeve)"
      />
      {/* right sleeve */}
      <path
        d="M460 200 C410 170 370 150 320 145 L305 175 C360 185 410 210 450 250 Z"
        fill="#2A3D5C"
      />
      {/* hands clasp */}
      <path
        d="M155 150 C190 120 230 115 250 130 C270 115 310 120 345 150 C330 185 290 200 250 195 C210 200 170 185 155 150 Z"
        fill="url(#hs-skin)"
      />
      <path
        d="M200 145 C220 135 240 135 250 142 C260 135 280 135 300 145"
        stroke="#1B2A4A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
      {/* cuff accents */}
      <path d="M150 155 L175 170" stroke="#D4A574" strokeWidth="4" strokeLinecap="round" />
      <path d="M330 155 L305 170" stroke="#D4A574" strokeWidth="4" strokeLinecap="round" />
      {/* brand ring / seal */}
      <circle cx="250" cy="62" r="22" stroke="#D4A574" strokeWidth="2" opacity="0.85" />
      <circle cx="250" cy="62" r="4" fill="#C4784A" />
      <path d="M242 70 L250 54 L258 70" stroke="#F5EFE6" strokeWidth="1.5" fill="none" opacity="0.7" />
    </svg>
  );
}
