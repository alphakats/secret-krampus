/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/naming-convention": [ // unsed variable needs leadingUnderscore
      "error",
      {
        "format": ["strictCamelCase"],
        "selector": "parameter",
        "modifiers": ["unused"],
        "leadingUnderscore": "require"
      }
    ],
    "@typescript-eslint/no-unused-vars": [ // allow unused variable
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
  },
};
