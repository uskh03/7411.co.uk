import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
    DiscordIcon,
    DribbbleIcon,
    GithubIcon,
    GlobeIcon,
    LinkedinIcon,
    MailIcon,
    TwitterIcon,
} from './icons';

const QUICK_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pay', label: 'Pay' },
    { to: '/contact', label: 'Contact Us' },
];

const SOCIALS = [
    { href: 'https://github.com', label: 'GitHub', Icon: GithubIcon },
    { href: 'https://www.linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
    { href: 'https://x.com', label: 'X (Twitter)', Icon: TwitterIcon },
    { href: 'https://dribbble.com', label: 'Dribbble', Icon: DribbbleIcon },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <Logo />
                    <p>
                        Building, fixing, and growing digital experiences that make an
                        impact.
                    </p>
                </div>

                <nav className="footer__col" aria-label="Quick links">
                    <h3>Quick Links</h3>
                    <ul>
                        {QUICK_LINKS.map(({ to, label }) => (
                            <li key={to}>
                                <Link to={to}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__col">
                    <h3>Let's Connect</h3>
                    <ul>
                        <li>
                            <a href="mailto:hello@7411.co.uk" className="footer__contact">
                                <MailIcon /> hello@7411.co.uk
                            </a>
                        </li>
                        <li>
                            <span className="footer__contact">
                                <DiscordIcon /> itachip
                            </span>
                        </li>
                        <li>
                            <span className="footer__contact">
                                <GlobeIcon /> Remote Worldwide
                            </span>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        {SOCIALS.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container footer__bottom">
                <p>© {new Date().getFullYear()} 7411 Studio. All rights reserved.</p>
            </div>
        </footer>
    );
}
