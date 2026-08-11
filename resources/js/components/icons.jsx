// Small stroke-based icon set (24x24 viewBox) used across the site.

function Svg({ children, ...props }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    );
}

export const BoltIcon = (props) => (
    <Svg {...props}>
        <path d="M13 2 3 14h7l-1 8 11-13h-7l1-7z" />
    </Svg>
);

export const ArrowRightIcon = (props) => (
    <Svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    </Svg>
);

export const ChatIcon = (props) => (
    <Svg {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-9 8.36 8.5 8.5 0 0 1-3.4-.86L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z" />
    </Svg>
);

export const StarIcon = (props) => (
    <Svg fill="currentColor" stroke="none" {...props}>
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Svg>
);

export const BugIcon = (props) => (
    <Svg {...props}>
        <path d="M8 7a4 4 0 1 1 8 0" />
        <rect x="7" y="7" width="10" height="12" rx="5" />
        <path d="M12 7v12" />
        <path d="M7 11H3M7 15H4l-1 3M17 11h4M17 15h3l1 3" />
    </Svg>
);

export const DesignIcon = (props) => (
    <Svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m14 7-4 4 1.5 1.5L15.5 8.5 14 7z" />
    </Svg>
);

export const SeoIcon = (props) => (
    <Svg {...props}>
        <path d="M3 21h18" />
        <path d="M7 17v-5M12 17V8M17 17V5" />
        <path d="m4 9 5-4 4 3 6-5" />
    </Svg>
);

export const CodeIcon = (props) => (
    <Svg {...props}>
        <path d="m8 6-6 6 6 6" />
        <path d="m16 6 6 6-6 6" />
    </Svg>
);

export const AppsIcon = (props) => (
    <Svg {...props}>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M9 6h2M9 10h2M13 6h2M13 10h2" />
        <path d="M12 18h.01" />
    </Svg>
);

export const LayersIcon = (props) => (
    <Svg {...props}>
        <path d="m12 2 9 5-9 5-9-5 9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
    </Svg>
);

export const PenIcon = (props) => (
    <Svg {...props}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
    </Svg>
);

export const SearchIcon = (props) => (
    <Svg {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4-4" />
    </Svg>
);

export const HeadsetIcon = (props) => (
    <Svg {...props}>
        <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
        <rect x="2" y="14" width="5" height="6" rx="2" />
        <rect x="17" y="14" width="5" height="6" rx="2" />
    </Svg>
);

export const ShieldIcon = (props) => (
    <Svg {...props}>
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
        <path d="m9 12 2 2 4-4" />
    </Svg>
);

export const CardIcon = (props) => (
    <Svg {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
    </Svg>
);

export const ReceiptIcon = (props) => (
    <Svg {...props}>
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
    </Svg>
);

export const MailIcon = (props) => (
    <Svg {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7L22 7" />
    </Svg>
);

export const GlobeIcon = (props) => (
    <Svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Svg>
);

export const CheckIcon = (props) => (
    <Svg {...props}>
        <path d="m5 13 4 4L19 7" />
    </Svg>
);

export const GridIcon = (props) => (
    <Svg {...props}>
        <circle cx="5" cy="5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="12" cy="5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="19" cy="5" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="5" cy="19" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="19" cy="19" r="1.2" fill="currentColor" stroke="none" />
    </Svg>
);

export const MenuIcon = (props) => (
    <Svg {...props}>
        <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
);

export const CloseIcon = (props) => (
    <Svg {...props}>
        <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
);

export const DiscordIcon = (props) => (
    <Svg fill="currentColor" stroke="none" {...props}>
        <path d="M19.3 5.3A16.9 16.9 0 0 0 15.1 4c-.2.33-.4.77-.55 1.12a15.6 15.6 0 0 0-4.7 0C9.7 4.77 9.48 4.33 9.28 4a16.9 16.9 0 0 0-4.2 1.3C2.4 9.25 1.68 13.1 2.04 16.9a17 17 0 0 0 5.18 2.6c.42-.57.79-1.17 1.11-1.8-.61-.23-1.2-.51-1.75-.84.15-.11.29-.22.43-.33 3.36 1.54 7 1.54 10.32 0 .14.11.28.22.43.33-.55.33-1.14.61-1.75.84.32.63.69 1.23 1.11 1.8a17 17 0 0 0 5.18-2.6c.42-4.4-.72-8.22-3-11.6zM8.68 14.6c-1.01 0-1.84-.92-1.84-2.05 0-1.13.81-2.05 1.84-2.05 1.03 0 1.86.92 1.84 2.05 0 1.13-.81 2.05-1.84 2.05zm6.64 0c-1.01 0-1.84-.92-1.84-2.05 0-1.13.81-2.05 1.84-2.05 1.03 0 1.86.92 1.84 2.05 0 1.13-.81 2.05-1.84 2.05z" />
    </Svg>
);

export const GithubIcon = (props) => (
    <Svg {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </Svg>
);

export const LinkedinIcon = (props) => (
    <Svg {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </Svg>
);

export const TwitterIcon = (props) => (
    <Svg fill="currentColor" stroke="none" {...props}>
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.2 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7 3.9H5.2L17.8 20z" />
    </Svg>
);

export const DribbbleIcon = (props) => (
    <Svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </Svg>
);
