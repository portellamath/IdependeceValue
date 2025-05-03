// Importa o Link do React Router para navegação sem recarregar a página
import { Link } from 'react-router-dom';

// Componente Logo - Mostra a logo da empresa e permite ajustar o tamanho via props
const Logo = ({ tamanhoLogo = 'default' }) => {
  // Define uma tabela com as classes CSS para cada tamanho possível
  const classesDeTamanhoLogo = {
    pequeno: 'text-xl',    // Tamanho pequeno
    default: 'text-2xl',   // Tamanho padrão
    grande: 'text-3xl',    // Tamanho grande
  };

  return (
    // O logo inteiro é clicável e leva o usuário para a página inicial
    <Link 
      to="/" 
      className={`
        flex items-center font-heading 
        ${classesDeTamanhoLogo[tamanhoLogo] || classesDeTamanhoLogo.default} 
      `}
    >
      
      {/* Área da imagem da logo */}
      <div className="flex items-center justify-center w-15 h-15 mr-2">
        <img 
          src="/2.png"  // Caminho da imagem (React serve da pasta /public automaticamente)
          alt="Logo" 
          className="w-14 h-14 object-contain rounded-xl" // Redonda, contida e com tamanho fixo
        />
      </div>

      {/* Nome da empresa ao lado da logo */}
      <span className="font-bold text-primary-500">
        Independent Value
      </span>
    </Link>
  );
};

// Exporta o componente para ser usado onde quiser na aplicação (navbar, footer, etc)
export default Logo;
