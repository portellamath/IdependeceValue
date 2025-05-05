// Importando Link para navegação interna com React Router
import { Link } from 'react-router-dom'

// Importando ícones das redes sociais da biblioteca react-icons
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

// Importando o logo da empresa
import Logo from './Logo'

// Componente que renderiza o rodapé do site
const Footer = () => {
  // Pega o ano atual para exibir no copyright
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        {/* Grid com 4 colunas no desktop, 2 no tablet e 1 no mobile */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* Primeira coluna: Logo + descrição + redes sociais */}
          <div className="space-y-4">
            <Logo size="large" /> {/* Exibe o logo */}
            <p className="text-gray-400 mt-4">
            Transformando o futuro financeiro de autônomos e MEIs com soluções simples, acessíveis e eficazes.
            </p>
            
            {/* Ícones das redes sociais */}
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

          {/* Segunda coluna: Links rápidos do site */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Terceira coluna: Lista de soluções oferecidas */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Planejamento Financeiro
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Gestão de Investimentos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Análise de Custos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Consultoria Personalizada
                </Link>
              </li>
            </ul>
          </div>

          {/* Quarta coluna: Informações de contato */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              {/* Endereço */}
              <li className="text-gray-400">
                Rua das Finanças, 200<br />
                São Paulo, SP 01001-000
              </li>
              {/* Telefone com link para ligação no celular */}
              <li className="text-gray-400">
                <a href="tel:+551199999999" className="hover:text-secondary-500 transition-colors">+55 (11) 9999-9999</a>
              </li>
              {/* Email com link para abrir no app de email */}
              <li className="text-gray-400">
                <a href="mailto:contato@ivvalue.com.br" className="hover:text-secondary-500 transition-colors">contato@ivvalue.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior com copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {year} IV Value Gestão Financeira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Exporta o componente para ser usado na página principal ou layout
export default Footer
