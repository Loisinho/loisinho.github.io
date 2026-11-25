---
applyTo: 'tests/**'
---

# Testing Guidelines

- Mirror the `src/` directory structure inside `tests/unit/` for Vitest specs (`*.spec.ts`) and place Playwright flows in `tests/e2e/` (`*.e2e.ts`).
- Use `@vue/test-utils` with Vitest for component mounting; mock `vue-i18n`, `vue-router`, and Pinia stores minimally.
- In Playwright tests, use accessible locators (`getByRole`, `getByText`) instead of CSS/Tailwind class selectors.
