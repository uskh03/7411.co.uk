import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

// Shared shell for pages that are wired up but not built out yet.
export default function PagePlaceholder({ eyebrow, title, description, children }) {
    return (
        <section className="page-hero">
            <div className="container page-hero__inner">
                <span className="hero__badge">{eyebrow}</span>
                <h1>{title}</h1>
                <p>{description}</p>
                {children}
                <div className="page-hero__note">
                    <p>This page is under construction — check back soon.</p>
                    <Link to="/" className="btn btn--gradient">
                        Back to Home <ArrowRightIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
}
