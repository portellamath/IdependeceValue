// Importa o Outlet (para renderizar rotas filhas) e useLocation (para detectar mudanças de rota)
import { Outlet, useLocation } from 'react-router-dom'
// Importa o hook useEffect do React
import { useEffect } from 'react'
// Importa a Navbar e o Footer do projeto
import Navbar from './Navbar'
import Footer from './Footer'

// Componente Layout — estrutura base que todas as páginas usam
const Layout = () => {
  // Pega o caminho atual da URL (ex: "/solucoes", "/planos", etc.)
  const { pathname } = useLocation()

  // Sempre que a rota mudar, dá scroll para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sempre mostra a Navbar no topo */}
      <Navbar />

      {/* Área principal da página */}
      <main className="flex-grow">
        {/* Aqui dentro é onde as rotas filhas vão ser renderizadas */}
        <Outlet />
      </main>

      {/* Sempre mostra o Footer no final */}
      <Footer />
    </div>
  )
}

export default Layout
