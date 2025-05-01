// Importa o componente Link do React Router para navegação interna
import { Link } from 'react-router-dom'

// Componente funcional que exibe o logotipo da empresa com diferentes tamanhos
const Logo = ({ size = 'default' }) => {
  // Define as classes de tamanho com base na prop `size`
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
  }

  return (
    // Link que redireciona para a página inicial
    <Link 
      to="/" 
      className={`flex items-center font-heading ${sizeClasses[size] || sizeClasses.default}`}
    >
      {/* Container do ícone (logomarca) */}
      <div className="flex items-center justify-center w-15 h-15 mr-2">
        {/* Imagem da logo com arredondamento e escala apropriada */}
        <img 
          src="/public/2.png"  // Caminho da imagem da logo (certifique-se que está corretamente servida no projeto)
          alt="Logo"  // Texto alternativo para acessibilidade
          className="w-14 h-14 object-contain rounded-xl" 
        />
      </div>

      {/* Nome da empresa ao lado do ícone */}
      <span className="font-bold text-primary-500">IV Value</span>
    </Link>
  )
}

// Exporta o componente para ser usado em outras partes do app
export default Logo
