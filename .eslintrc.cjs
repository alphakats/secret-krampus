/** @type {import("eslint").Linter.Config} */
module.exports = {
/* TODO: Reenable after active development
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
*/
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
    // REMOVE when @typescript-eslint/recommended-requiring-type-checking is reenabled.
    // Replaceing error with warn for no-unsafe-* during development
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/unbound-method': 'error',
  },
};
