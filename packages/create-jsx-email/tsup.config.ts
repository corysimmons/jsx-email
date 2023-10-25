/* eslint-disable import/no-extraneous-dependencies, import/no-default-export */
import { defineConfig } from 'tsup';

import { config } from '../../shared/tsup.base';

export default defineConfig({ ...config, dts: false, format: ['cjs'] });
