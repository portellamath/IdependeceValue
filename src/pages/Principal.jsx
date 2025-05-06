import { useState, useEffect } from 'react'
import { FiPlusCircle, FiMinusCircle, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// Componente principal da tela após login
const Principal = () => {
  const navigate = useNavigate()

  // Estado para mostrar ou esconder o modal de transação
  const [showModal, setShowModal] = useState(false)

  // Define se é uma entrada (ganho) ou saída (gasto)
  const [transactionType, setTransactionType] = useState('')

  // Dados do formulário da transação
  const [formData, setFormData] = useState({
    valor: '',
    categoria: '',
    formaPagamento: 'pix',
    tipo: 'pessoal'
  })

  // Lista de transações armazenadas
  const [transactions, setTransactions] = useState([])

  // Meta mensal de economia
  const [meta, setMeta] = useState(localStorage.getItem('metaEconomia') || '')

  // Totais de entradas e saídas do dia, semana e mês
  const [saldos, setSaldos] = useState({
    dia: { entrada: 0, saida: 0 },
    semana: { entrada: 0, saida: 0 },
    mes: { entrada: 0, saida: 0 }
  })

  // Ao carregar o componente, busca transações salvas e calcula os saldos
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]')
    setTransactions(storedTransactions)
    calcularSaldos(storedTransactions)
  }, [])

  // Calcula os totais por período (dia, semana e mês)
  const calcularSaldos = (transacoes) => {
    const hoje = new Date()
    const inicioSemana = new Date(hoje)
    inicioSemana.setDate(hoje.getDate() - hoje.getDay())

    const saldosCalculados = {
      dia: { entrada: 0, saida: 0 },
      semana: { entrada: 0, saida: 0 },
      mes: { entrada: 0, saida: 0 }
    }

    transacoes.forEach(trans => {
      const data = new Date(trans.data)
      const valor = parseFloat(trans.valor)

      // Saldo diário
      if (format(data, 'yyyy-MM-dd') === format(hoje, 'yyyy-MM-dd')) {
        if (trans.transactionType === 'entrada') {
          saldosCalculados.dia.entrada += valor
        } else {
          saldosCalculados.dia.saida += valor
        }
      }

      // Saldo semanal
      if (data >= inicioSemana) {
        if (trans.transactionType === 'entrada') {
          saldosCalculados.semana.entrada += valor
        } else {
          saldosCalculados.semana.saida += valor
        }
      }

      // Saldo mensal
      if (format(data, 'yyyy-MM') === format(hoje, 'yyyy-MM')) {
        if (trans.transactionType === 'entrada') {
          saldosCalculados.mes.entrada += valor
        } else {
          saldosCalculados.mes.saida += valor
        }
      }
    })

    setSaldos(saldosCalculados)
  }

  // Função para sair do sistema
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.removeItem('usuarioAtual')
    navigate('/')
  }

  // Envio do formulário de transação
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.valor || !formData.categoria) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }

    const newTransaction = {
      ...formData,
      valor: parseFloat(formData.valor),
      data: new Date().toISOString(),
      transactionType
    }

    const updatedTransactions = [...transactions, newTransaction]
    setTransactions(updatedTransactions)
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
    calcularSaldos(updatedTransactions)

    setShowModal(false)
    setFormData({
      valor: '',
      categoria: '',
      formaPagamento: 'pix',
      tipo: 'pessoal'
    })

    toast.success(`${transactionType === 'entrada' ? 'Ganho' : 'Gasto'} registrado com sucesso!`)
  }

  // Atualiza o valor da meta e salva no localStorage
  const handleMetaChange = (e) => {
    const value = e.target.value
    setMeta(value)
    localStorage.setItem('metaEconomia', value)
  }

  // Calcula o progresso atual da meta mensal
  const calcularProgressoMeta = () => {
    if (!meta) return 0
    const saldoMes = saldos.mes.entrada - saldos.mes.saida
    return Math.min((saldoMes / parseFloat(meta)) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Controle Financeiro</h1>
          <button onClick={handleLogout} className="flex items-center text-white hover:text-gray-200">
            <FiLogOut className="mr-2" /> Sair
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto p-4">

        {/* Botões de nova transação */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => {
              setTransactionType('entrada')
              setShowModal(true)
            }}
            className="flex items-center justify-center p-6 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <FiPlusCircle className="mr-2 text-2xl" /> Ganhei
          </button>
          <button
            onClick={() => {
              setTransactionType('saida')
              setShowModal(true)
            }}
            className="flex items-center justify-center p-6 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <FiMinusCircle className="mr-2 text-2xl" /> Gastei
          </button>
        </div>

        {/* Resumo diário, semanal e mensal */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Resumo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hoje */}
            <ResumoCard titulo="Hoje" entrada={saldos.dia.entrada} saida={saldos.dia.saida} />
            {/* Semana */}
            <ResumoCard titulo="Esta Semana" entrada={saldos.semana.entrada} saida={saldos.semana.saida} />
            {/* Mês */}
            <ResumoCard titulo="Este Mês" entrada={saldos.mes.entrada} saida={saldos.mes.saida} />
          </div>
        </div>

        {/* Meta de economia */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Meta de Economia</h2>
          <input
            type="number"
            value={meta}
            onChange={handleMetaChange}
            placeholder="Digite sua meta mensal"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          {meta && (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${calcularProgressoMeta()}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Você já guardou {calcularProgressoMeta().toFixed(1)}% da sua meta de R$ {parseFloat(meta).toFixed(2)}
              </p>
            </>
          )}
        </div>

        {/* Modal de nova transação */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {transactionType === 'entrada' ? 'Registrar Ganho' : 'Registrar Gasto'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <InputField label="Valor" type="number" value={formData.valor} onChange={e => setFormData({ ...formData, valor: e.target.value })} />
                  <InputField label="Categoria" type="text" value={formData.categoria} onChange={e => setFormData({ ...formData, categoria: e.target.value })} />
                  <SelectField label="Forma de Pagamento" value={formData.formaPagamento} onChange={e => setFormData({ ...formData, formaPagamento: e.target.value })} options={['pix', 'dinheiro', 'cartao']} />
                  <SelectField label="Tipo" value={formData.tipo} onChange={e => setFormData({ ...formData, tipo: e.target.value })} options={['pessoal', 'trabalho']} />
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Cancelar
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

// Componente auxiliar para mostrar o resumo de entradas/saídas
const ResumoCard = ({ titulo, entrada, saida }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h3 className="text-sm font-medium text-gray-500">{titulo}</h3>
    <p className="text-2xl font-bold text-green-500">+ R$ {entrada.toFixed(2)}</p>
    <p className="text-2xl font-bold text-red-500">- R$ {saida.toFixed(2)}</p>
    <p className="text-lg font-semibold mt-2">
      Saldo: R$ {(entrada - saida).toFixed(2)}
    </p>
  </div>
)

// Campo de input reutilizável
const InputField = ({ label, type, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input type={type} value={value} onChange={onChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
  </div>
)

// Campo de seleção reutilizável
const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select value={value} onChange={onChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
      {options.map(opt => (
        <option key={opt} value={opt}>{opt[0].toUpperCase() + opt.slice(1)}</option>
      ))}
    </select>
  </div>
)

export default Principal
