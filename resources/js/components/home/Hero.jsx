import { Link } from 'react-router-dom';
import { ArrowRightIcon, BoltIcon, ChatIcon, StarIcon } from '../icons';
import DeviceMockup from './DeviceMockup';

const AVATARS = [
    { initials: 'JM', from: '#f97316', to: '#ef4444' },
    { initials: 'SK', from: '#22c55e', to: '#0ea5e9' },
    { initials: 'AR', from: '#8b5cf6', to: '#ec4899' },
    { initials: 'DL', from: '#4f6bf5', to: '#06b6d4' },
    { initials: 'TB', from: '#eab308', to: '#f97316' },
];

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__copy">
                    <span className="hero__badge">
                        <BoltIcon /> Freelance Digital Studio
                    </span>
                    <h1>
                        Build. Fix. Grow.
                        <br />
                        Websites &amp; Software
                        <br />
                        That <span className="text-gradient">Work Better.</span>
                    </h1>
                    <p>
                        I help businesses and founders build fast, fix issues, and grow
                        online with clean code, modern design, and SEO-focused solutions
                        that deliver real results.
                    </p>
                    <div className="hero__actions">
                        <Link to="/services" className="btn btn--gradient btn--lg">
                            View Services <ArrowRightIcon />
                        </Link>
                        <Link to="/contact" className="btn btn--ghost btn--lg">
                            Contact Me <ChatIcon />
                        </Link>
                    </div>
                    <div className="hero__trust">
                        <span className="hero__trust-label">
                            Trusted by
                            <br />
                            founders &amp; businesses
                        </span>
                        <div className="hero__avatars">
                            {AVATARS.map(({ initials, from, to }) => (
                                <span
                                    key={initials}
                                    className="hero__avatar"
                                    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                                >
                                    {initials}
                                </span>
                            ))}
                        </div>
                        <div className="hero__rating">
                            <span className="hero__stars" aria-label="Rated 5 out of 5">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <StarIcon key={i} />
                                ))}
                                <b>5.0</b>
                            </span>
                            <span className="hero__rating-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
                <DeviceMockup />
            </div>
        </section>
    );
}
