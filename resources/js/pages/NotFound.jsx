import usePageMeta from '../lib/usePageMeta';
import PagePlaceholder from '../components/PagePlaceholder';

export default function NotFound() {
    usePageMeta('notFound');

    return (
        <PagePlaceholder
            eyebrow="404"
            title="Page Not Found"
            description="The page you're looking for doesn't exist or has been moved."
        />
    );
}
