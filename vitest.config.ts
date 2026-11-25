import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'tests/e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'v8',
        reporter: ['text'],
        include: ['src/**/*.{vue,ts,mts,tsx}'],
        exclude: ['src/**/*.{spec,test}.{js,ts,jsx,tsx}', 'src/main.ts']
      }
    }
  })
);
