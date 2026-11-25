---
applyTo: 'src/{data,locales,components,views}/**'
---

# Content & i18n Guidelines

- Never hardcode user-facing strings inside `.vue` templates; always use `vue-i18n` (`$t` or `useI18n()`).
- Define strict TypeScript interfaces for all portfolio data models (`Project`, `Experience`, `Skill`) in `src/types/`.
- Data modules in `src/data/` must store language-agnostic values (IDs, slugs, URLs, dates, tech tags) and reference translation keys for translatable text (descriptions, roles), or export structured localized dictionaries matching configured locales.
