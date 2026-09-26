// Lightweight inline SVG icons — no external icon library needed.
export const IconPerson = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
    <path
      d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M4 20c1.2-3.6 4.3-5.5 8-5.5s6.8 1.9 8 5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const IconGrid = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
    {[5, 12, 19].map((cx) =>
      [5, 12, 19].map((cy) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill="currentColor" />
      ))
    )}
  </svg>
);

export const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
    <path
      d="M5 19c8-1 12-5 13-13-8 1-12 5-13 13Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M6 18c2-3 4-5 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconRefresh = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
    <path
      d="M4 12a8 8 0 0 1 13.6-5.7M20 12a8 8 0 0 1-13.6 5.7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M17 3v4h-4M7 21v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPlay = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
  </svg>
);

export const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
    <circle cx="12" cy="12" r="10" fill="var(--orange-bg)" />
    <path d="M8 12.5 10.8 15 16 9" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconVideo = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" {...props}>
    <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M17 10.5 21 8v8l-4-2.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

export const IconAward = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
    <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 13.5 7.5 21 12 18.5 16.5 21 15 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

export const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 6.5 12 13l9-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
