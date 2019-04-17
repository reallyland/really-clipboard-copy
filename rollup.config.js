// @ts-check

import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import literals from 'rollup-plugin-minify-html-literals';
import resolve from 'rollup-plugin-node-resolve';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const isProd = !process.env.ROLLUP_WATCH;
const rollup = {
  input: [
    'src/my-element.ts',
  ],
  output: [{
    file: 'dist/my-element.js',
    format: 'esm',
  }],
  plugins: [
    resolve(),
    isProd && tslint({
      throwError: true,
      configuration: `tslint${isProd ? '.prod' : ''}.json`,
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    isProd && literals(),
    isProd && terser(),
    isProd && filesize({ showBrotliSize: true }),
    ,
  ],
};

export default [rollup];
