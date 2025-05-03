import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css' // Importa o CSS global com Tailwind e suas customizações
import AOS from 'aos' // Biblioteca de animações on-scroll
import 'aos/dist/aos.css' // CSS do AOS para funcionar as animações

// Inicializa a biblioteca AOS (animações ao rolar a página)
AOS.init({
  duration: 800, // Duração da animação em ms
  once: true, // Anima só uma vez (não repete ao rolar novamente)
  easing: 'ease-in-out', // Curva de velocidade da animação
})

// Renderiza a aplicação no elemento #root
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Ativa verificações extras do React em modo dev */}
    <BrowserRouter> {/* Habilita o roteamento com react-router */}
      <App /> {/* Componente raiz da aplicação */}
    </BrowserRouter>
  </StrictMode>,
)
