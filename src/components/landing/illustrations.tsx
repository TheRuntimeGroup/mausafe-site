import type { ReactNode } from "react";

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_60px_-24px_rgba(15,118,110,0.25)] ${className ?? ""}`}
    >
      <div className="relative p-6 sm:p-8">{children}</div>
    </div>
  );
}

export function ScamCheckIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Scam link detection">
        {/* Phone body */}
        <rect x="28" y="18" width="180" height="224" rx="28" fill="#0F2937" />
        <rect x="36" y="28" width="164" height="204" rx="22" fill="#FBF8F2" />
        <rect x="96" y="34" width="44" height="8" rx="4" fill="#0F2937" />

        {/* Incoming message */}
        <rect x="48" y="66" width="120" height="34" rx="12" fill="#E7F1EF" />
        <rect x="58" y="76" width="88" height="6" rx="3" fill="#9DB8B2" />
        <rect x="58" y="86" width="64" height="6" rx="3" fill="#9DB8B2" />

        {/* Link pill */}
        <rect x="48" y="110" width="132" height="30" rx="15" fill="#DCEBE8" />
        <rect x="60" y="120" width="16" height="10" rx="3" fill="#0F766E" />
        <rect x="82" y="119" width="86" height="6" rx="3" fill="#0F766E" opacity="0.7" />
        <rect x="82" y="128" width="60" height="5" rx="2.5" fill="#0F766E" opacity="0.4" />

        {/* Magnifying glass */}
        <circle cx="196" cy="170" r="40" fill="#14B8A6" />
        <circle cx="196" cy="170" r="26" fill="white" />
        <circle cx="196" cy="170" r="16" fill="#CCFBF1" />
        <rect x="226" y="198" width="12" height="34" rx="6" fill="#0F766E" transform="rotate(-45 232 215)" />

        {/* Shield with score */}
        <g transform="translate(244 46)">
          <path
            d="M40 6c2.4 0 4.7.6 6.8 1.6l18 8.5c1.7.8 2.8 2.5 2.8 4.4v13.1c0 11.6-7.4 22.2-18.7 27a10 10 0 0 1-8.2 0C21.4 55.8 14 45.2 14 33.6V20.5c0-1.9 1.1-3.6 2.8-4.4l18-8.5C37.3 6.6 39.6 6 40 6Z"
            fill="#0F766E"
          />
          <path d="m29 33 7 7 15-15" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="66" y="26" className="font-display" fontSize="20" fontWeight="700" fill="#0F2937">92%</text>
          <text x="66" y="42" fontSize="11" fill="#64748B">Safe</text>
        </g>
      </svg>
    </Frame>
  );
}

export function SosIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Emergency SOS alert">
        {/* SOS button */}
        <g transform="translate(112 24)">
          <circle cx="64" cy="64" r="58" fill="#FFF1F2" />
          <circle cx="64" cy="64" r="56" fill="none" stroke="#FECDD3" strokeWidth="2" />
          <circle cx="64" cy="64" r="44" fill="#F43F5E" />
          <text x="64" y="71" textAnchor="middle" className="font-display" fontSize="24" fontWeight="800" fill="white">
            SOS
          </text>
        </g>

        {/* Contact avatars */}
        <g transform="translate(40 176)">
          <circle cx="24" cy="24" r="24" fill="#14B8A6" />
          <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">MK</text>
        </g>
        <g transform="translate(96 176)">
          <circle cx="24" cy="24" r="24" fill="#F59E0B" />
          <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">AD</text>
        </g>
        <g transform="translate(152 176)">
          <circle cx="24" cy="24" r="24" fill="#6366F1" />
          <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">SL</text>
        </g>
        <g transform="translate(208 176)">
          <circle cx="24" cy="24" r="24" fill="#E2E8F0" />
          <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="#475569">+</text>
        </g>

        {/* Signal arcs */}
        <g transform="translate(264 24)" fill="none" stroke="#0F766E" strokeWidth="4" strokeLinecap="round">
          <path d="M18 84 C 18 46, 86 46, 86 84" opacity="0.3" />
          <path d="M34 84 C 34 62, 70 62, 70 84" opacity="0.55" />
          <path d="M52 84 A 1 1 0 0 1 52 84" opacity="0.8" />
          <circle cx="52" cy="84" r="5" fill="#0F766E" stroke="none" />
        </g>

        {/* Alert badge */}
        <g transform="translate(250 150)">
          <rect x="0" y="0" width="88" height="40" rx="20" fill="#0F2937" />
          <circle cx="20" cy="20" r="8" fill="#F43F5E" />
          <text x="36" y="25" fontSize="12" fontWeight="600" fill="white">Alert sent</text>
        </g>
      </svg>
    </Frame>
  );
}

export function SafeHavenIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Safe haven map">
        {/* Map base */}
        <rect x="20" y="20" width="320" height="220" rx="24" fill="#EAF3F1" />

        {/* Streets */}
        <path d="M20 150 C 120 120, 200 180, 340 140" fill="none" stroke="#D5E7E2" strokeWidth="20" strokeLinecap="round" />
        <path d="M90 20 C 80 110, 110 180, 100 240" fill="none" stroke="#D5E7E2" strokeWidth="16" strokeLinecap="round" />
        <path d="M220 20 C 210 90, 250 160, 235 240" fill="none" stroke="#D5E7E2" strokeWidth="16" strokeLinecap="round" />

        {/* Route */}
        <path d="M120 210 C 160 160, 200 140, 250 120" fill="none" stroke="#0F766E" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />

        {/* You */}
        <g transform="translate(112 200)">
          <circle cx="12" cy="12" r="18" fill="#14B8A6" opacity="0.25" />
          <circle cx="12" cy="12" r="9" fill="#14B8A6" stroke="white" strokeWidth="3" />
        </g>

        {/* Safe haven pin */}
        <g transform="translate(240 100)">
          <path d="M22 6c-7.7 0-14 6.3-14 14 0 10 14 22 14 22s14-12 14-22c0-7.7-6.3-14-14-14Z" fill="#0F766E" />
          <circle cx="22" cy="20" r="6" fill="white" />
        </g>

        {/* Shop sticker */}
        <g transform="translate(150 60)">
          <circle cx="18" cy="18" r="18" fill="#0F2937" />
          <path d="m11 18 4.5 4.5L25 13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Label card */}
        <g transform="translate(48 32)">
          <rect x="0" y="0" width="132" height="46" rx="14" fill="white" />
          <circle cx="23" cy="23" r="8" fill="#14B8A6" />
          <text x="40" y="20" fontSize="12" fontWeight="600" fill="#0F2937">Safe haven</text>
          <text x="40" y="35" fontSize="10" fill="#64748B">Maple Corner Café</text>
        </g>
      </svg>
    </Frame>
  );
}

export function CallDetectionIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Call verification">
        {/* Phone */}
        <rect x="28" y="18" width="180" height="224" rx="28" fill="#0F2937" />
        <rect x="36" y="28" width="164" height="204" rx="22" fill="#FBF8F2" />
        <rect x="96" y="34" width="44" height="8" rx="4" fill="#0F2937" />

        {/* Caller */}
        <circle cx="118" cy="92" r="26" fill="#14B8A6" />
        <text x="118" y="98" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">B</text>
        <text x="118" y="140" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0F2937">Bank of Mau</text>
        <text x="118" y="158" textAnchor="middle" fontSize="11" fill="#64748B">Incoming call…</text>

        {/* Verify shield overlay */}
        <g transform="translate(92 176)">
          <path
            d="M26 4c1.6 0 3.1.4 4.4 1l12.6 5.9c1.2.6 2 1.8 2 3.1v8.7c0 7.7-4.9 14.7-12.4 17.9a6.6 6.6 0 0 1-5.4 0C15.9 37.8 11 30.8 11 23.1V14c0-1.3.8-2.5 2-3.1L25.6 5c1.3-.6 2.8-1 4.4-1Z"
            fill="#0F766E"
          />
          <path d="m19 22 5 5 9.5-9.5" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Verified notification */}
        <g transform="translate(216 34)">
          <rect x="0" y="0" width="122" height="76" rx="16" fill="#0F2937" />
          <circle cx="16" cy="16" r="7" fill="#22C55E" />
          <text x="30" y="15" fontSize="11" fontWeight="600" fill="white">Verified caller</text>
          <text x="30" y="29" fontSize="9" fill="#94A3B8">Number matches official registry</text>
          <rect x="12" y="44" width="98" height="20" rx="10" fill="#1E3A49" />
          <text x="20" y="57" fontSize="10" fill="#A7F3D0">No action needed</text>
        </g>

        {/* Sparkles */}
        <g transform="translate(208 150)" fill="#14B8A6">
          <path d="M16 0c1 8 5 12 13 13-8 1-12 5-13 13-1-8-5-12-13-13C8 12 12 8 16 0Z" />
        </g>
        <g transform="translate(250 180)" fill="#F59E0B" opacity="0.8">
          <path d="M8 0c.5 4 2.5 6 6.5 6.5-4 .5-6 2.5-6.5 6.5C7.5 9 5.5 7 1.5 6.5 6 6 8 4 8 0Z" />
        </g>
      </svg>
    </Frame>
  );
}
