import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";
import { Linter } from "eslint";
import { globalIgnores } from "eslint/config";

export default [
    // Ignore "node_modules" and the distribution folder
    globalIgnores([
        "**/node_modules/",
        "**/dist/",
    ]),

    // Base JS rules
    js.configs.recommended,

    // TypeScript strict configs
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    {
        // Apply ESLint to those files
        files: ["**/*.{ts,tsx}"],

        settings: {
            react: {
                version: "detect",
            },
        },

        languageOptions: {
            ecmaVersion: 2024,
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true, // Ensure ESLint parses JSX
                },
            },
            globals: {
                ...globals.browser, // Common browser global variables
                ...globals.es2024, // ES2024 global variables
                ...globals.node, // Node.js global variables
            },
        },

        // Custom plugins
        plugins: {
            react: react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@stylistic": stylistic,
        },

        // Custom rules
        rules: {
            /* -----------------------------
             * Base overrides
             * ----------------------------- */
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused argument if it starts with an underscore
            "@typescript-eslint/no-unused-vars": [
                // Ignore unused argument if it starts with an underscore
                "error",
                { argsIgnorePattern: "^_" },
            ],

            /* -----------------------------
             * React
             * ----------------------------- */
            ...react.configs.recommended.rules,
            "react/react-in-jsx-scope": "off", // Ignore missing "import React from 'react';" in ".jsx" and ".tsx" files

            /* -----------------------------
             * React Hooks
             * ----------------------------- */
            ...reactHooks.configs.recommended.rules,

            /* -----------------------------
             * React Refresh (Vite)
             * ----------------------------- */
            ...reactRefresh.configs.vite.rules,

            /* -----------------------------
             * Stylistic rules
             * ----------------------------- */
            ...stylistic.configs.recommended.rules,
            "@stylistic/semi": ["error", "always"], // Require semicolon at the end of every statement
            "@stylistic/no-extra-semi": "error", // Disallow unnecessary semicolons
            "@stylistic/quotes": [
                // Require double quotes
                "error",
                "double",
                {
                    avoidEscape: false,
                },
            ],
            "@stylistic/indent": ["error", 4], // Enforce specific indentation
            "@stylistic/jsx-indent-props": ["error", 4], // Enforce specific JSX props indentation
            "@stylistic/no-trailing-spaces": "error", // Enforce removal of trailing spaces
            "@stylistic/eol-last": ["error", "always"], // Enforce newline at the end of files
            "@stylistic/comma-dangle": [
                // Enforce dangling commas where allowed
                "error",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "never",
                },
            ],
            "@stylistic/comma-spacing": [
                // Enforce spacing after commas
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "@stylistic/max-len": [
                // Enforce maximum line length
                "error",
                {
                    code: 120,
                    tabWidth: 4,
                    ignoreComments: true,
                    ignoreUrls: true,
                },
            ],
            "@stylistic/quote-props": [
                // Enforce quotes around keywords in objects
                "error",
                "as-needed",
            ],
        },
    },
] as Linter.Config[];
