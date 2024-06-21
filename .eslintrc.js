module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:vue/base",
  ],
  rules: {
    "vue/script-setup-uses-vars": "error",
  },
};
