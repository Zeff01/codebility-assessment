import eslint from '@eslint/js';
import pluginTanstackQuery from '@tanstack/eslint-plugin-query';

// ✅ Base Next.js configs
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
// ✅ Extra plugins
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // Include Next.js’ own configs
  ...nextVitals,
  ...nextTs,

  // Optional extra recommended configs (excluding import!)
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginPromise.configs['flat/recommended'],
  pluginTanstackQuery.configs['flat/recommended'],
  eslintConfigPrettier,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react: pluginReact,
      promise: pluginPromise,
      'unused-imports': pluginUnusedImports
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      }
    },
    rules: {
      // ✅ Unused imports cleanup
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],

      // ✅ Common React / Next tweaks
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@next/next/no-img-element': 'off',
      'react/prop-types': 'off',

      // ✅ Misc
      'newline-before-return': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' }
      ]
    }
  },

  // ✅ Keep same ignore defaults as Next.js
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
]);
