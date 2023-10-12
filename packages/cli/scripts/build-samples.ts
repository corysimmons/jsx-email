// Note: This script builds the ./apps/web/docs/samples directory by compiling the preview app
// against apps/demo/emails
import { join } from 'path';

import { build } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

import { makeConfig } from '../src/commands/preview';

process.chdir(join(__dirname, '../app'));

(async () => {
  const demoPath = join(__dirname, '../../../apps/demo/emails');
  const config = await makeConfig(demoPath);

  await build({
    configFile: false,
    ...config,
    plugins: [...(config.plugins || []), topLevelAwait()],
    base: '/samps/',
    build: { outDir: join(__dirname, '../../../apps/web/src/public/samps'), minify: false }
  });
})();
