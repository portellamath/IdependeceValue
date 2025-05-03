// Importa os componentes de roteamento do React Router
import { Route, Routes } from 'react-router-dom'

// Importa o layout base da aplicação (provavelmente cabeçalho, rodapé, etc.)
import Layout from './components/Layout'

// Importa as páginas da aplicação
import Home from './pages/Home'
import Plans from './pages/Plans'
import Solution from './pages/Solution'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Componente principal da aplicação
function App() {
  return (
    // Define as rotas da aplicação
    <Routes>
      {/* Rota principal, que usa o Layout como "casca" para as páginas */}
      <Route path="/" element={<Layout />}>

        {/* Página inicial. 'index' significa que ela é carregada quando a URL é exatamente '/' */}
        <Route index element={<Home />} />

        {/* Página de planos: acessada em '/plans' */}
        <Route path="plans" element={<Plans />} />

        {/* Página de soluções: acessada em '/solutions' */}
        <Route path="solutions" element={<Solution />} />

        {/* Página de contato: acessada em '/contact' */}
        <Route path="contact" element={<Contact />} />

        {/* Rota coringa: pega qualquer URL não reconhecida e mostra a página 'NotFound' */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
