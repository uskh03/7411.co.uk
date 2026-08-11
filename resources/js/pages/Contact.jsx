import usePageMeta from '../lib/usePageMeta';
import PagePlaceholder from '../components/PagePlaceholder';

export default function Contact() {
    usePageMeta('contact');

    return (
        <PagePlaceholder
            eyebrow="Let's Build Something Great"
            title="Contact Us"
            description="Have a project in mind? Whether you need a quick fix or a full-scale solution, I'm here to help you build, fix, and grow."
        >
            <p className="page-hero__contact">
                Email me at{' '}
                <a href="mailto:hello@7411.co.uk">hello@7411.co.uk</a>
            </p>
        </PagePlaceholder>
    );
}
