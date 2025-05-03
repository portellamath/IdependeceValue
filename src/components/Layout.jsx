// Importa ferramentas do React Router e React
import { Outlet, useLocation } from 'react-router-dom' // Outlet = onde as rotas filhas aparecem
import { useEffect } from 'react'

// Importa componentes fixos da interface
import Navbar from './Navbar'  // Topo do site (menu de navegação)
import Footer from './Footer'  // Final do site (rodapé com informações)

// Componente Layout: estrutura base que envolve todas as páginas
const Layout = () => {
  // Hook do React Router que retorna o caminho atual da URL
  const { pathname } = useLocation()

  // Sempre que a rota (pathname) mudar, rola automaticamente para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]) // Esse efeito roda toda vez que o "pathname" mudar

  return (
    // Estrutura base da aplicação:
    // - flex-col: organiza os elementos em coluna (vertical)
    // - min-h-screen: garante que a altura mínima seja o tamanho da tela (100vh)
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar: sempre fixa no topo da aplicação */}
      <Navbar />

      {/* Conteúdo principal da página:
          - flex-grow: faz com que essa área cresça para ocupar o espaço entre o topo e o rodapé
          - Outlet: ponto onde a rota filha será injetada dinamicamente */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Rodapé: sempre aparece no final da página */}
      <Footer />
    </div>
  )
}

// Exporta o Layout para que ele possa ser usado no sistema de rotas da aplicação
export default Layout
