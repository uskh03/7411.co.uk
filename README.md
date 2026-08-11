# 7411 Studio — 7411.co.uk

Freelance digital studio website. Laravel serves per-page SEO metadata and a
React (Vite) single-page app renders the UI.

## Stack

- **Backend:** Laravel 13 (PHP 8.2+) — routes, per-page meta tags, JSON-LD
- **Frontend:** React 19 + React Router 7, bundled with Vite via `laravel-vite-plugin`
- **Styling:** Hand-rolled CSS (design tokens in `resources/css/tokens.css`), Inter font

## Pages

| Route | Status |
| --- | --- |
| `/` | Home — full landing page (hero, services, why-me, payments, CTA) |
| `/services` | Placeholder, wired and ready to build |
| `/pay` | Placeholder, wired and ready to build |
| `/contact` | Placeholder, wired and ready to build |

Adding content to a placeholder page: edit `resources/js/pages/<Page>.jsx`.
Page metadata lives in `app/Http/Controllers/PageController.php` (server) and
`resources/js/lib/usePageMeta.js` (client) — keep both in sync.

The app is stateless (no sessions, cookies, forms, or database), so it runs
without an `APP_KEY` — see `bootstrap/app.php`. If you ever add forms, auth,
or sessions, restore the removed middleware and run `php artisan key:generate`.

## Local development

```bash
composer install
npm install
cp .env.example .env   # then set APP_ENV=local, APP_DEBUG=true, APP_URL=http://localhost:8000
npm run dev        # Vite dev server (terminal 1)
php artisan serve  # Laravel at http://localhost:8000 (terminal 2)
```

## Deploy

Point the web server document root at `public/`, then:

```bash
composer install --no-dev --optimize-autoloader
cp .env.example .env   # first deploy only; defaults are production-ready
npm ci && npm run build
php artisan config:cache && php artisan route:cache && php artisan view:cache
```

No `key:generate` and no migrations needed.

## SEO

- Per-page `<title>`, meta description, canonical, Open Graph and Twitter tags
  rendered server-side in `resources/views/app.blade.php`
- JSON-LD (`ProfessionalService`) on the home page
- `public/sitemap.xml` and `public/robots.txt`
- Set `APP_URL=https://7411.co.uk` in production so canonicals resolve correctly
