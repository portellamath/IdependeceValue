// Hooks do React para estado e efeito colateral
import { useState, useEffect } from 'react'
// Componentes de navegação do React Router
import { NavLink, Link } from 'react-router-dom'
// Ícones do react-icons (menu e fechar)
import { FiMenu, FiX } from 'react-icons/fi'
// Nosso componente de logo personalizado
import Logo from './Logo'

// Componente Navbar
const Navbar = () => {
  // Estado que controla se o menu mobile está aberto ou não
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado que controla se a navbar está "rolada" (para mudar estilo)
  const [isScrolled, setIsScrolled] = useState(false)

  // Função que alterna o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Efeito que ouve o scroll da página para aplicar fundo branco e sombra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)  // Ativa estilo rolado
      } else {
        setIsScrolled(false) // Volta ao estilo original
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Links de navegação (fácil de manter e escalar)
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Planos', path: '/planos' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Contato', path: '/contato' },
  ]

  return (
    <header 
      // Navbar fixa no topo com efeito de transição suave ao rolar
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">

        {/* Logo clicável que leva para Home */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navegação para telas grandes (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              end
            >
              {link.name}
            </NavLink>
          ))}

          {/* Botão call-to-action */}
          <Link to="/login" className="btn btn-primary">
            Comece Agora
          </Link>
        </nav>

        {/* Botão do menu mobile (hambúrguer/fechar) */}
        <button
          className="p-2 md:hidden text-primary-500"
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile que aparece ao clicar no hambúrguer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col w-full h-screen bg-white md:hidden animate-fade-in pt-20">
          <div className="container flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xl font-medium py-3 border-b border-gray-100 ${
                    isActive ? 'text-primary-500' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}  // Fecha menu após clique
                end
              >
                {link.name}
              </NavLink>
            ))}

            {/* Botão call-to-action dentro do menu mobile */}
            <Link
              to="/login"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}  // Fecha menu ao clicar
            >
              Comece Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
