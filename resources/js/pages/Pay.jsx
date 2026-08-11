import usePageMeta from '../lib/usePageMeta';
import PagePlaceholder from '../components/PagePlaceholder';

export default function Pay() {
    usePageMeta('pay');

    return (
        <PagePlaceholder
            eyebrow="Secure & Simple"
            title="Pay"
            description="Pay for work securely with Visa, Mastercard, Apple Pay, Google Pay, PayPal, or Stripe. Transparent, encrypted payments for hassle-free collaboration."
        />
    );
}
