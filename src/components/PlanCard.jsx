import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

const PlanCard = ({ 
  title, 
  price, 
  period = 'month', 
  description, 
  features, 
  isPopular = false,
  delayIndex = 0 
}) => {
  return (
    <div 
      className={`relative flex flex-col h-full p-6 rounded-xl shadow-card transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-secondary-500 transform hover:-translate-y-1'
          : 'border border-gray-200 hover:border-secondary-500'
      }`}
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary-500 text-white py-1 px-3 text-xs font-medium transform translate-x-2 -translate-y-2 rounded">
          Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary-500 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="flex items-end">
          <span className="text-4xl font-bold text-primary-500">${price}</span>
          {period && (
            <span className="text-gray-500 ml-1">/{period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="mr-2 mt-1 text-secondary-500" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`btn w-full text-center ${
          isPopular ? 'btn-primary' : 'btn-outline'
        }`}
      >
        Escolher Plano
      </Link>
    </div>
  )
}

export default PlanCard