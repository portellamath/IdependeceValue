import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast' // Biblioteca para exibir mensagens de feedback (toast)

const Cadastro = () => {
  const navigate = useNavigate() // Hook para redirecionamento de rotas

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  // Atualiza os dados do estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Lógica ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault() // Evita o comportamento padrão de recarregar a página

    // Valida se todos os campos foram preenchidos
    if (!formData.nome || !formData.email || !formData.senha) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    // Valida o tamanho mínimo da senha
    if (formData.senha.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres')
      return
    }

    // Recupera os usuários já cadastrados no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

    // Verifica se já existe um usuário com o mesmo e-mail
    if (usuarios.some(user => user.email === formData.email)) {
      toast.error('Este e-mail já está cadastrado')
      return
    }

    // Adiciona o novo usuário à lista
    usuarios.push(formData)
    localStorage.setItem('usuarios', JSON.stringify(usuarios)) // Salva a lista atualizada

    // Simula login automático após o cadastro
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('usuarioAtual', formData.email)

    toast.success('Cadastro realizado com sucesso!')
    navigate('/principal') // Redireciona para a tela principal
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Criar Conta
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              minLength={6}
            />
            <p className="mt-1 text-sm text-gray-500">
              Mínimo de 6 caracteres
            </p>
          </div>

          {/* Botão de cadastro */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
          >
            Cadastrar
          </button>

          {/* Link para login */}
          <div className="text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:text-blue-500">
              Já tem uma conta? Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cadastro
