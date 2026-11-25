---
name: new-feature
description: Scaffold a portfolio component or section with typed data, i18n keys, and unit test
disable-model-invocation: true
---

Create or update the requested portfolio feature following these strict steps:

1. If new data is required, define or update its TypeScript interface and add the entries in `src/data/`.
2. Add any required translation keys to the locale files.
3. Implement the Vue component using `<script setup lang="ts">`, mobile-first Tailwind classes, and minimal semantic HTML.
4. Create a foundational unit test in `/tests/unit/` verifying rendering and key interactions.
5. Modify the minimum number of files necessary.
