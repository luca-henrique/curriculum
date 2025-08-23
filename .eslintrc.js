module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Adiciona o plugin do Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    // Desativa regras que não são necessárias com o novo JSX Transform do React 17+
    'react/react-in-jsx-scope': 'off',
    // Desativa a verificação de prop-types, já que usamos TypeScript
    'react/prop-types': 'off',
    // Regra para alertar sobre componentes/funções muito longas
    'max-lines-per-function': [
      'warn',
      { max: 150, skipComments: true, skipBlankLines: true },
    ],
    // Garante que as regras de Hooks sejam seguidas
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Ordena as importações
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
};
