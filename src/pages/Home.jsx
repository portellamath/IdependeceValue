import { Link } from 'react-router-dom'
import { FiPieChart, FiTrendingUp, FiShield, FiBarChart2 } from 'react-icons/fi'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  const features = [
    {
      icon: <FiPieChart size={24} />,
      title: 'Strategic Financial Planning',
      description: 'Comprehensive financial roadmaps tailored to your specific goals and circumstances.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Investment Growth',
      description: 'Expert investment strategies designed to maximize returns while managing risk.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of financial risks to protect your assets.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Performance Analytics',
      description: 'Detailed analysis and reporting to track progress toward your financial goals.'
    }
  ]

  const testimonials = [
    {
      author: 'Jennifer Adams',
      position: 'CEO, TechStart Inc.',
      content: 'IV Value transformed our financial operations. Their strategic guidance helped us increase profitability by 28% within just one year.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Michael Johnson',
      position: 'Small Business Owner',
      content: 'As a small business owner, I was struggling with cash flow management. IV Value provided simple yet effective strategies that completely changed my business.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Sarah Thompson',
      position: 'Director of Operations, GlobalTech',
      content: 'Their personalized approach to financial management sets them apart. They don\'t just offer solutions; they take time to understand your specific needs.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    }
  ]

  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Creating Lasting Financial Value"
            subtitle="Our comprehensive services are designed to help you achieve financial success through strategic planning and expert management."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delayIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Financial Team" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              <SectionHeading 
                title="Expert Financial Management Since 2010"
                subtitle="We combine industry expertise with personalized service to deliver exceptional results."
                data_aos="fade-left"
              />
              <div data-aos="fade-left" data-aos-delay="100">
                <p className="text-gray-600 mb-6">
                  At IV Value, we believe that financial success begins with a strong foundation of trust and expertise. Our team of seasoned financial professionals brings decades of combined experience to every client relationship.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you're planning for retirement, managing business finances, or seeking to optimize your investment portfolio, our tailored approach ensures that your specific needs and goals are always our top priority.
                </p>
                <Link to="/solutions" className="btn btn-primary">
                  Discover Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="We're proud to have helped hundreds of clients achieve their financial goals."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                author={testimonial.author}
                position={testimonial.position}
                content={testimonial.content}
                image={testimonial.image}
                rating={testimonial.rating}
                delayIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Take the first step toward financial success by connecting with our expert team today.
            </p>
            <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home