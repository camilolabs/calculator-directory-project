This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or start on a fixed port
npm run dev:port
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dev Scripts

- `npm run dev` – Start dev server (Turbopack).
- `npm run dev:port` – Start dev server on `http://localhost:3000`.
- `npm run lint` – Run ESLint.
- `npm run lint:fix` – Fix lint issues.
- `npm run typecheck` – TypeScript check only.
- `npm run check` – Typecheck + lint.
- `npm run build` – Production build (runs `prebuild` first).

## Node Version

- Requires Node `>= 18.18`. See `"engines"` in `package.json`.

## Production Build Strictness

- TypeScript and ESLint errors are ignored in development for speed.
- In production builds, errors are enforced (see `next.config.ts`).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

This project is compatible with Cloudflare Pages using the official Next.js adapter `@cloudflare/next-on-pages` (runs at the edge).

### Quick Steps

- Add scripts (already included):
  - `npm run cf:build` – builds with Next on Pages and outputs to `.vercel/output`.
  - `npm run cf:preview` – local preview via Wrangler.
  - `npm run cf:deploy` – deploy via Wrangler (optional; CI/Git recommended).

### Cloudflare Pages (Git-integrated)

1. Create a new Pages project in Cloudflare and connect your repository.
2. Configure the build settings:
   - Build command: `npx @cloudflare/next-on-pages@latest build`
   - Output directory: `.vercel/output/static`
   - Functions directory: `.vercel/output/functions`
3. Environment variables:
   - Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g., `https://calcupik.com`).
4. Deploy: Pages will build on every push to your selected branch and serve globally at Cloudflare’s edge.

### Local Preview

```bash
npm run cf:build
npm run cf:preview
```

This serves the built app locally using the same output structure as Cloudflare Pages.

### Notes

- Most code runs in the edge runtime; avoid Node-only APIs at request time.
- Static asset caching headers are configured in `next.config.ts` and respected by Cloudflare’s CDN.
- If you need custom domains, configure them in Pages settings and ensure HTTPS is activated.
