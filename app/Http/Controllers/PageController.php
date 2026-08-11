<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class PageController extends Controller
{
    /**
     * Per-page SEO metadata, keyed by page slug.
     */
    private const PAGES = [
        'home' => [
            'path' => '/',
            'title' => '7411 Studio — Build. Fix. Grow. Websites & Software That Work Better.',
            'description' => 'Freelance digital studio helping businesses and founders build fast websites, fix issues, and grow online with clean code, modern design, and SEO-focused solutions.',
        ],
        'services' => [
            'path' => '/services',
            'title' => 'Services — 7411 Studio',
            'description' => 'Bug fixing, website design, SEO, programming, applications, and software development. End-to-end solutions to build, improve, and grow your digital presence.',
        ],
        'pay' => [
            'path' => '/pay',
            'title' => 'Pay — 7411 Studio',
            'description' => 'Pay for work securely with Visa, Mastercard, Apple Pay, Google Pay, PayPal, or Stripe. Transparent, encrypted payments for hassle-free collaboration.',
        ],
        'contact' => [
            'path' => '/contact',
            'title' => 'Contact — 7411 Studio',
            'description' => 'Have a project in mind? Get in touch with 7411 Studio for a quick fix or a full-scale build. Remote, worldwide.',
        ],
    ];

    public function home(): View
    {
        return $this->page('home');
    }

    public function services(): View
    {
        return $this->page('services');
    }

    public function pay(): View
    {
        return $this->page('pay');
    }

    public function contact(): View
    {
        return $this->page('contact');
    }

    private function page(string $slug): View
    {
        $meta = self::PAGES[$slug];
        $meta['canonical'] = url($meta['path']);
        $meta['schema'] = $slug === 'home' ? $this->homeSchema($meta['description']) : null;

        return view('app', ['meta' => $meta]);
    }

    /**
     * JSON-LD structured data for the home page. Built here rather than in
     * Blade because "@context" collides with the @context Blade directive.
     */
    private function homeSchema(string $description): string
    {
        return json_encode([
            '@context' => 'https://schema.org',
            '@type' => 'ProfessionalService',
            'name' => '7411 Studio',
            'url' => url('/'),
            'email' => 'hello@7411.co.uk',
            'description' => $description,
            'areaServed' => 'Worldwide',
            'knowsAbout' => [
                'Bug Fixing',
                'Website Design',
                'SEO',
                'Programming',
                'Applications',
                'Software Development',
            ],
        ], JSON_UNESCAPED_SLASHES);
    }
}
