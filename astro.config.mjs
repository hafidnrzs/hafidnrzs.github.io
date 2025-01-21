// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // site: 'https://hafidnrzs.github.io',
  site: 'https://me.hafidnrzs.com',

  integrations: [tailwind()],
});