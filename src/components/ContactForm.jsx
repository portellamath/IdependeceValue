// Importa o hook useState do React para gerenciar estados locais
import { useState } from 'react'

const ContactForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numero: '',
    mensagem: '',
  })

  // Estado para controlar o envio do formulário
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estado que indica se o formulário foi enviado com sucesso
  const [submitted, setSubmitted] = useState(false)

  // Estado para mensagens de erro
  const [error, setError] = useState(null)

  // Função para atualizar os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Função executada ao submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault() // Impede o recarregamento da página
    setIsSubmitting(true) // Indica que o envio está em andamento
    setError(null) // Limpa erros anteriores

    try {
      // Simula uma chamada assíncrona (como uma requisição para backend)
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Marca como enviado com sucesso e limpa os campos
      setSubmitted(true)
      setFormData({
        nome: '',
        email: '',
        numero: '',
        mensagem: '',
      })
    } catch (err) {
      // Se ocorrer erro, exibe mensagem de erro
      setError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      // Finaliza o estado de envio
      setIsSubmitting(false)
    }
  }

  // Se o formulário foi enviado com sucesso, exibe mensagem de confirmação
  if (submitted) {
    return (
      <div className="bg-secondary-50 p-6 rounded-lg text-center" data-aos="fade-up">
        {/* Ícone de check (confirmação) */}
        <svg 
          className="w-16 h-16 text-secondary-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {/* Mensagem de agradecimento */}
        <h3 className="text-2xl font-bold text-primary-500 mb-2">Obrigado!</h3>
        <p className="text-gray-600 mb-4">
          Sua mensagem foi recebida. Entraremos em contato em breve.
        </p>
        {/* Botão para permitir novo envio */}
        <button 
          onClick={() => setSubmitted(false)} 
          className="btn btn-primary"
        >
          Enviar Outra Mensagem
        </button>
      </div>
    )
  }

  // Formulário padrão, exibido quando ainda não foi enviado
  return (
    <form onSubmit={handleSubmit} data-aos="fade-up">
      {/* Exibe erro se houver */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-lg">
          {error}
        </div>
      )}
      
      {/* Campo: Nome Completo */}
      <div className="mb-6">
        <label htmlFor="nome" className="block mb-2 font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="João da Silva"
        />
      </div>
      
      {/* Campo: E-mail */}
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Endereço de E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="joao@exemplo.com"
        />
      </div>
      
      {/* Campo: Número de Telefone */}
      <div className="mb-6">
        <label htmlFor="numero" className="block mb-2 font-medium text-gray-700">
          Número de Telefone
        </label>
        <input
          type="tel"
          id="numero"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="(11) 91234-5678"
        />
      </div>
      
      {/* Campo: Mensagem */}
      <div className="mb-6">
        <label htmlFor="mensagem" className="block mb-2 font-medium text-gray-700">
          Sua Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="Como podemos ajudar você?"
        />
      </div>
      
      {/* Botão de envio com indicador de carregamento */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            {/* Ícone animado de carregamento */}
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar Mensagem'
        )}
      </button>
    </form>
  )
}

// Exporta o componente para ser usado em outras partes da aplicação
export default ContactForm
