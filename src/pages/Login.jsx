// Importando hooks e bibliotecas necessárias
import { useState } from 'react' // Para controlar o estado do formulário (email e senha)
import { useNavigate, Link } from 'react-router-dom' // Navegação entre páginas sem recarregar
import toast from 'react-hot-toast' // Biblioteca para mostrar mensagens de sucesso ou erro

// Componente da página de login
const Login = () => {
  const navigate = useNavigate() // Hook para redirecionamento de páginas

  // Estado local para guardar os dados digitados no formulário
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault() // Evita o recarregamento da página padrão do HTML
    
    try {
      // Simulando uma chamada à API de login com localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]') // Pega os usuários cadastrados no localStorage
      const user = users.find(u => u.email === formData.email && u.password === formData.password) // Busca se existe um usuário com esse email e senha

      if (user) {
        // Se encontrou, salva dados de autenticação e redireciona
        localStorage.setItem('isAuthenticated', 'true') // Marca como logado
        localStorage.setItem('currentUser', JSON.stringify(user)) // Guarda o usuário atual
        toast.success('Login realizado com sucesso!') // Mostra mensagem de sucesso
        navigate('/dashboard') // Leva para o painel após login
      } else {
        toast.error('Email ou senha inválidos') // Caso as credenciais estejam erradas
      }
    } catch (error) {
      toast.error('Erro ao fazer login') // Captura erros inesperados
    }
  }

  return (
    // Estrutura de layout centralizado
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        
        {/* Título da página */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
        </div>

        {/* Formulário de login */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          {/* Campos de email e senha */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Atualiza o estado ao digitar
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Senha"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} // Atualiza a senha
              />
            </div>
          </div>

          {/* Botão de envio */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Entrar
            </button>
          </div>

          {/* Link para cadastro caso o usuário não tenha conta */}
          <div className="text-center">
            <Link to="/cadastro" className="font-medium text-primary-500 hover:text-primary-600">
              Não tem uma conta? Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
