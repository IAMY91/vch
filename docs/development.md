# Development

Next.js App Router / React / TypeScript. The personal website is statically exported to `out/`; no database or secret is required.

```sh
npm ci
npm run dev
npm run build
```

The dev adapter in `scripts/dev.mjs` also accepts managed-preview `--host` and `--strictPort` flags. Build before publishing; `out/` is generated and ignored. The preserved circle-room prototype is not mounted on the personal website.

The Sites project identity is tracked in `.openai/hosting.json`. The original GitHub repository remains IAMY91/vch. Vercel can use the Next.js preset; Sites serves the static export. Override `NEXT_PUBLIC_SITE_URL` when using a custom domain so canonical links, sitemap and structured data use the correct origin.

## Content maintenance

- `src/lib/profileSources.ts`: source registry, publications, appearances, short bio and public professional contact address.
- `src/app/page.tsx`: editorial narrative and sections.
- `src/app/sources/page.tsx`: verification context and photo attribution.
- `public/resources/`: downloadable biography and DOI-negotiated BibTeX references. Keep these consistent with the content registry.
- `public/images/`: compressed portraits; see Sources & credits for origins.

The contact form opens the visitor's email application and explicitly does not claim a message was sent. Video embeds contact YouTube only after a visitor loads them. No site analytics or third-party fonts are used.

## Validation

A production build includes TypeScript and Next.js lint checks. The inherited unused circle prototype emits one cleanup-ref lint warning in `useSpacePresence.ts`; the website build succeeds. Next.js and matching ESLint config were upgraded from 14.2.5 to 14.2.35.

Browser QA was attempted using managed preview. The initial CLI argument mismatch was repaired by the dev adapter. The browser tool then stalled before opening; desktop/mobile visual and interaction QA remain unverified. Do not describe this as a passed browser check.

## First-person profile and UX update

The profile narrative, research and appearance summaries, and downloadable biography now use Verena's first-person perspective. Original publication titles, credits and structured researcher identifiers remain unchanged.

The hero portrait blends into the page with CSS gradients; the original photograph is unchanged. The hero directs event visitors to contact and researchers to the publication section. Navigation includes Resources and indicates the section in view. Mobile navigation supports Escape with focus return and closing on an outside click. Small text and interactive targets are larger, and mobile form inputs use 16px text.

The publication library initially shows three recent papers; filters/search reveal matching papers across the complete selection. The direct email and copy control precede an optional enquiry composer.

Desktop browser QA passed: portrait rendering, initial three papers, expanding to eight, research-culture filtering to two, empty search state and clearing filters, contact accordion and copy-email feedback, and no horizontal overflow. Mobile visual QA remains unverified.

## Official logos, media and readability update

Added `BrandBand` using official Charité, SciLead, Berlin Science Week, Falling Walls and eLife logos, with hover/focus highlighting and full-color touch presentation. SciLead's original logo also appears in its own section. All assets are local and credited on Sources & credits.

Small rem-based font sizes have a 14px minimum, and navigation switches to its mobile menu by 1080px to accommodate larger labels. Research icons are lightweight decorative SVGs with text labels. The Wild Woman image preserves its natural aspect ratio. The actual YouTube thumbnail is local; the player still loads only on request.

The contact form is expanded, hides the recipient address, and opens a mailto draft addressed to the owner's requested Gmail recipient. No server-side delivery is claimed.

Desktop browser checks confirmed all five logos loaded, thumbnail loaded and 16:9, no horizontal overflow, no visible @ address in the contact section, 14px label sizes, and the community portrait's rendered aspect ratio matched its original. Mobile visual verification remains outstanding.
