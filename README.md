# CineMatch

Swipe through movies with someone you love and find the one you both want to watch.

**Stack:** Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · zod

## Getting started

```bash
npm install
cp .env.example .env.local   # add your TMDB credentials
npm run dev
```

Environment variables are validated at startup by [`src/config/env.ts`](src/config/env.ts). Set `SKIP_ENV_VALIDATION=1` to bypass (e.g. CI builds without secrets).

## Scripts

| Script                                | Purpose                       |
| ------------------------------------- | ----------------------------- |
| `npm run dev`                         | Dev server (Turbopack)        |
| `npm run build`                       | Production build              |
| `npm run check`                       | Typecheck + lint + format     |
| `npm run lint:fix` / `npm run format` | Auto-fix lint / format issues |

## Structure

```text
src/
├── app/          # routes, layouts, route handlers
├── components/   # ui/ (shadcn), movies/, layout/
├── config/       # env validation, site + theme constants
├── hooks/        # reusable client hooks
├── lib/          # tmdb/ client + image helper, utils.ts
├── services/     # server-side business logic (server-only)
└── types/        # TMDB payloads and domain models
```

## Internationalization

Powered by `next-intl`, with locale-prefixed routes (`/tr`, `/en`).

- `src/i18n/config.ts` is the single source of truth for locales (label, TMDB language, default).
- `src/messages/<locale>/<namespace>.json` holds one file per namespace, composed in each locale's `index.ts`. `en` defines the schema, so a missing key in any other locale fails `npm run typecheck`.
- Only the namespaces listed in `src/i18n/client-messages.ts` are sent to the browser. Add a namespace there when a client component needs it.

Adding a language: add it to `localeConfig`, copy `src/messages/en` to `src/messages/<locale>` and translate, then register its loader in `src/i18n/request.ts` (TypeScript will flag it until you do).

Design tokens live in [`tailwind.config.ts`](tailwind.config.ts) (palette, shadows, animations) and [`src/app/globals.css`](src/app/globals.css) (shadcn variables, `glass` utilities).
