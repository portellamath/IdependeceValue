// Importa o Link para navegação entre páginas e o ícone de "check"
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

// Componente de cartão que exibe um plano (ex: plano grátis, premium, etc.)
const PlanCard = ({ 
  title,       // Nome do plano (ex: "Básico", "Premium")
  price,       // Valor do plano (ex: 49.90)
  period = 'mês', // Período (ex: "mês", "ano"), padrão é "mês"
  description, // Pequeno texto que descreve o plano
  features,    // Lista com os benefícios do plano
  isPopular = false, // Indica se este plano é o mais popular (dá destaque visual)
  delayIndex = 0     // Controla a ordem de animação quando os cards aparecem
}) => {
  return (
    // Estrutura do cartão com estilo e animação
    <div 
      className={`relative flex flex-col h-full p-6 rounded-xl shadow-card transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-secondary-500 transform hover:-translate-y-1' // Se for popular, borda mais grossa e efeito de "subir" ao passar o mouse
          : 'border border-gray-200 hover:border-secondary-500' // Se não for popular, borda mais simples
      }`}
      data-aos="fade-up"  // Animação suave que sobe ao aparecer (usando a biblioteca AOS)
      data-aos-delay={delayIndex * 100} // Cada card aparece com um pequeno atraso (efeito em cascata)
    >
      {/* Selo "Mais Popular" só aparece se isPopular for true */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary-500 text-white py-1 px-3 text-xs font-medium transform translate-x-2 -translate-y-2 rounded">
          Mais Popular
        </div>
      )}

      {/* Área que mostra o título, descrição e preço */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary-500 mb-2">{title}</h3> {/* Ex: "Plano Premium" */}
        <p className="text-gray-600 mb-6">{description}</p> {/* Texto explicando para quem é o plano */}

        {/* Preço do plano, com destaque grande */}
        <div className="flex items-end">
          <span className="text-4xl font-bold text-primary-500">R${price}</span> {/* Ex: R$49,90 */}
          {period && (
            <span className="text-gray-500 ml-1">/ {period}</span> // Ex: "/ mês"
          )}
        </div>
      </div>

      {/* Lista dos benefícios (features) do plano */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="mr-2 mt-1 text-secondary-500" size={18} /> {/* Ícone de check */}
            <span className="text-gray-700">{feature}</span> {/* Texto da vantagem */}
          </li>
        ))}
      </ul>

      {/* Botão que leva o usuário para a página de contato para contratar o plano */}
      <Link
        to="/contact"
        className={`btn w-full text-center ${isPopular ? 'btn-primary' : 'btn-outline'}`} // Se for popular, botão colorido; se não, botão com borda
      >
        Escolher Plano {/* Texto do botão */}
      </Link>
    </div>
  )
}

// Exporta o componente para ser usado em outras partes do site
export default PlanCard
