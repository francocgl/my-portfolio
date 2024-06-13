import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), commonjs(), typescript()],
};
