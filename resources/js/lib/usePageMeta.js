import { useEffect } from 'react';

// Client-side mirror of the metadata served by PageController, so the
// document head stays correct after SPA navigations. The server-rendered
// head (Blade) is what search engines see on first load.
const PAGES = {
    home: {
        title: '7411 Studio — Build. Fix. Grow. Websites & Software That Work Better.',
        description:
            'Freelance digital studio helping businesses and founders build fast websites, fix issues, and grow online with clean code, modern design, and SEO-focused solutions.',
    },
    services: {
        title: 'Services — 7411 Studio',
        description:
            'Bug fixing, website design, SEO, programming, applications, and software development. End-to-end solutions to build, improve, and grow your digital presence.',
    },
    pay: {
        title: 'Pay — 7411 Studio',
        description:
            'Pay for work securely with Visa, Mastercard, Apple Pay, Google Pay, PayPal, or Stripe. Transparent, encrypted payments for hassle-free collaboration.',
    },
    contact: {
        title: 'Contact — 7411 Studio',
        description:
            'Have a project in mind? Get in touch with 7411 Studio for a quick fix or a full-scale build. Remote, worldwide.',
    },
    notFound: {
        title: 'Page Not Found — 7411 Studio',
        description: 'The page you are looking for does not exist.',
    },
};

export default function usePageMeta(page) {
    useEffect(() => {
        const meta = PAGES[page];
        if (!meta) return;

        document.title = meta.title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', meta.description);
        document
            .querySelector('link[rel="canonical"]')
            ?.setAttribute('href', window.location.origin + window.location.pathname);
    }, [page]);
}
