import Badge from "./ui/Badge";

export default function RhinoCoffeeSection() {
  return (
    <section className="rhino-coffee-section">
      <div className="container rhino-coffee-grid">
        <div className="rhino-coffee-copy">
          <Badge variant="outline" className="mb-4">
            A Nickelodeon-inspired cartoon vibe
          </Badge>
          <h2 className="rhino-coffee-title">
            A playful, colorful café scene with a classic Nickelodeon feel
          </h2>
          <p className="rhino-coffee-text">
            This version leans into bright, cheerful color, thick outlines, expressive faces, and a warm, family-friendly cartoon energy.
          </p>
          <div className="rhino-coffee-tags" aria-label="Highlights">
            <span>Ethiopia</span>
            <span>Colombia</span>
            <span>Kenya</span>
          </div>
        </div>

        <div className="rhino-coffee-scene" aria-hidden="true">
          <div className="rhino-coffee-glow" />
          <svg viewBox="0 0 760 520" className="rhino-art">
            <rect x="54" y="82" width="652" height="348" rx="36" fill="#ffc96b" />
            <rect x="84" y="108" width="592" height="292" rx="28" fill="#fff8e8" />
            <rect x="120" y="140" width="236" height="164" rx="24" fill="#7fc8ff" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="372" y="140" width="268" height="164" rx="24" fill="#ff8d5f" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="114" y="330" width="532" height="58" rx="18" fill="#5d3a24" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="142" y="196" width="176" height="102" rx="16" fill="#2a5fb4" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="400" y="196" width="220" height="102" rx="16" fill="#e4483d" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="166" y="214" width="44" height="44" rx="10" fill="#fce8bd" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="426" y="214" width="44" height="44" rx="10" fill="#fce8bd" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="556" y="214" width="44" height="44" rx="10" fill="#fce8bd" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="226" y="222" width="50" height="28" rx="10" fill="#7f4a23" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="486" y="222" width="50" height="28" rx="10" fill="#7f4a23" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="614" y="222" width="50" height="28" rx="10" fill="#7f4a23" stroke="#2a2a2a" strokeWidth="6" />
            <ellipse cx="178" cy="182" rx="24" ry="12" fill="#ffd15d" stroke="#2a2a2a" strokeWidth="5" />
            <ellipse cx="462" cy="182" rx="24" ry="12" fill="#ffd15d" stroke="#2a2a2a" strokeWidth="5" />
            <ellipse cx="630" cy="182" rx="24" ry="12" fill="#ffd15d" stroke="#2a2a2a" strokeWidth="5" />

            <path d="M136 126 C190 92, 270 92, 320 128" stroke="#3ecb7b" strokeWidth="18" fill="none" strokeLinecap="round" />
            <path d="M450 126 C502 92, 584 92, 632 128" stroke="#ffcf4a" strokeWidth="18" fill="none" strokeLinecap="round" />

            <rect x="260" y="296" width="244" height="102" rx="28" fill="#ffca63" stroke="#2a2a2a" strokeWidth="8" />
            <rect x="282" y="314" width="198" height="58" rx="18" fill="#fff6d8" stroke="#2a2a2a" strokeWidth="6" />
            <rect x="304" y="328" width="34" height="22" rx="8" fill="#5a3a24" />
            <rect x="352" y="328" width="34" height="22" rx="8" fill="#5a3a24" />
            <rect x="324" y="276" width="40" height="28" rx="10" fill="#5a3a24" stroke="#2a2a2a" strokeWidth="6" />
            <path d="M316 282 C328 244, 362 240, 372 278" stroke="#5a3a24" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M312 330 C300 348, 298 362, 298 376" stroke="#5a3a24" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M372 330 C384 348, 386 362, 386 376" stroke="#5a3a24" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M320 376 C332 388, 346 392, 358 388" stroke="#5a3a24" strokeWidth="8" fill="none" strokeLinecap="round" />

            <g transform="translate(138 166)">
              <ellipse cx="46" cy="92" rx="40" ry="48" fill="#5c321f" stroke="#2a2a2a" strokeWidth="7" />
              <ellipse cx="46" cy="50" rx="24" ry="26" fill="#5c321f" stroke="#2a2a2a" strokeWidth="7" />
              <path d="M28 24 L10 10" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
              <path d="M62 24 L80 10" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
              <path d="M30 124 C24 138 18 152 12 168" stroke="#2a2a2a" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M60 124 C66 138 72 152 78 168" stroke="#2a2a2a" strokeWidth="8" fill="none" strokeLinecap="round" />
              <ellipse cx="46" cy="116" rx="20" ry="16" fill="#f4b57b" stroke="#2a2a2a" strokeWidth="6" />
              <circle cx="42" cy="48" r="7" fill="#fdeed0" stroke="#2a2a2a" strokeWidth="4" />
              <circle cx="39" cy="48" r="3.5" fill="#1f1b17" />
              <text x="8" y="196" fontSize="18" fontFamily="Arial Black, Arial, sans-serif" fill="#2f2f2f">ETHIOPIA</text>
            </g>

            <g transform="translate(368 166)">
              <ellipse cx="68" cy="84" rx="44" ry="38" fill="#8d4e2f" stroke="#2a2a2a" strokeWidth="7" />
              <path d="M36 32 C24 12 42 0 60 0 C76 0 92 12 86 32" stroke="#8d4e2f" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M28 66 C36 88 50 100 70 106" stroke="#6b3a20" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M94 66 C102 84 114 96 128 102" stroke="#6b3a20" strokeWidth="8" fill="none" strokeLinecap="round" />
              <ellipse cx="68" cy="44" rx="15" ry="18" fill="#f7d7b0" stroke="#2a2a2a" strokeWidth="5" />
              <circle cx="68" cy="44" r="4.5" fill="#1f1b17" />
              <text x="26" y="196" fontSize="18" fontFamily="Arial Black, Arial, sans-serif" fill="#2f2f2f">COLOMBIA</text>
            </g>

            <g transform="translate(600 166)">
              <ellipse cx="38" cy="86" rx="34" ry="42" fill="#7a593a" stroke="#2a2a2a" strokeWidth="7" />
              <path d="M18 44 C10 26 24 10 38 10 C52 10 66 24 58 44" stroke="#7a593a" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M14 62 L2 36" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
              <path d="M56 62 L68 36" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
              <path d="M28 114 C24 130 22 146 18 162" stroke="#2a2a2a" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M44 114 C48 130 50 146 54 162" stroke="#2a2a2a" strokeWidth="8" fill="none" strokeLinecap="round" />
              <ellipse cx="38" cy="44" rx="10" ry="12" fill="#f1d5aa" stroke="#2a2a2a" strokeWidth="4" />
              <circle cx="36" cy="44" r="3.5" fill="#1f1b17" />
              <text x="18" y="196" fontSize="18" fontFamily="Arial Black, Arial, sans-serif" fill="#2f2f2f">KENYA</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
