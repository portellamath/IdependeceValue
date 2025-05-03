// Importações necessárias: navegação interna, ícones de redes sociais e o componente de logotipo
import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Logo from './Logo'

// Componente funcional Footer
const Footer = () => {
  // Obtém o ano atual para exibir no rodapé
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Container central para o conteúdo do footer */}
      <div className="container">

        {/* Grid responsivo com até 4 colunas em telas grandes */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* Coluna 1: Logo, descrição e redes sociais */}
          <div className="space-y-4">
            <Logo size="large" /> {/* Componente de logotipo */}
            <p className="text-gray-400 mt-4">
            Transformando o futuro financeiro de autônomos e MEIs com soluções simples, acessíveis e eficazes.
            </p>
            {/* Ícones das redes sociais com links externos */}
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

          {/* Coluna 2: Links de navegação rápida */}
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

          {/* Coluna 3: Lista de serviços ou soluções */}
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
                Organização de Fluxo de Caixa
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

          {/* Coluna 4: Informações de contato */}
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

        {/* Rodapé inferior com ano e direitos autorais */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {year} IV Value Gestão Financeira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Exporta o componente para ser usado em outros arquivos
export default Footer
