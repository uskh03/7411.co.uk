import usePageMeta from '../lib/usePageMeta';
import PagePlaceholder from '../components/PagePlaceholder';

export default function Services() {
    usePageMeta('services');

    return (
        <PagePlaceholder
            eyebrow="What I Do"
            title="Services"
            description="Bug fixing, website design, SEO, programming, applications, and software development — end-to-end solutions to build, improve, and grow your digital presence."
        />
    );
}
