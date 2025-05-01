import { Link } from 'react-router-dom' // Importando o componente Link para navegação entre páginas

// Componente NotFound, que é exibido quando uma página não é encontrada (erro 404)
const NotFound = () => {
  return (
    <section className="section flex items-center justify-center min-h-[70vh]">
      {/* Contêiner principal da seção */}
      <div className="container text-center">
        {/* Contêiner interno com largura máxima definida */}
        <div className="max-w-lg mx-auto">
          {/* Título principal exibindo o erro 404 */}
          <h1 className="text-8xl font-bold text-primary-500 mb-6">404</h1>
          {/* Subtítulo indicando que a página não foi encontrada */}
          <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>
          {/* Texto explicativo sobre o erro e possíveis causas */}
          <p className="text-gray-600 mb-8">
            A página que você está procurando pode ter sido removida, ter seu nome alterado ou estar temporariamente indisponível.
          </p>
          {/* Link para voltar para a página inicial do site */}
          <Link to="/" className="btn btn-primary">
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
