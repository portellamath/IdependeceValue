// Importa hooks do React e componentes do react-router-dom, além dos ícones necessários
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

// Componente funcional Navbar
const Navbar = () => {
  // Estado para controlar a visibilidade do menu mobile (aberto ou fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Estado para controlar se a página foi rolada para baixo (mudando o estilo da navbar)
  const [isScrolled, setIsScrolled] = useState(false)

  // Função que alterna o estado do menu (abre ou fecha)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Hook useEffect para monitorar o evento de scroll e alterar o estado de isScrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true) // Se a página for rolada mais de 50px, muda o estado para 'isScrolled' true
      } else {
        setIsScrolled(false) // Caso contrário, mantém o estado como 'false'
      }
    }

    window.addEventListener('scroll', handleScroll) // Adiciona o evento de scroll
    return () => window.removeEventListener('scroll', handleScroll) // Limpa o evento ao desmontar o componente
  }, []) // Este useEffect executa apenas uma vez após a primeira renderização

  // Definição dos links da navegação
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Planos', path: '/plans' },
    { name: 'Soluções', path: '/solutions' },
    { name: 'Contato', path: '/contact' },
  ]

  return (
    // Header com transições, ficando fixo no topo e mudando de cor ao rolar a página
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo com link para a página inicial */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navegação para telas grandes (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Iteração sobre os links de navegação */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path} // Usa o caminho como chave única
              to={link.path} // Define o destino do link
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link' // Estilo condicional com base na atividade do link
              }
              end // Garante que o link da página inicial seja marcado como ativo apenas na raiz
            >
              {link.name} {/* Exibe o nome do link */}
            </NavLink>
          ))}
          {/* Botão de "Comece Agora" */}
          <Link to="/contact" className="btn btn-primary">
            Comece Agora
          </Link>
        </nav>

        {/* Botão para alternar o menu mobile (hamburguer) */}
        <button
          className="p-2 md:hidden text-primary-500"
          onClick={toggleMenu} // Alterna o estado do menu ao clicar
          aria-label="Alternar menu"
        >
          {/* Se o menu estiver aberto, exibe o ícone X, caso contrário, o ícone de menu */}
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile (aparece apenas em telas pequenas) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col w-full h-screen bg-white md:hidden animate-fade-in pt-20">
          <div className="container flex flex-col space-y-4 mt-4">
            {/* Iteração sobre os links de navegação mobile */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xl font-medium py-3 border-b border-gray-100 ${
                    isActive ? 'text-primary-500' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no link
                end
              >
                {link.name} {/* Nome do link */}
              </NavLink>
            ))}
            {/* Botão "Comece Agora" no menu mobile */}
            <Link
              to="/contact"
              className="btn btn-primary w-full mt-6 text-center"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no botão
            >
              Comece Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

// Exporta o componente Navbar para ser usado em outras partes do projeto
export default Navbar
