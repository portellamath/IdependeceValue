// Importa hooks do React e ferramentas de navegação do React Router, além dos ícones para o menu
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi' // Ícones de menu (hamburguer) e fechar (X)
import Logo from './Logo' // Componente que exibe a logo da empresa

// Componente da barra de navegação do site
const Navbar = () => {
  // Estado que controla se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Estado que verifica se a página foi rolada para baixo (usado para mudar a cor da navbar)
  const [isScrolled, setIsScrolled] = useState(false)

  // Função para abrir/fechar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Hook para monitorar quando o usuário rola a página
  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 50px, ativa a navbar com fundo branco e sombra
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll) // Ativa o evento
    return () => window.removeEventListener('scroll', handleScroll) // Limpa o evento ao desmontar
  }, []) // Só executa uma vez quando o componente carrega

  // Links do menu (usado tanto no desktop quanto no mobile)
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Planos', path: '/plans' },
    { name: 'Soluções', path: '/solutions' },
    { name: 'Contato', path: '/contact' },
  ]

  return (
    // Cabeçalho da página, que fica fixo no topo e muda de cor ao rolar
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      {/* Container que alinha logo, menu e botão */}
      <div className="container flex items-center justify-between">
        {/* Logo com link para a home */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Menu de navegação que só aparece em telas grandes (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Gera os links do menu de forma automática */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path} // Chave única para cada link
              to={link.path} // Destino da rota
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link' // Aplica classe "ativa" se a rota estiver ativa
              }
              end // Garante que o link "/" só ativa na raiz
            >
              {link.name}
            </NavLink>
          ))}

          {/* Botão "Comece Agora" que leva para o contato */}
          <Link to="/contact" className="btn btn-primary">
            Comece Agora
          </Link>
        </nav>

        {/* Botão hamburguer (menu mobile) */}
        <button
          className="p-2 md:hidden text-primary-500" // Só aparece em telas pequenas (md:hidden)
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          {/* Ícone que muda de acordo com o estado do menu */}
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile (só aparece quando isMenuOpen for true) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col w-full h-screen bg-white md:hidden animate-fade-in pt-20">
          <div className="container flex flex-col space-y-4 mt-4">
            {/* Links do menu mobile */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xl font-medium py-3 border-b border-gray-100 ${
                    isActive ? 'text-primary-500' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                end
              >
                {link.name}
              </NavLink>
            ))}

            {/* Botão "Comece Agora" no menu mobile */}
            <Link
              to="/contact"
              className="btn btn-primary w-full mt-6 text-center"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
            >
              Comece Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

// Exporta o componente para ser usado em outras páginas
export default Navbar
