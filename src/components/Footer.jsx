import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-gray-400 mt-4">
              Transformando futuros financeiros com soluções de gestão especializadas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Planejamento Financeiro
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Gestão de Investimentos
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Análise de Custos
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Consultoria Personalizada
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
              Av. Tiradentes, 1211<br />
                Itu, SP 13309-640
              </li>
              <li className="text-gray-400">
                <a href="tel:+5511999999999" className="hover:text-secondary-500 transition-colors">
                  +55 (19) 99948-1590
                </a>
              </li>
              <li className="text-gray-400">
                <a href="mailto:info@ivvalue.com" className="hover:text-secondary-500 transition-colors">
                  info@ivvalue.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {year} IV Value Gestão Financeira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
