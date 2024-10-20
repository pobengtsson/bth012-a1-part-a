module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vitest/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        "src/**/*.js",
      ],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      env: {
        node: true
      },
      files: [
        "test/**/*.js"
      ],
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      },
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vitest'],
  rules: {
    quotes: ['off', 'double', { avoidEscape: true }],
    'comma-dangle': 'off'
  }
}
