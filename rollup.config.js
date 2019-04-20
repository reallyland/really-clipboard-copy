// @ts-check

import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import literals from 'rollup-plugin-minify-html-literals';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-cpy';

const isProd = !process.env.ROLLUP_WATCH;
const bundle = {
  input: {
    'really-clipboard-copy': 'src/really-clipboard-copy.ts',
    'demo/code-configurator': 'src/demo/code-configurator.ts',
    'demo/properties.config': 'src/demo/properties.config.ts',
  },
  output: {
    dir: 'dist',
    entryFileNames: '[name].js',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    resolve(),
    commonjs({
      exclude: ['lit-html', 'lit-element'],
    }),
    isProd && tslint({
      throwError: true,
      configuration: `tslint${isProd ? '.prod' : ''}.json`,
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    isProd && literals(),
    isProd && terser(),
    isProd && filesize({ showBrotliSize: true }),
    copy({
      files: ['src/demo/*.json'],
      dest: 'dist/demo',
      options: {
        verbose: true,
      },
    }),
  ],
  experimentalOptimizeChunks: true,
  context: 'window',
};

export default [bundle];
