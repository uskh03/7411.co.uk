import { Link } from 'react-router-dom';
import {
    AppsIcon,
    ArrowRightIcon,
    BugIcon,
    CodeIcon,
    DesignIcon,
    LayersIcon,
    SeoIcon,
} from '../icons';

const SERVICES = [
    {
        title: 'Bug Fixing',
        description: 'Quick turnaround to fix issues and get your site or app running smoothly.',
        Icon: BugIcon,
        tone: 'red',
    },
    {
        title: 'Website Design',
        description: 'Modern, responsive designs that convert visitors into loyal customers.',
        Icon: DesignIcon,
        tone: 'blue',
    },
    {
        title: 'SEO',
        description: 'On-page, technical SEO and performance optimizations that boost rankings.',
        Icon: SeoIcon,
        tone: 'green',
    },
    {
        title: 'Programming',
        description: 'Clean, efficient code and custom solutions built for performance and scalability.',
        Icon: CodeIcon,
        tone: 'purple',
    },
    {
        title: 'Applications',
        description: 'Custom web & mobile applications tailored to your business needs.',
        Icon: AppsIcon,
        tone: 'orange',
    },
    {
        title: 'Software Development',
        description: 'Robust, secure, and scalable software solutions from start to finish.',
        Icon: LayersIcon,
        tone: 'indigo',
    },
];

export default function ServicesGrid() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">What I Do</span>
                    <h2>Services That Drive Results</h2>
                    <p>End-to-end solutions to build, improve, and grow your digital presence.</p>
                </div>
                <div className="services-grid">
                    {SERVICES.map(({ title, description, Icon, tone }) => (
                        <Link to="/services" key={title} className="service-card">
                            <span className={`service-card__icon service-card__icon--${tone}`}>
                                <Icon />
                            </span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <span className="service-card__arrow">
                                <ArrowRightIcon />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
