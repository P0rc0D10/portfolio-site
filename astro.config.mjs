import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dis.paisy.lol',
	integrations: [sitemap()],
	prefetch: true,
	experimental: {
		clientPrerender: true,
		globalRoutePriority: true,
	},
});
