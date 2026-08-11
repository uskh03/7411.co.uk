import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { CloseIcon, MenuIcon } from './icons';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pay', label: 'Pay' },
    { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <Logo />

                <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Main">
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className="navbar__link"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="btn btn--gradient navbar__cta--mobile"
                        onClick={() => setOpen(false)}
                    >
                        Let's Work Together
                    </Link>
                </nav>

                <div className="navbar__actions">
                    <Link to="/contact" className="btn btn--gradient navbar__cta">
                        Let's Work Together
                    </Link>
                    <button
                        type="button"
                        className="navbar__toggle"
                        aria-expanded={open}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
