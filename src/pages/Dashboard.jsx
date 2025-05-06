// Importações essenciais do React
import { useState, useEffect } from 'react'
// Hook para navegação entre páginas
import { useNavigate } from 'react-router-dom'
// Biblioteca para mostrar notificações no estilo “toast”
import toast from 'react-hot-toast'
// Ícones visuais para tornar a interface mais intuitiva
import {
  FiPlusCircle,
  FiMinusCircle,
  FiBarChart2,
  FiTarget,
  FiBook,
  FiUsers,
  FiCreditCard,
  FiLogOut
} from 'react-icons/fi'

// Componente principal da tela do usuário logado
const Dashboard = () => {
  const navigate = useNavigate()

  // Estado do usuário logado
  const [currentUser, setCurrentUser] = useState(null)
  // Estado que controla a exibição do modal de transação
  const [showTransactionModal, setShowTransactionModal] = useState(false)
  // Tipo da transação atual (income = receita, expense = despesa)
  const [transactionType, setTransactionType] = useState('')
  // Lista de transações do usuário
  const [transactions, setTransactions] = useState([])
  // Dados do formulário da transação
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0] // Data atual formatada (yyyy-mm-dd)
  })

  // Executa ao carregar o componente (montagem)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    if (user) {
      setCurrentUser(user)

      // Recupera as transações do usuário salvas localmente
      const userTransactions = JSON.parse(localStorage.getItem(`transactions_${user.id}`) || '[]')
      setTransactions(userTransactions)
    }
  }, [])

  // Função para encerrar a sessão do usuário
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('currentUser')
    navigate('/login')
    toast.success('Logout realizado com sucesso')
  }

  // Função para enviar uma nova transação (ao submeter o formulário)
  const handleTransactionSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Date.now(), // ID único baseado no timestamp
      ...formData,
      type: transactionType,
      amount: parseFloat(formData.amount), // Garante que o valor seja número
      createdAt: new Date().toISOString()
    }

    const updatedTransactions = [...transactions, newTransaction]
    setTransactions(updatedTransactions)
    localStorage.setItem(`transactions_${currentUser.id}`, JSON.stringify(updatedTransactions))

    // Fecha o modal e limpa o formulário
    setShowTransactionModal(false)
    setFormData({
      amount: '',
      category: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    })

    toast.success(`${transactionType === 'income' ? 'Receita' : 'Despesa'} registrada com sucesso!`)
  }

  // Calcula o saldo total com base nas transações
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'income'
        ? acc + transaction.amount
        : acc - transaction.amount
    }, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho com título e botão de logout */}
      <header className="bg-primary-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-white hover:text-gray-200"
          >
            <FiLogOut className="mr-2" /> Sair
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Botões para registrar novas transações */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => {
              setTransactionType('income')
              setShowTransactionModal(true)
            }}
            className="p-4 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <FiPlusCircle className="mr-2" /> Registrar Receita
          </button>
          <button
            onClick={() => {
              setTransactionType('expense')
              setShowTransactionModal(true)
            }}
            className="p-4 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <FiMinusCircle className="mr-2" /> Registrar Despesa
          </button>
        </div>

        {/* Resumo do saldo atual */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Resumo Financeiro</h2>
          <div className="text-3xl font-bold text-primary-500">
            R$ {calculateBalance().toFixed(2)}
          </div>
          <div className="text-gray-600">Saldo Atual</div>
        </div>

        {/* Seção de funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FiBarChart2 className="text-primary-500 text-2xl mr-2" />
              <h3 className="font-semibold">Relatórios</h3>
            </div>
            <p className="text-gray-600">Análise detalhada das suas finanças</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FiTarget className="text-primary-500 text-2xl mr-2" />
              <h3 className="font-semibold">Metas</h3>
            </div>
            <p className="text-gray-600">Defina e acompanhe suas metas financeiras</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FiBook className="text-primary-500 text-2xl mr-2" />
              <h3 className="font-semibold">Educação</h3>
            </div>
            <p className="text-gray-600">Conteúdo educacional sobre finanças</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FiCreditCard className="text-primary-500 text-2xl mr-2" />
              <h3 className="font-semibold">Simulador</h3>
            </div>
            <p className="text-gray-600">Simule investimentos e empréstimos</p>
          </div>
        </div>

        {/* Tabela com transações recentes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Transações Recentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Data</th>
                  <th className="pb-2">Descrição</th>
                  <th className="pb-2">Categoria</th>
                  <th className="pb-2">Valor</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id} className="border-b">
                    <td className="py-2">{new Date(transaction.date).toLocaleDateString()}</td>
                    <td className="py-2">{transaction.description}</td>
                    <td className="py-2">{transaction.category}</td>
                    <td className={`py-2 ${
                      transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      R$ {transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal para adicionar nova transação */}
      {showTransactionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {transactionType === 'income' ? 'Registrar Receita' : 'Registrar Despesa'}
            </h2>
            <form onSubmit={handleTransactionSubmit}>
              <div className="space-y-4">
                {/* Campo: Valor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Valor</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>

                {/* Campo: Categoria */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Categoria</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>

                {/* Campo: Descrição */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Descrição</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Campo: Data */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Data</label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              {/* Botões do modal */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowTransactionModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
