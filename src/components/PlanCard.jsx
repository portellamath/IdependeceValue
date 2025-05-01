// Importa componentes do react-router-dom e ícones do react-icons
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

// Componente funcional PlanCard
const PlanCard = ({ 
  title,  // Título do plano
  price,  // Preço do plano
  period = 'mês',  // Período de cobrança (por padrão, "mês")
  description,  // Descrição do plano
  features,  // Características ou benefícios do plano
  isPopular = false,  // Flag para indicar se o plano é popular
  delayIndex = 0  // Delay para animação (para controle de quando cada card aparece)
}) => {
  return (
    // Card que representa um plano, com animações e estilo baseado na popularidade
    <div 
      className={`relative flex flex-col h-full p-6 rounded-xl shadow-card transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-secondary-500 transform hover:-translate-y-1'  // Estilo quando o plano é popular
          : 'border border-gray-200 hover:border-secondary-500'  // Estilo para planos não populares
      }`}
      data-aos="fade-up"  // Animação de fade-up com a biblioteca AOS
      data-aos-delay={delayIndex * 100}  // Controla o atraso de animação com base no delayIndex
    >
      {/* Se o plano for popular, exibe um selo indicando "Mais Popular" */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary-500 text-white py-1 px-3 text-xs font-medium transform translate-x-2 -translate-y-2 rounded">
          Mais Popular
        </div>
      )}

      {/* Parte do título, descrição e preço do plano */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary-500 mb-2">{title}</h3>  {/* Título do plano */}
        <p className="text-gray-600 mb-6">{description}</p>  {/* Descrição do plano */}

        {/* Exibição do preço do plano, seguido do período */}
        <div className="flex items-end">
          <span className="text-4xl font-bold text-primary-500">R${price}</span>  {/* Preço do plano */}
          {period && (
            <span className="text-gray-500 ml-1">/ {period}</span>  // Período de cobrança (ex: "mês")
          )}
        </div>
      </div>

      {/* Lista das características do plano */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="mr-2 mt-1 text-secondary-500" size={18} />  {/* Ícone de "check" */}
            <span className="text-gray-700">{feature}</span>  {/* Texto da característica */}
          </li>
        ))}
      </ul>

      {/* Link para a página de contato com o botão de "Escolher Plano" */}
      <Link
        to="/contact"
        className={`btn w-full text-center ${isPopular ? 'btn-primary' : 'btn-outline'}`}  // Estilo condicional para o botão, dependendo da popularidade do plano
      >
        Escolher Plano  {/* Texto do botão */}
      </Link>
    </div>
  )
}

// Exporta o componente PlanCard para ser usado em outras partes do projeto
export default PlanCard
