import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import PlanCard from '../components/PlanCard'

const Plans = () => {
  const plans = [
    {
      title: 'Essential Plan',
      price: '199',
      period: 'month',
      description: 'Perfect for individuals and small businesses just getting started.',
      features: [
        'Basic financial assessment',
        'Monthly financial reports',
        'Email support',
        'Annual portfolio review',
        'Basic tax planning'
      ],
      isPopular: false
    },
    {
      title: 'Premium Plan',
      price: '499',
      period: 'month',
      description: 'Our most popular plan for growing businesses and serious investors.',
      features: [
        'Comprehensive financial assessment',
        'Bi-weekly financial reports',
        'Priority email and phone support',
        'Quarterly portfolio reviews',
        'Advanced tax strategies',
        'Retirement planning',
        'Dedicated financial advisor'
      ],
      isPopular: true
    },
    {
      title: 'Corporate Plan',
      price: '999',
      period: 'month',
      description: 'Enterprise-level financial management for established organizations.',
      features: [
        'Enterprise financial strategy',
        'Weekly comprehensive reports',
        '24/7 priority support',
        'Monthly in-depth reviews',
        'Custom tax optimization',
        'Succession planning',
        'Team of dedicated advisors',
        'Risk management solutions',
        'Merger & acquisition advisory'
      ],
      isPopular: false
    }
  ]

  const customPlans = [
    {
      title: 'Financial Planning',
      description: 'Comprehensive financial planning tailored to your specific goals and circumstances.',
      link: '/contact'
    },
    {
      title: 'Investment Management',
      description: 'Professional management of your investment portfolio to maximize returns and minimize risks.',
      link: '/contact'
    },
    {
      title: 'Retirement Planning',
      description: 'Strategic planning to ensure a comfortable and secure retirement.',
      link: '/contact'
    },
    {
      title: 'Business Consulting',
      description: 'Expert financial consulting for businesses of all sizes, from startups to established enterprises.',
      link: '/contact'
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
            Financial Management Plans
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Choose the perfect plan to meet your financial goals and transform your financial future.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Service Plans"
            subtitle="Select the plan that best fits your financial needs and goals."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard 
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                delayIndex={index}
              />
            ))}
          </div>
          
          <div 
            className="mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-gray-600 mb-6">
              Not sure which plan is right for you? Contact us for a personalized recommendation.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Custom Recommendation
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Specialized Financial Services"
            subtitle="In addition to our standard plans, we offer specialized services to address specific financial needs."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <Link 
                  to={plan.link} 
                  className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium"
                >
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our financial management plans."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div 
              className="mb-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">How do I know which plan is right for me?</h3>
              <p className="text-gray-600">
                The best plan depends on your specific financial situation, goals, and the complexity of your financial needs. Our Essential Plan is great for individuals just starting their financial journey, while our Premium and Corporate Plans offer more comprehensive services for those with more complex financial situations.
              </p>
            </div>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Can I upgrade or downgrade my plan later?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. We understand that financial needs change, and we make it easy to adjust your services accordingly.
              </p>
            </div>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Is there a long-term commitment required?</h3>
              <p className="text-gray-600">
                No long-term commitment is required. All of our plans are billed monthly, and you can cancel at any time. However, financial management typically yields the best results when approached as a long-term strategy.
              </p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Do you offer customized plans?</h3>
              <p className="text-gray-600">
                Yes, we can create customized financial management plans tailored to your specific needs. Contact our team to discuss your requirements and we'll develop a personalized solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Take the first step toward achieving your financial goals with IV Value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
                Contact Us Today
              </Link>
              <Link to="/solutions" className="btn bg-white text-primary-500 hover:bg-gray-100">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Plans