// Importa a configuração padrão recomendada do ESLint para JavaScript
import js from '@eslint/js'

// Importa uma lista de variáveis globais (como window, document, etc.) que são comuns em ambientes de navegador
import globals from 'globals'

// Importa o plugin oficial do React para ESLint
import react from 'eslint-plugin-react'

// Importa regras específicas para os React Hooks (useState, useEffect, etc.)
import reactHooks from 'eslint-plugin-react-hooks'

// Importa um plugin que ajuda a garantir o funcionamento correto do React Refresh (hot reloading em dev)
import reactRefresh from 'eslint-plugin-react-refresh'

// Exporta a configuração ESLint como um array de objetos
export default [
  // Ignora a pasta 'dist' (geralmente arquivos de build que não devem ser verificados pelo ESLint)
  { ignores: ['dist'] },

  // Define as regras e configurações para todos os arquivos .js e .jsx do projeto
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Permite usar recursos modernos do JavaScript (até ES2020)
      globals: globals.browser, // Assume que o código roda em ambiente de navegador
      parserOptions: {
        ecmaVersion: 'latest', // Usa a versão mais recente do ECMAScript
        ecmaFeatures: { jsx: true }, // Habilita o uso de JSX (necessário para React)
        sourceType: 'module', // Permite uso de import/export
      },
    },
    // Informa ao ESLint que estamos usando React na versão 18.3
    settings: { react: { version: '18.3' } },

    // Registra os plugins utilizados para aplicar as regras
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Define as regras a serem aplicadas
    rules: {
      ...js.configs.recommended.rules, // Regras gerais recomendadas para JavaScript
      ...react.configs.recommended.rules, // Regras básicas recomendadas para React
      ...react.configs['jsx-runtime'].rules, // Regras para o novo JSX transform (React 17+)
      ...reactHooks.configs.recommended.rules, // Regras específicas para hooks (como ordem e dependências)

      // Desativa a regra que impede o uso de target="_blank" sem rel="noopener noreferrer"
      // Essa regra é útil para segurança, mas pode ser desativada se for gerenciado manualmente
      'react/jsx-no-target-blank': 'off',

      // Ativa uma regra que avisa se você exportar algo diferente de um componente React,
      // exceto quando for uma constante — útil para evitar problemas com hot reload
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
