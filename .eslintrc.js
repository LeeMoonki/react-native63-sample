module.exports = {
  // 사전에 정의된 전역 변수들을 정의
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint-config-prettier',
  ],
  // 전역으로 사용되는 변수를 등록. no-undef가 lint하지 않는다.
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 사용하고자하는 추가적인 언어 피쳐를 명시
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    // ant-man rules
    indent: 0,
    semi: 2,
    'keyword-spacing': [
      'error',
      {
        overrides: {
          from: {
            after: true,
            before: true,
          },
        },
      },
    ],
    'template-tag-spacing': ['error', 'never'],
    // "space-before-function-paren": ["error", {
    //   "anonymous": "never",
    //   "named": "never",
    //   "asyncArrow": "always"
    // }],
    'key-spacing': ['error', { afterColon: true }],
    'no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '_' }],
    'no-unused-expressions': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
    // // ant-man rules
    'no-empty-pattern': 0,
  },
};
