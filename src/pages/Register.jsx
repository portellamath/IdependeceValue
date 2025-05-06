// Importando ferramentas do React e bibliotecas externas
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'

// Componente de cadastro de novo usuário
const Register = () => {
  const navigate = useNavigate()

  // Estado do formulário de cadastro (nome, email, senha, confirmar senha)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // Função que trata o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault() // Evita o recarregamento da página

    // Verifica se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem') // Mostra alerta se forem diferentes
      return
    }

    try {
      // Recupera usuários já cadastrados (se houver)
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      // Verifica se já existe um usuário com o mesmo email
      if (users.some(user => user.email === formData.email)) {
        toast.error('Este email já está cadastrado')
        return
      }

      // Cria novo usuário com um ID único e data de criação
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      }

      // Adiciona o novo usuário à lista e salva no localStorage
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      // Define que o usuário está autenticado e salva os dados dele
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('currentUser', JSON.stringify(newUser))

      toast.success('Cadastro realizado com sucesso!')
      navigate('/dashboard') // Redireciona para a tela principal
    } catch (error) {
      toast.error('Erro ao criar conta') // Se algo der errado, mostra erro
    }
  }

  // Interface visual
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Título do formulário */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Criar nova conta
          </h2>
        </div>

        {/* Formulário de cadastro */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Campo: Nome */}
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nome completo"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Campo: Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Campo: Senha */}
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Senha"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Campo: Confirmar Senha */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirmar Senha</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirmar senha"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          {/* Botão de envio */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Criar conta
            </button>
          </div>

          {/* Link para login, se o usuário já tiver conta */}
          <div className="text-center">
            <Link to="/login" className="font-medium text-primary-500 hover:text-primary-600">
              Já tem uma conta? Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
