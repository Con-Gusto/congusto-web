import type { APIRoute } from 'astro';
import { site } from '../data/site';

const routes = [
  '/',
  '/features',
  '/who-its-for',
  '/coming-soon',
  '/privacy',
  '/support',
];

export const GET: APIRoute = () => {
  const urls = routes
    .map(
      (route) =>
        `<url><loc>${site.siteUrl}${route}</loc></url>`,
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
