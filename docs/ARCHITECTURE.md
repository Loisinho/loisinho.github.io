# Portfolio Architecture

## Objective

A web developer portfolio with a minimalist and elegant aesthetic, supporting two languages ​​(Spanish and English), light/dark mode and route-based navigation.

## Stack

Vue 3, TypeScript, Vite, Vue Router, Vue i18n, Pinia, Tailwind CSS, Vitest, Playwright, ESLint and Prettier.

## Target Structure

```text
src/
├── app/                # application composition and configuration
├── assets/             # processed images, fonts and resources
├── components/
│   ├── common/         # shared components
│   └── navigation/     # navigation and language/theme selector
├── composables/        # reusable Vue logic
├── data/               # typed and localized local content
├── features/           # complex functionalities, should they arise
├── i18n/               # interface configuration and messages
├── layouts/            # shared layouts
├── router/             # routes, location and guards
├── services/			      # contract and content providers
├── stores/             # justified global state
├── types/              # domain models
├── utils/              # pure functions
└── views/              # views linked to routes
tests/
├── e2e/                # E2E tests
└── unit/               # unit tests
```

## Routes

- `/` redirects to `/es`.
- `/:locale(es|en)?` and its child routes `about`, `experience`, `skills`, `projects`, `projects/:slug`, `contact`.
- Unknown routes display a localized 404 page.

## Internationalization

Professional-grade content is stored in TypeScript models with language-specific fields. Vue I18n manages everything else.

## Themes

`light` y `dark` themes, controlled by an explicit and persisted preference. Semantic tokens for color, surface, text, border and accent.

## Content

Views consume an asynchronous `ContentService`. The initial provider retrieves local TypeScript-based data.

## Views

- Home: value proposition, summary and featured projects.
- About: profile and background.
- Experience: professional history and verifiable achievements.
- Skills: technologies grouped by category.
- Projects: list, filters (if they add value) and project-specific details (via slug).
- Contact: professional channels and a contact form (only if a backend or secure provider is in place).

## Quality

- Typecheck, lint, test and build in CI.
- Testing of routes in both languages, theme selection, keyboard navigation and key views.
- SEO per route and language: title, description, canonical tags, hreflang and social metadata.
- Do not include fictitious personal data. Use placeholders until the actual content is provided.
