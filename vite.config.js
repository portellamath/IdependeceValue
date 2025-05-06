// Importa a função que define a configuração do Vite
import { defineConfig } from 'vite'

// Importa o plugin oficial do React para Vite
import react from '@vitejs/plugin-react'

// Exporta a configuração padrão usando a função defineConfig
// Isso permite usar autocompletar e verificação de tipos com TypeScript e IDEs modernas
export default defineConfig({
  // Aqui é onde adicionamos os plugins que queremos que o Vite use
  plugins: [react()], // Ativa suporte completo ao React (incluindo JSX e fast refresh)
})
