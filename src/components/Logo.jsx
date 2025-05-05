import { Link } from 'react-router-dom'

// Componente Logo recebe uma prop "size" com valor padrão "default"
const Logo = ({ size = 'default' }) => {
  // Define classes CSS com base no tamanho solicitado
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
  }

  return (
    // Link que leva para a página inicial ("/")
    <Link 
      to="/" 
      className={`flex items-center font-heading ${sizeClasses[size] || sizeClasses.default}`}
    >
      {/* Container para o ícone do logo */}
      <div className="flex items-center justify-center w-10 h-10 mr-2 text-white bg-primary-500 rounded">
        {/* Imagem do logo (carregada da pasta public) */}
        <img 
          src="/2.png"  // A imagem deve estar na pasta "public"
          alt="Logo" 
          className="w-14 h-14 object-contain rounded-3xl" // Bordas bem suaves, mas não círculocantos arredondados
        />
      </div>

      {/* Texto ao lado do logo */}
      <span className="font-bold text-primary-500">Independent Value</span>
    </Link>
  )
}

export default Logo
