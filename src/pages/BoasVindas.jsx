import { useEffect } from 'react'                 // Hook para executar efeitos colaterais ao montar o componente
import { useNavigate, Link } from 'react-router-dom' // Hook para navegação programática + Link para navegação declarativa

// Componente funcional de Boas-Vindas
const BoasVindas = () => {
  const navigate = useNavigate() // Permite redirecionar o usuário para outra rota

  // useEffect é chamado quando o componente é montado
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' // Verifica se o usuário está logado
    if (isLoggedIn) {
      navigate('/principal') // Se estiver logado, redireciona para a tela principal
    }
  }, [navigate]) // Executa o efeito apenas quando o componente é montado

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Container centralizado com espaçamento e estilo de fundo */}

      <div className="w-full max-w-md space-y-8 text-center">
        {/* Área com título e subtítulo */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Controle Financeiro
          </h1>
          <p className="text-gray-600">
            Gerencie suas finanças de forma simples e eficiente
          </p>
        </div>
        
        {/* Botões de navegação */}
        <div className="space-y-4">
          {/* Botão de "Entrar" */}
          <Link
            to="/login"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
          >
            Entrar
          </Link>
          
          {/* Botão de "Cadastrar" */}
          <Link
            to="/cadastro"
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoasVindas