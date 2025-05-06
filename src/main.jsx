// Importa o modo estrito do React — ajuda a detectar práticas inseguras e problemas durante o desenvolvimento
import { StrictMode } from 'react'

// Cria a raiz da aplicação React (método moderno do React 18+)
import { createRoot } from 'react-dom/client'

// Importa o roteador para permitir navegação por rotas (páginas) usando o React Router
import { BrowserRouter } from 'react-router-dom'

// Importa o sistema de notificações 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

// Importa o componente principal da aplicação (onde estão definidas as rotas e páginas)
import App from './App.jsx'

// Importa o CSS principal do projeto (incluindo Tailwind e outros estilos globais)
import './index.css'

// Importa e inicializa a biblioteca de animações AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inicializa o AOS com configurações personalizadas:
// - Duração de 800ms
// - A animação acontece apenas uma vez por elemento
// - Transição suave com ease-in-out
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
})

// Renderiza a aplicação React na div com ID 'root' no HTML (geralmente no index.html)
// O conteúdo está envolto por <StrictMode> para segurança e boas práticas
// <BrowserRouter> permite navegação entre rotas
// <App /> é o coração da aplicação, onde as páginas são organizadas
// <Toaster /> exibe notificações (como avisos, confirmações etc.)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" /> {/* Posiciona os "toasts" no canto superior direito */}
    </BrowserRouter>
  </StrictMode>,
)
