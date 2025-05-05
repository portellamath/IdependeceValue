// Importa o useState, que nos permite controlar estados dentro do componente
import { useState } from 'react'

// Nosso componente de formulário de contato
const ContactForm = () => {

  // Estado para armazenar os dados do formulário (nome, email, telefone e mensagem)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Estado para controlar se o formulário está sendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estado para verificar se o formulário já foi enviado com sucesso
  const [submitted, setSubmitted] = useState(false)

  // Estado para armazenar possíveis erros no envio
  const [error, setError] = useState(null)

  // Função chamada sempre que algum campo do formulário é alterado
  const handleChange = (e) => {
    const { name, value } = e.target
    // Atualiza o estado com o novo valor do campo alterado
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Função chamada quando o usuário clica em "Enviar"
  const handleSubmit = async (e) => {
    e.preventDefault() // Evita o recarregamento da página
    setIsSubmitting(true) // Ativa o "modo de envio"
    setError(null) // Limpa erros antigos

    try {
      // Simula o envio (espera 1.5 segundos)
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Marca como enviado com sucesso
      setSubmitted(true)

      // Limpa os campos do formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

    } catch (err) {
      // Se der erro, mostra uma mensagem bonita pro usuário
      setError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      // Sempre desativa o "modo de envio"
      setIsSubmitting(false)
    }
  }

  // Se o formulário já foi enviado, mostramos a mensagem de "Obrigado!"
  if (submitted) {
    return (
      <div className="bg-secondary-50 p-6 rounded-lg text-center" data-aos="fade-up">
        {/* Ícone bonito de "check" */}
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

        {/* Mensagem amigável */}
        <h3 className="text-2xl font-bold text-primary-500 mb-2">Obrigado!</h3>
        <p className="text-gray-600 mb-4">
          Sua mensagem foi recebida. Entraremos em contato em breve.
        </p>

        {/* Botão para enviar outra mensagem */}
        <button 
          onClick={() => setSubmitted(false)} 
          className="btn btn-primary"
        >
          Enviar Outra Mensagem
        </button>
      </div>
    )
  }

  // Se ainda não foi enviado, mostramos o formulário
  return (
    <form onSubmit={handleSubmit} data-aos="fade-up">
      
      {/* Mostra mensagem de erro, se houver */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-lg">
          {error}
        </div>
      )}
      
      {/* Campo Nome */}
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="João Silva"
        />
      </div>
      
      {/* Campo Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          E-mail
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
      
      {/* Campo Telefone */}
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="(11) 98765-4321"
        />
      </div>
      
      {/* Campo Mensagem */}
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
          placeholder="Como podemos ajudar?"
        />
      </div>
      
      {/* Botão de Enviar */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
        {/* Enquanto está enviando, mostra um spinner */}
        {isSubmitting ? (
          <span className="flex items-center justify-center">
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

export default ContactForm
