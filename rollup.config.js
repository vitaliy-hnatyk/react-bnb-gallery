import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import stylelint from 'rollup-plugin-stylelint';
import svgr from '@svgr/rollup';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));
//import pkg from './package.json';

const createConfig = (output) => ({
  input: 'src/index.js',
  output: Object.assign.call({
    sourcemap: true,
  }, output),
  plugins: [
    external({
      includeDependencies: true,
    }),
    scss({
      modules: true,
      sourcemap: false,
      output: 'dist/style.css',
    }),
    url(),
    svgr(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs()
  ],
});

export default [
  createConfig({
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
  }),
  createConfig({
    file: pkg.module,
    format: 'esm',
    exports: 'named',
  }),
];
