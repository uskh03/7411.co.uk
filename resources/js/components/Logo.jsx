import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className="logo" aria-label="7411 Studio — home">
            <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
                <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#4f6bf5" />
                        <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
                <path
                    d="M4 6h16l-9 28h-7l7.5-22H4V6z"
                    fill="url(#logo-grad)"
                />
                <path
                    d="M27 6h7v28h-7V13l-5 3V9l5-3z"
                    fill="url(#logo-grad)"
                    opacity="0.85"
                />
            </svg>
            <span className="logo__text">7411 Studio</span>
        </Link>
    );
}
