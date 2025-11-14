export function GET() {
  const robots = `
User-agent: *
Allow: /

# Block internal/admin areas
Disallow: /admin/
Disallow: /portal/
Disallow: /api/private/

# Sitemap
Sitemap: https://drspathway.com/sitemap.xml
  `.trim();

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
