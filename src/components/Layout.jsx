// Importa componentes e hooks do React Router e React
import { Outlet, useLocation } from 'react-router-dom' // Outlet permite renderizar rotas filhas
import { useEffect } from 'react'
import Navbar from './Navbar'  // Componente de navegação
import Footer from './Footer'  // Componente de rodapé

// Componente principal de layout da aplicação
const Layout = () => {
  // Hook do React Router para acessar a rota atual
  const { pathname } = useLocation()

  // Sempre que o caminho mudar, rola a página para o topo
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    // Define a estrutura básica da página: navbar no topo, conteúdo no meio, rodapé no final
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Menu de navegação principal no topo */}
      
      {/* Área principal que cresce conforme o conteúdo das rotas */}
      <main className="flex-grow">
        <Outlet /> {/* Aqui é onde as páginas (rotas filhas) serão renderizadas dinamicamente */}
      </main>

      <Footer /> {/* Rodapé fixo no final da página */}
    </div>
  )
}

// Exporta o componente para ser usado como layout base no sistema de rotas
export default Layout
