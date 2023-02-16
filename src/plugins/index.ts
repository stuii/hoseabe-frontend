/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
import pinia from '../stores';
import router from '../router';

// Types
import type { App } from 'vue';

export function registerPlugins(app: App) {
  loadFonts().then(() => {});

  app
    .use(vuetify)
    .use(router)
    .use(pinia);
}
