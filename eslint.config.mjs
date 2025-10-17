import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables warnings
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",

      // Allow explicit any type
      "@typescript-eslint/no-explicit-any": "off",

      // Allow implicit any (if the rule exists)
      "@typescript-eslint/no-implicit-any": "off",

      // Additional rules that might be causing issues
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
    },
  },
];

export default eslintConfig;
