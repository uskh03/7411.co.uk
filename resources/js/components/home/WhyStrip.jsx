import {
    BoltIcon,
    CodeIcon,
    HeadsetIcon,
    PenIcon,
    SearchIcon,
} from '../icons';

const REASONS = [
    {
        title: 'Fast Turnaround',
        description: 'I respect your time. Get quality work delivered on schedule.',
        Icon: BoltIcon,
        tone: 'blue',
    },
    {
        title: 'Clean Code',
        description: 'Well-structured, secure, and scalable code that lasts.',
        Icon: CodeIcon,
        tone: 'green',
    },
    {
        title: 'Modern Design',
        description: 'Beautiful, responsive designs that elevate your brand.',
        Icon: PenIcon,
        tone: 'purple',
    },
    {
        title: 'SEO-Focused Results',
        description: 'Built with best practices to help you rank and grow.',
        Icon: SearchIcon,
        tone: 'amber',
    },
    {
        title: 'Reliable Support',
        description: 'Friendly communication and ongoing support you can count on.',
        Icon: HeadsetIcon,
        tone: 'indigo',
    },
];

export default function WhyStrip() {
    return (
        <section className="why-section">
            <div className="container">
                <div className="why-band">
                    <div className="section-head section-head--dark">
                        <span className="eyebrow">Why Work With Me</span>
                        <h2>Reliable. Fast. Focused on Your Success.</h2>
                    </div>
                    <div className="why-grid">
                        {REASONS.map(({ title, description, Icon, tone }) => (
                            <div key={title} className="why-item">
                                <span className={`why-item__icon why-item__icon--${tone}`}>
                                    <Icon />
                                </span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
