import { readFileSync } from 'fs';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const dirname = process.cwd();
const pkg = JSON.parse(readFileSync(path.join(dirname, './package.json')));

const env = process.env.NODE_ENV || 'development';

export default [
  // ESM and CJS
  {
    input: path.join(dirname, './lib/index.ts'),
    plugins: [
      peerDepsExternal(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        'process.env.PACKAGE_VERSION': pkg.version,
      }),
      typescript()
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: path.join(dirname, 'dist/types/index.d.ts'),
    output: [{ file: path.join(dirname, 'dist/index.d.ts'), format: 'es' }],
    plugins: [dts()]
  }
];
