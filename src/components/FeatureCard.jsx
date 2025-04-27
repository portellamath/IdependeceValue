const FeatureCard = ({ icon, title, description, delayIndex = 0 }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-500">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard