// Importa os componentes necessários do React Router
import { Route, Routes } from 'react-router-dom'

// Importa o layout padrão da aplicação (geralmente com header, footer, etc.)
import Layout from './components/Layout'

// Importa as páginas que serão exibidas em cada rota
import Home from './pages/Home'
import Plans from './pages/Plans'
import Solution from './pages/Solution'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

// Importa o componente que protege rotas privadas (ex: áreas logadas)
import ProtectedRoute from './components/ProtectedRoute'

/*
  Este é o componente principal da aplicação, que define todas as rotas do app.
  Utiliza <Routes> para declarar os caminhos e os componentes a serem renderizados em cada um.
*/
function App() {
  return (
    <Routes>
      {/* Define o layout base para todas as páginas que compartilham estrutura comum */}
      <Route path="/" element={<Layout />}>
        
        {/* Rota da página inicial ("/") */}
        <Route index element={<Home />} />

        {/* Página de planos ("/planos") */}
        <Route path="planos" element={<Plans />} />

        {/* Página de soluções ("/solucoes") */}
        <Route path="solucoes" element={<Solution />} />

        {/* Página de contato ("/contato") */}
        <Route path="contato" element={<Contact />} />

        {/* Página de login ("/login") */}
        <Route path="login" element={<Login />} />

        {/* Página de cadastro ("/cadastro") */}
        <Route path="cadastro" element={<Register />} />

        {/* Área do usuário ("/dashboard") — protegida por autenticação */}
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Rota coringa — exibida se o caminho não for encontrado (404) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

// Exporta o componente App para ser usado na raiz da aplicação (ex: index.js)
export default App
