import { Link } from 'react-router-dom' // Importa o Link para permitir navegação entre páginas da aplicação (sem recarregar a página)

// Componente NotFound: será mostrado quando o usuário tenta acessar uma página que não existe (erro 404)
const NotFound = () => {
  return (
    // Seção principal da página 404, centralizada na tela e com altura mínima de 70% da viewport
    <section className="section flex items-center justify-center min-h-[70vh]">
      
      {/* Container que mantém o conteúdo centralizado e alinhado */}
      <div className="container text-center">

        {/* Caixa interna com largura máxima para manter o texto bem apresentado em telas grandes */}
        <div className="max-w-lg mx-auto">

          {/* Grande título com o código do erro (404) em destaque */}
          <h1 className="text-8xl font-bold text-primary-500 mb-6">404</h1>

          {/* Subtítulo dizendo que a página não foi encontrada */}
          <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>

          {/* Parágrafo explicando para o usuário o que pode ter acontecido */}
          <p className="text-gray-600 mb-8">
            A página que você está procurando pode ter sido removida, ter seu nome alterado ou estar temporariamente indisponível.
          </p>

          {/* Botão (link estilizado) que leva o usuário de volta para a página inicial */}
          <Link to="/" className="btn btn-primary">
            Voltar para a Página Inicial
          </Link>

        </div>
      </div>
    </section>
  )
}

export default NotFound // Exporta o componente para que ele possa ser usado em outros lugares da aplicação
