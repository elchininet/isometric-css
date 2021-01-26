const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tsconfig = require('./tsconfig');

const { compilerOptions: { baseUrl, paths } } = tsconfig;
const aliasReg = (str) => str.replace(/^(.*)\/\*$/, '$1');

const common = {
    mode: 'production',
    optimization: {
        usedExports: true
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: Object.keys(paths).reduce(
            (obj, a) => (obj[aliasReg(a)] = path.resolve(__dirname, aliasReg(`${baseUrl}/${paths[a]}`)), obj),
            {}
        )
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    }
};

module.exports = [
    {
        ...common,
        entry: './src/index.ts',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, './dist'),
            libraryTarget: 'commonjs'
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
    },
    {
        ...common,
        entry: './src/browser.ts',
        output: {
            filename: 'browser.js',
            path: path.resolve(__dirname, './dist'),
            libraryTarget: 'window'
        },
    }
];