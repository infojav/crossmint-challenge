module.exports = {
  printWidth: 120,
  trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: false,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports"
  ],
};