import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
    {
        input: ['src/index.tsx', 'src/MagnifierZoom.tsx', 'src/PinchZoom.tsx'],
        output: [
            {
                dir: 'lib',
                format: 'cjs',
                name: 'react-lib',
            },
            {
                dir: 'lib/esm',
                format: 'esm',
            },
        ],
        plugins: [external(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), postcss(), terser()],
    },
    {
        input: 'lib/esm/types/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
];
