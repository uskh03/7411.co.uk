import usePageMeta from '../lib/usePageMeta';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyStrip from '../components/home/WhyStrip';
import PaySecure from '../components/home/PaySecure';
import CtaBand from '../components/home/CtaBand';

export default function Home() {
    usePageMeta('home');

    return (
        <>
            <Hero />
            <ServicesGrid />
            <WhyStrip />
            <PaySecure />
            <CtaBand />
        </>
    );
}
