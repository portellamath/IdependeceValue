import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import MapComponent from '../components/MapComponent'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      details: ['+1 (212) 555-7890', '+1 (212) 555-7891'],
      links: ['tel:+12125557890', 'tel:+12125557891']
    },
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      details: ['info@ivvalue.com', 'support@ivvalue.com'],
      links: ['mailto:info@ivvalue.com', 'mailto:support@ivvalue.com']
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      details: ['123 Finance Street, Suite 200', 'New York, NY 10001'],
      links: ['https://maps.google.com/?q=123+Finance+Street,+New+York,+NY+10001']
    },
    {
      icon: <FiClock size={24} />,
      title: 'Business Hours',
      details: ['Monday-Friday: 9AM-6PM', 'Saturday: 10AM-2PM'],
      links: []
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
            Contact Us
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get in touch with our team of financial experts to discuss how we can help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Get In Touch"
            subtitle="We're here to help you with any questions you may have about our financial management services."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{info.title}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">
                      {info.links[idx] ? (
                        <a href={info.links[idx]} className="hover:text-secondary-500 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Send Us a Message"
                subtitle="Fill out the form below and one of our financial experts will get back to you within 24 hours."
              />
              <ContactForm />
            </div>
            
            <div>
              <SectionHeading 
                title="Our Location"
                subtitle="Visit our office in the heart of New York's financial district."
              />
              <MapComponent />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about contacting our team and getting started."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Do I need to prepare anything for the initial consultation?</h3>
              <p className="text-gray-600">
                While not required, having a general understanding of your financial goals and current financial situation will help us provide more targeted guidance during the initial consultation.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Is the initial consultation free?</h3>
              <p className="text-gray-600">
                Yes, we offer a complimentary 30-minute initial consultation to discuss your financial needs and determine how we can best assist you.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Can I schedule a virtual meeting?</h3>
              <p className="text-gray-600">
                Absolutely! We offer both in-person and virtual meetings to accommodate your preferences and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Take the first step toward financial success by contacting our team today.
            </p>
            <a href="tel:+12125557890" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact