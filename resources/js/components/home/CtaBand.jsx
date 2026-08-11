import { Link } from 'react-router-dom';
import { ArrowRightIcon, GridIcon, MailIcon } from '../icons';

export default function CtaBand() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-band">
                    <div className="cta-band__copy">
                        <span className="cta-band__icon">
                            <MailIcon />
                        </span>
                        <div>
                            <span className="eyebrow">Let's Build Something Great</span>
                            <h2>Have a Project in Mind?</h2>
                            <p>
                                Whether you need a quick fix or a full-scale solution, I'm
                                here to help you build, fix, and grow.
                            </p>
                        </div>
                    </div>
                    <div className="cta-band__actions">
                        <Link to="/contact" className="btn btn--gradient btn--lg">
                            Contact Me <ArrowRightIcon />
                        </Link>
                        <Link to="/services" className="btn btn--ghost btn--lg">
                            View Services <GridIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
