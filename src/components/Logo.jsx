import { Link } from 'react-router-dom'; // Importando o Link para permitir navegação entre as páginas da aplicação

// Componente Logo - Este componente exibe o logo da empresa, com a possibilidade de ajustar o tamanho
const Logo = ({ tamanhoLogo = 'default' }) => {
  // Definindo as classes CSS para os diferentes tamanhos do logo
  const classesDeTamanhoLogo = {
    pequeno: 'text-xl',  // Para o logo pequeno
    default: 'text-2xl', // Tamanho padrão
    grande: 'text-3xl',  // Para um logo grande
  };

  return (
    // Link que direciona para a página inicial, com a classe CSS do tamanho do logo aplicada
    <Link to="/" className={`flex items-center font-heading ${classesDeTamanhoLogo[tamanhoLogo] || classesDeTamanhoLogo.default}`}>
      
      {/* Ícone do logo: Um círculo com fundo colorido e um ícone SVG */}
      <div className="flex items-center justify-center w-15 h-15 mr-2">
        {/* Substitui o SVG por uma imagem */}
        <img 
          src="/public/2.png"  // Caminho para o seu arquivo de logo
          alt="Logo" 
          className="w-14 h-14 object-contain rounded-xl" 
          // Texto alternativo para acessibilidade
        />
      </div>


      {/* Nome da empresa exibido ao lado do ícone */}
      <span className="font-bold text-primary-500">IV Value</span>
    </Link>
  );
};

export default Logo;