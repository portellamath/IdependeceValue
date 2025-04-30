import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numero: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Simular chamada de API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({
        nome: '',
        email: '',
        numero: '',
        mensagem: '',
      })
    } catch (err) {
      setError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-secondary-50 p-6 rounded-lg text-center" data-aos="fade-up">
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
        <h3 className="text-2xl font-bold text-primary-500 mb-2">Obrigado!</h3>
        <p className="text-gray-600 mb-4">
          Sua mensagem foi recebida. Entraremos em contato em breve.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="btn btn-primary"
        >
          Enviar Outra Mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-aos="fade-up">
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-lg">
          {error}
        </div>
      )}
      
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
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
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
