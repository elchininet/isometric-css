import ts from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import terser from "@rollup/plugin-terser";

export default [
    {
        plugins: [
            ts(),
            terser({
                output: {
                    comments: false
                }
            })
        ],
        input: "src/index.ts",
        output: [
            {
                file: "dist/index.cjs",
                format: "umd",
                name: "isometric-css"
            }
        ]
    },
    {
        plugins: [tsConfigPaths(), dts()],
        input: "src/index.ts",
        output: [
            {
                file: "dist/index.d.ts",
                format: "es"
            }
        ]
    }
];
