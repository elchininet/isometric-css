import tsconfig from './tsconfig.json' with { type: 'json' };

const { compilerOptions: { paths } } = tsconfig;
const reg = /(.*)\/\*/;
const aliases = Object.keys(paths).reduce(
    (obj, a) => {
        if (reg.test(a)) {
            obj[`^${a.replace(reg, '$1')}/(.*)$`] = `<rootDir>/${paths[a][0].replace(reg, '$1')}/$1`;
        } else {
            obj[`^${a}$`] = `<rootDir>/${paths[a][0]}`;
        }
        return obj;
    },
    {}
);

export default {
    roots: ['<rootDir>/tests'],
    moduleNameMapper: aliases,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    testEnvironment: 'jsdom'
};