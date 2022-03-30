import ts from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

export default {
    plugins: [
        ts(),
        terser({
            output: {
                comments: false
            }
        })
    ],
    input: 'src/index.ts',
    output: [
        {
            file: 'index.js',
            format: 'umd',
            name: 'isometric-css'
        }
    ]
};