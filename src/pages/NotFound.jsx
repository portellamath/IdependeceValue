// Importa o componente Link para navegar entre páginas usando React Router
import { Link } from 'react-router-dom'

// Componente que representa uma página de erro 404 (página não encontrada)
const NotFound = () => {
  return (
    // Seção centralizada vertical e horizontalmente, com altura mínima de 70% da tela
    <section className="section flex items-center justify-center min-h-[70vh]">
      
      {/* Container que limita a largura do conteúdo */}
      <div className="container text-center">
        
        {/* Limita ainda mais a largura, centraliza horizontalmente */}
        <div className="max-w-lg mx-auto">
          
          {/* Título grande com código 404 e cor destacada */}
          <h1 className="text-8xl font-bold text-primary-500 mb-6">404</h1>
          
          {/* Subtítulo explicando que a página não foi encontrada */}
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          
          {/* Texto adicional explicando a possível causa do erro */}
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Botão/link que leva o usuário de volta à página inicial */}
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

// Exporta o componente para ser usado em outros arquivos
export default NotFound
