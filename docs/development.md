# Development

Use the existing `/workspace/VCH` checkout. Cloud tasks are already isolated;
there is no need to create another worktree.

Validated toolchain: Node.js 24.22.1 and npm 11.9.0.

```sh
cd /workspace/VCH
npm ci --cache /workspace/.npm --no-audit --no-fund
npm run lint
NEXT_TELEMETRY_DISABLED=1 npm run build
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Keep the development server in a managed terminal session. Validate a full local
GET request and the returned page content, rather than relying on an open port.
For production-mode validation, stop the development server, build, then use
`npm run start -- --hostname 127.0.0.1 --port 3000`.
Do not run `next build` while the development server writes to the same `.next`.

The application currently requires no external services or secrets. Optional
public deployment settings are described in [content-research.md](content-research.md).

Known inherited issues: Next.js 14.2.5 has an npm security advisory, and lint
reports a cleanup-ref warning in `src/hooks/useSpacePresence.ts:137`. Resolve
these separately before a public production deployment. No dependency or
lockfile updates were made as part of environment onboarding.

Validation in this task: frozen-lockfile installation, lint, production build,
and a real Chromium browser check at desktop (1440px) and mobile (390px) widths.
The browser check exercised every in-page anchor, the mobile menu, a valid
contact submission with no configured email, and absence of page exceptions or
horizontal overflow. The generated social image was requested and verified as
HTTP 200 / image/png after correcting its flex layout.
