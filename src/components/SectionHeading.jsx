const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  data_aos = "fade-up"
}) => {
  return (
    <div 
      className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
      data-aos={data_aos}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading