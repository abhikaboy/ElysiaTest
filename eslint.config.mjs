import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default {
  parser: "@typescript-eslint/parser",
  plugins: [tseslint, pluginJs],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": globals.node ? "off" : "error",
    "no-debugger": globals.node ? "off" : "error",
    "no-undef": globals.node ? "off" : "error",
    "no-unused-vars": globals.node ? "off" : "error",
    "no-var": globals.node ? "off" : "error",
    "prefer-const": globals.node ? "off" : "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
