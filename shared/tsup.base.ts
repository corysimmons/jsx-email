/* eslint-disable import/no-extraneous-dependencies, import/no-default-export */
import { type Options } from 'tsup';

export const config: Options = {
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  keepNames: true,
  outDir: 'dist',
  sourcemap: true,
  target: ['es2022', 'node18']
};
