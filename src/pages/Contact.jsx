// Ícones de contato
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

// Componentes reutilizáveis da aplicação
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import MapComponent from '../components/MapComponent'

const Contact = () => {
  // Lista com as informações de contato da empresa
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,
      title: 'Telefone',
      details: ['+55 19 99948-1590'],
      links: ['tel:+55 19 99948-1590'] // Link direto para ligação
    },
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      details: ['info@ivvalue.com', 'support@ivvalue.com'],
      links: ['mailto:info@ivvalue.com', 'mailto:support@ivvalue.com']
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Localização',
      details: ['Av. Tiradentes, 1211 - Parque Industrial, Itu - SP, 13309-640'],
      links: ['https://www.google.com/maps/...'] // Link direto para o Google Maps
    },
    {
      icon: <FiClock size={24} />,
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 9h-18h', 'Sábado: 10h-14h'],
      links: [] // Sem links clicáveis aqui
    }
  ]

  return (
    <>
      {/* Hero Section - Cabeçalho com chamada para contato */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Fale com nossos especialistas e transforme seu futuro financeiro.
          </p>
        </div>
      </section>

      {/* Seção com os meios de contato */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Como entrar em contato?"
            subtitle="Estamos prontos para ajudar você a organizar, crescer e proteger suas finanças."
            centered={true}
          />

          {/* Blocos com telefone, e-mail, endereço e horário */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Ícone circular */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {info.icon}
                </div>

                {/* Título da informação (ex: "Telefone") */}
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{info.title}</h3>

                {/* Lista dos detalhes */}
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

          {/* Formulário de contato e mapa lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Envie uma Mensagem"
                subtitle="Preencha o formulário abaixo e um de nossos especialistas financeiros entrará em contato com você em até 24 horas."
              />
              <ContactForm /> {/* Componente com o formulário de envio */}
            </div>

            <div>
              <SectionHeading 
                title="Nossa Localização"
                subtitle="Visite nosso escritório"
              />
              <MapComponent /> {/* Mapa interativo mostrando a localização */}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de perguntas frequentes (FAQ) */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para perguntas comuns sobre nossos planos de gestão financeira."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cada bloco é uma pergunta com sua resposta */}
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Em quanto tempo recebo uma resposta?</h3>
              <p className="text-gray-600">Respondemos em até 24 horas úteis. Para urgências, ligue diretamente para nosso número.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Preciso preparar algo para a consulta inicial?</h3>
              <p className="text-gray-600">Não é obrigatório, mas se tiver informações sobre seus objetivos e situação financeira, podemos ajudar ainda melhor.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">A consulta inicial é gratuita?</h3>
              <p className="text-gray-600">Sim! Oferecemos uma consulta gratuita de 30 minutos para entender suas necessidades.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso agendar uma reunião online?</h3>
              <p className="text-gray-600">Claro! Atendemos presencialmente ou por videochamada, conforme sua preferência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final para ação (CTA) */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo rumo ao sucesso financeiro entrando em contato com nossa equipe hoje mesmo.
            </p>
            <a href="tel:+12125557890" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Ligue Agora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
