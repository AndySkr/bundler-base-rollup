/** @format */

import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
// const cjs = require("rollup-plugin-commonjs");
// import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.min.js",
      format: "umd",
      exports: "named",
      name: "global",
    },
    {
      dir: "dist/lib/esm",
      format: "esm",
    },
    {
      dir: "dist/lib/cjs",
      format: "cjs",
    },
  ],
  plugins: [
    // cjs(),
    // nodeResolve(),
    json(),
    terser(),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    getBabelOutputPlugin({
      allowAllFormats: true,
      babelrc: false,
      presets: [["@babel/preset-env"]],
      plugins: [["@babel/plugin-transform-runtime"]],
    }),
  ],
};
