/* eslint-disable import/no-extraneous-dependencies, import/no-default-export */
import { defineConfig } from 'tsup';

import { config } from '../../shared/tsup.base';

export default defineConfig([
  {
    ...config,
    entry: ['src/index.ts'],
    // Note: For tailwind, since tw-to-css doesn't have proper ESM compatibility
    noExternal: ['tw-to-css'],
    outDir: 'dist'
  },
  { ...config, entry: ['cli/index.ts'], outDir: 'dist/cli' }
]);
