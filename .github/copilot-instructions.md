# Global Context - Web Developer Portfolio

## Description & Tech Stack

Professional portfolio for a web developer. It should showcase experience, skills and projects, featuring a minimalist, elegant and contemporary aesthetic.

- Vue 3 using TypeScript 6.
- JSX Support, Vue Router, Vue I18n and Pinia.
- Vitest for unit testing.
- Playwright for E2E workflows.
- ESLint and Prettier.
- Tailwind CSS for styling and visual tokens.
- SASS preprocessor (SCSS syntax) for global styles and utilities.

## Conventions

- Composition API and `<script setup lang="ts">` for Vue components.
- Use standard Vue `<template>` syntax by default. Use JSX/TSX only for highly dynamic, programmatic render functions.
- Responsive design; Prioritize a mobile-first approach.
- Use Tailwind CSS utility classes for component layout, spacing and typography. Reserve SCSS strictly for CSS custom properties, global resets and complex keyframe animations. Avoid `<style scoped lang="scss">` if Tailwind utilities can achieve the same result.
- Initial professional content stored in typed TypeScript modules in `src/data/`.
- All tests go into the `/tests` directory.
- Respect the project's structure and format.
- Complete the task by touching as few files as possible.
- Keep the code, variable names, types and commits in English.

## Restrictions

- **DO NOT** install or suggest new libraries without first checking whether an equivalent utility already exists within the project.
