import { useState, useEffect } from 'react'
import { FiPlusCircle, FiMinusCircle, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const Principal = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [transactionType, setTransactionType] = useState('')
  const [formData, setFormData] = useState({
    valor: '',
    categoria: '',
    formaPagamento: 'pix',
    tipo: 'pessoal'
  })
  const [transactions, setTransactions] = useState([])
  const [meta, setMeta] = useState(localStorage.getItem('metaEconomia') || '')
  const [saldos, setSaldos] = useState({
    dia: { entrada: 0, saida: 0 },
    semana: { entrada: 0, saida: 0 },
    mes: { entrada: 0, saida: 0 }
  })

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]')
    setTransactions(storedTransactions)
    calcularSaldos(storedTransactions)
  }, [])

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

      if (format(data, 'yyyy-MM-dd') === format(hoje, 'yyyy-MM-dd')) {
        if (trans.transactionType === 'entrada') {
          saldosCalculados.dia.entrada += valor
        } else {
          saldosCalculados.dia.saida += valor
        }
      }

      if (data >= inicioSemana) {
        if (trans.transactionType === 'entrada') {
          saldosCalculados.semana.entrada += valor
        } else {
          saldosCalculados.semana.saida += valor
        }
      }

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

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.removeItem('usuarioAtual')
    navigate('/')
  }

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

  const handleMetaChange = (e) => {
    const value = e.target.value
    setMeta(value)
    localStorage.setItem('metaEconomia', value)
  }

  const calcularProgressoMeta = () => {
    if (!meta) return 0
    const saldoMes = saldos.mes.entrada - saldos.mes.saida
    return Math.min((saldoMes / parseFloat(meta)) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Controle Financeiro</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-white hover:text-gray-200"
          >
            <FiLogOut className="mr-2" /> Sair
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        {/* Botões principais */}
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

        {/* Resumo */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Resumo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Hoje</h3>
              <p className="text-2xl font-bold text-green-500">+ R$ {saldos.dia.entrada.toFixed(2)}</p>
              <p className="text-2xl font-bold text-red-500">- R$ {saldos.dia.saida.toFixed(2)}</p>
              <p className="text-lg font-semibold mt-2">
                Saldo: R$ {(saldos.dia.entrada - saldos.dia.saida).toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Esta Semana</h3>
              <p className="text-2xl font-bold text-green-500">+ R$ {saldos.semana.entrada.toFixed(2)}</p>
              <p className="text-2xl font-bold text-red-500">- R$ {saldos.semana.saida.toFixed(2)}</p>
              <p className="text-lg font-semibold mt-2">
                Saldo: R$ {(saldos.semana.entrada - saldos.semana.saida).toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Este Mês</h3>
              <p className="text-2xl font-bold text-green-500">+ R$ {saldos.mes.entrada.toFixed(2)}</p>
              <p className="text-2xl font-bold text-red-500">- R$ {saldos.mes.saida.toFixed(2)}</p>
              <p className="text-lg font-semibold mt-2">
                Saldo: R$ {(saldos.mes.entrada - saldos.mes.saida).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Meta de Economia */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Meta de Economia</h2>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="number"
              value={meta}
              onChange={handleMetaChange}
              placeholder="Digite sua meta mensal"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          {meta && (
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${calcularProgressoMeta()}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Você já guardou {calcularProgressoMeta().toFixed(1)}% da sua meta de R$ {parseFloat(meta).toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* Modal de Transação */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {transactionType === 'entrada' ? 'Registrar Ganho' : 'Registrar Gasto'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Valor</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.valor}
                      onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Categoria</label>
                    <input
                      type="text"
                      value={formData.categoria}
                      onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Forma de Pagamento</label>
                    <select
                      value={formData.formaPagamento}
                      onChange={(e) => setFormData({ ...formData, formaPagamento: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="pix">Pix</option>
                      <option value="dinheiro">Dinheiro</option>
                      <option value="cartao">Cartão</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo</label>
                    <select
                      value={formData.tipo}
                      onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="pessoal">Pessoal</option>
                      <option value="trabalho">Trabalho</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
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

export default Principal