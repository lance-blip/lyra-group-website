type LyraMarkProps = {
  className?: string;
  title?: string;
};

/** Icon-only constellation lyre mark — works light/dark via currentColor */
export function LyraMark({ className = "h-8 w-8", title = "Lyra Group" }: LyraMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Constellation geometry suggesting a lyre / homeward arc */}
      <path
        d="M18 46 L24 22 L32 12 L40 22 L46 46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M24 22 L40 22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M26 34 L38 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Stars */}
      <circle cx="32" cy="12" r="2.6" fill="currentColor" />
      <circle cx="24" cy="22" r="2.1" fill="currentColor" />
      <circle cx="40" cy="22" r="2.1" fill="currentColor" />
      <circle cx="26" cy="34" r="1.7" fill="currentColor" />
      <circle cx="38" cy="34" r="1.7" fill="currentColor" />
      <circle cx="18" cy="46" r="2" fill="currentColor" />
      <circle cx="46" cy="46" r="2" fill="currentColor" />
      {/* Soft outer glow ring */}
      <circle
        cx="32"
        cy="30"
        r="26"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.18"
      />
    </svg>
  );
}

type LyraWordmarkProps = {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
};

export function LyraWordmark({
  className = "",
  showTagline = false,
  inverted = false,
}: LyraWordmarkProps) {
  const color = inverted ? "text-lyra-star" : "text-lyra-primary";
  return (
    <div className={`flex items-center gap-2.5 ${color} ${className}`}>
      <LyraMark className="h-9 w-9 shrink-0" />
      <div className="leading-tight">
        <div className="font-serif text-lg font-semibold tracking-tight sm:text-xl">
          Lyra Group
        </div>
        {showTagline && (
          <div
            className={`text-[0.7rem] font-medium tracking-wide ${
              inverted ? "text-lyra-accent" : "text-lyra-muted"
            }`}
          >
            Precision Recovery. Purposeful Results.
          </div>
        )}
      </div>
    </div>
  );
}
