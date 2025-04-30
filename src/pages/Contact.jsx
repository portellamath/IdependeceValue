import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import MapComponent from '../components/MapComponent'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,
      title: 'Telefone',
      details: ['+55 19 99948-1590'],
      links: ['tel:+5519999481590']
    },
    {
      icon: <FiMail size={24} />,
      title: 'E-mail',
      details: ['info@ivvalue.com', 'support@ivvalue.com'],
      links: ['mailto:info@ivvalue.com', 'mailto:support@ivvalue.com']
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Localização',
      details: ['FATEC Itu - Rua XV de Novembro, 481', 'Itu, SP 13300-000'],
      links: ['https://maps.google.com/?q=Rua+XV+de+Novembro,+481,+Itu,+SP,+13300-000']
    },
    {
      icon: <FiClock size={24} />,
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 9h-18h', 'Sábado: 10h-14h'],
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
            Entre em Contato
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Entre em contato com nossa equipe de especialistas financeiros para discutir como podemos ajudá-lo a alcançar seus objetivos financeiros.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Entre em Contato"
            subtitle="Estamos aqui para ajudar com qualquer dúvida que você tenha sobre nossos serviços de gestão financeira."
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
                title="Envie uma Mensagem"
                subtitle="Preencha o formulário abaixo e um de nossos especialistas financeiros entrará em contato com você em até 24 horas."
              />
              <ContactForm />
            </div>
            
            <div>
              <SectionHeading 
                title="Nossa Localização"
                subtitle="Visite nosso escritório no coração do distrito financeiro de Nova York."
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
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para perguntas comuns sobre como entrar em contato com nossa equipe e começar."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Quanto tempo leva para obter uma resposta?</h3>
              <p className="text-gray-600">
                Normalmente, respondemos todas as consultas em até 24 horas úteis. Para assuntos urgentes, recomendamos ligar diretamente para nosso escritório.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Preciso preparar algo para a consulta inicial?</h3>
              <p className="text-gray-600">
                Embora não seja obrigatório, ter uma noção geral de seus objetivos financeiros e situação financeira atual ajudará a fornecer uma orientação mais direcionada durante a consulta inicial.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">A consulta inicial é gratuita?</h3>
              <p className="text-gray-600">
                Sim, oferecemos uma consulta inicial gratuita de 30 minutos para discutir suas necessidades financeiras e determinar como podemos melhor assisti-lo.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso agendar uma reunião virtual?</h3>
              <p className="text-gray-600">
                Claro! Oferecemos reuniões presenciais e virtuais para acomodar suas preferências e agenda.
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
              Pronto para Começar?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo rumo ao sucesso financeiro entrando em contato com nossa equipe hoje mesmo.
            </p>
            <a href="tel:+5519999481590" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Ligue Agora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
