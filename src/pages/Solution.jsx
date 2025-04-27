import { 
  FiPieChart, 
  FiTrendingUp, 
  FiDollarSign, 
  FiUser, 
  FiShield, 
  FiBarChart2, 
  FiFileText, 
  FiBriefcase 
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import SolutionCard from '../components/SolutionCard'

const Solution = () => {
  const solutions = [
    {
      icon: <FiPieChart size={24} />,
      title: 'Financial Planning',
      description: 'Comprehensive financial roadmaps tailored to your specific goals, risk tolerance, and time horizon.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Investment Management',
      description: 'Expert management of your investment portfolio to maximize returns while managing risk appropriately.'
    },
    {
      icon: <FiDollarSign size={24} />,
      title: 'Cost Analysis',
      description: 'Detailed analysis of your expenses to identify opportunities for cost reduction and efficiency improvement.'
    },
    {
      icon: <FiUser size={24} />,
      title: 'Personalized Consulting',
      description: 'One-on-one consulting sessions with our financial experts to address your specific concerns and questions.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Risk Management',
      description: 'Identification and mitigation of financial risks through appropriate insurance and contingency planning.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Performance Analytics',
      description: 'Regular performance reports and analysis to keep you informed about your financial progress.'
    },
    {
      icon: <FiFileText size={24} />,
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax burden while ensuring full compliance with tax laws.'
    },
    {
      icon: <FiBriefcase size={24} />,
      title: 'Business Financial Services',
      description: 'Specialized financial services for businesses, including cash flow management and growth strategies.'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive discussion to understand your financial situation, goals, and challenges.'
    },
    {
      number: '02',
      title: 'Financial Analysis',
      description: 'Our team conducts a thorough analysis of your current financial position, identifying strengths and areas for improvement.'
    },
    {
      number: '03',
      title: 'Strategy Development',
      description: 'Based on our analysis, we develop a customized financial strategy designed to help you achieve your specific goals.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'We work with you to implement the recommended strategies, making adjustments as needed to ensure optimal results.'
    },
    {
      number: '05',
      title: 'Ongoing Management',
      description: 'Our team provides continuous monitoring and management of your financial plan, making adjustments as circumstances change.'
    }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Our Financial Solutions
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive financial management solutions designed to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Financial Management Solutions"
            subtitle="Our range of services is designed to address all aspects of your financial life."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                delayIndex={index % 4}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Process"
            subtitle="We follow a structured approach to ensure that our financial solutions are tailored to your specific needs."
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex mb-12 last:mb-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mr-6 relative">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-full font-bold text-xl">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-14 left-1/2 w-0.5 h-full -ml-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Why Choose IV Value?"
                subtitle="We combine expertise, personalization, and cutting-edge technology to deliver superior financial results."
              />
              
              <div data-aos="fade-up">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team consists of certified financial professionals with decades of combined experience in various financial disciplines.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">
                    We recognize that every client is unique, which is why we develop customized solutions tailored to your specific needs and goals.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Transparent Process</h3>
                  <p className="text-gray-600">
                    We believe in complete transparency in all our dealings, ensuring that you always understand our recommendations and their rationale.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Continuous Support</h3>
                  <p className="text-gray-600">
                    Our commitment to your financial success doesn't end with the initial planning; we provide ongoing support and adjustments as your circumstances change.
                  </p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Financial Team Meeting" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Success Stories"
            subtitle="Read about how our financial solutions have helped clients achieve their goals."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-6 rounded-lg shadow-card"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Business Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                A medium-sized technology company came to us struggling with cash flow issues despite growing revenues. Our team implemented a comprehensive financial management strategy that improved cash flow, reduced unnecessary expenses, and created a sustainable growth plan. Within 18 months, the company increased its profit margin by 22% and expanded into two new markets.
              </p>
              <div className="text-sm text-gray-500">
                - TechGrowth Solutions, Technology Sector
              </div>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                A couple in their 50s was concerned about their retirement readiness. We developed a customized retirement strategy that optimized their investments, improved tax efficiency, and created a clear roadmap for retirement. By implementing our recommendations, they were able to retire three years earlier than originally planned, with the financial security they desired.
              </p>
              <div className="text-sm text-gray-500">
                - Private Clients, Retirement Planning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how our financial solutions can help you achieve your goals.
            </p>
            <a href="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution