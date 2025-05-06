/** @type {import('tailwindcss').Config} */
export default {
  // Define onde o Tailwind deve procurar por classes CSS utilizadas
  content: [
    "./index.html",         // Inclui o HTML principal do projeto
    "./src/**/*.{js,jsx}"   // Inclui todos os arquivos .js e .jsx dentro da pasta src
  ],

  theme: {
    extend: {
      // Define paleta de cores personalizada da marca
      colors: {
        primary: { // Azul escuro - usado para dar identidade visual forte e confiável
          50: '#e6f1fa',
          100: '#cce3f5',
          200: '#99c7eb',
          300: '#66abe0',
          400: '#338fd6',
          500: '#0A2463', // cor principal (navy blue)
          600: '#091d4f',
          700: '#07163a',
          800: '#050e26',
          900: '#020713',
        },
        secondary: { // Verde - geralmente transmite equilíbrio e crescimento
          50: '#e8f7f1',
          100: '#d0efe3',
          200: '#a1dfc7',
          300: '#73cfab',
          400: '#44bf8f',
          500: '#36AE7C', // cor secundária
          600: '#2b8b63',
          700: '#20684a',
          800: '#164532',
          900: '#0b2319',
        },
        // Cores auxiliares para feedback e destaques
        success: {
          500: '#22c55e', // verde claro para mensagens de sucesso
        },
        warning: {
          500: '#f59e0b', // laranja para alertas e avisos
        },
        error: {
          500: '#ef4444', // vermelho para erros e problemas
        },
        accent: {
          500: '#8b5cf6', // roxo vibrante para elementos de destaque
        },
      },

      // Define as fontes utilizadas no projeto
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],     // Para títulos e cabeçalhos
        body: ['Open Sans', 'sans-serif'],      // Para textos corridos
      },

      // Espaçamentos personalizados para ajustes finos de layout
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // Animações personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',  // Animação para transições suaves
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      // Sombras customizadas para dar profundidade aos componentes
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',         // sombra padrão para cards
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // sombra mais intensa ao passar o mouse
      },
    },
  },

  // Aqui poderiam ser incluídos plugins adicionais do Tailwind, mas está vazio no momento
  plugins: [],
}
