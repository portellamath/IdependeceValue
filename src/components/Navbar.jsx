import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Planos', path: '/plans' },
    { name: 'Soluções', path: '/solutions' },
    { name: 'Contato', path: '/contact' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navegação Desktop */}
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
          <Link to="/contact" className="btn btn-primary">
            Comece Agora
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="p-2 md:hidden text-primary-500"
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
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
                onClick={() => setIsMenuOpen(false)}
                end
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary w-full mt-6 text-center"
              onClick={() => setIsMenuOpen(false)}
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
