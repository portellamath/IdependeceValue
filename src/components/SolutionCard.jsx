const SolutionCard = ({ 
  icon, 
  title, 
  description,
  delayIndex = 0
}) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
      data-aos="fade-up" 
      data-aos-delay={delayIndex * 100}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-secondary-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-500">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default SolutionCard
