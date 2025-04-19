module.exports = {
    parser: "@typescript-eslint/parser", // Use TypeScript parser
    extends: [
      "eslint:recommended", // Use recommended ESLint rules
      "plugin:@typescript-eslint/recommended", // Use recommended TypeScript rules
      "plugin:react/recommended", // React rules (if you're using React)
    ],
    parserOptions: {
      ecmaVersion: 2020, // Support modern ECMAScript syntax
      sourceType: "module", // Allow import/export syntax
      ecmaFeatures: {
        jsx: true, // If using JSX
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Warn for unused vars, but allow unused variables with names starting with '_'
      "react/prop-types": "off", // Disable prop-types check (if you're using TypeScript)
      "no-unused-vars": "off", // Disable the base no-unused-vars rule to prevent conflicts with @typescript-eslint/no-unused-vars
      "@typescript-eslint/no-explicit-any": "off", // Disable the no-explicit-any rule (you can leave it on if you want strict typing)
      "@typescript-eslint/no-empty-function": "off", // Allow empty functions (you can customize this)
    },
  };
  