// Importa o componente Link do React Router para navegação
import { Link } from 'react-router-dom'
// Importa o ícone de "check" da biblioteca react-icons
import { FiCheck } from 'react-icons/fi'

// Componente PlanCard que recebe as props para personalizar cada plano
const PlanCard = ({ 
  title,        // Título do plano
  price,        // Preço do plano
  period = 'month', // Período do plano (padrão: 'month')
  description,  // Descrição breve do plano
  features,     // Lista de funcionalidades incluídas
  isPopular = false, // Se é o plano mais popular (dá destaque visual)
  delayIndex = 0     // Controla o atraso na animação (efeito AOS)
}) => {
  return (
    <div 
      // Card com borda e efeito hover diferente se for o plano "Popular"
      className={`relative flex flex-col h-full p-6 rounded-xl shadow-card transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-secondary-500 transform hover:-translate-y-1' // Se for popular: borda mais grossa + efeito de "levantar"
          : 'border border-gray-200 hover:border-secondary-500'            // Se não: borda normal + muda a cor no hover
      }`}
      data-aos="fade-up"                      // Animação ao rolar (fade-up)
      data-aos-delay={delayIndex * 100}       // Delay com base no índice (efeito escadinha)
    >
      {/* Selo de destaque no canto se for plano popular */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary-500 text-white py-1 px-3 text-xs font-medium transform translate-x-2 -translate-y-2 rounded">
          Popular
        </div>
      )}

      {/* Cabeçalho do plano */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary-500 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Preço com destaque */}
        <div className="flex items-end">
          <span className="text-4xl font-bold text-primary-500">R${price}</span>
          {period && (
            <span className="text-gray-500 ml-1">/{period}</span>
          )}
        </div>
      </div>

      {/* Lista de funcionalidades */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="mr-2 mt-1 text-secondary-500" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Botão que leva para a página de cadastro */}
      <Link
        to="/cadastro"
        className={`btn w-full text-center ${
          isPopular ? 'btn-primary' : 'btn-outline' // Se for popular, botão cheio (primary). Senão, outline
        }`}
      >
        Escolher Plano
      </Link>
    </div>
  )
}

export default PlanCard