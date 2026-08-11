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
                <Link to="/" className="btn btn--gradient btn--lg page-hero__cta">
                    Back to Home <ArrowRightIcon />
                </Link>
            </div>
        </section>
    );
}
