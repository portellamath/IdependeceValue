import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi' // Importando ícones para telefone, e-mail, localização e horário
import SectionHeading from '../components/SectionHeading' // Componente de cabeçalho da seção
import ContactForm from '../components/ContactForm' // Formulário de contato
import MapComponent from '../components/MapComponent' // Componente do mapa

const Contact = () => {
  // Informações de contato, como telefone, e-mail, localização e horários de atendimento
  const contactInfo = [
    {
      icon: <FiPhone size={24} />, // Ícone de telefone
      title: 'Telefone',
      details: ['+55 19 99948-1590'], // Número de telefone
      links: ['tel:+5519999481590'] // Link do telefone (permite clicar e ligar diretamente)
    },
    {
      icon: <FiMail size={24} />, // Ícone de e-mail
      title: 'E-mail',
      details: ['info@ivvalue.com', 'support@ivvalue.com'], // E-mails para contato
      links: ['mailto:info@ivvalue.com', 'mailto:support@ivvalue.com'] // Links de e-mail para envio direto
    },
    {
      icon: <FiMapPin size={24} />, // Ícone de localização
      title: 'Localização',
      details: ['FATEC Itu - Rua XV de Novembro, 481', 'Itu, SP 13300-000'], // Endereço da empresa
      links: ['https://maps.google.com/?q=Rua+XV+de+Novembro,+481,+Itu,+SP,+13300-000'] // Link para o Google Maps
    },
    {
      icon: <FiClock size={24} />, // Ícone de horário
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 9h-18h', 'Sábado: 10h-14h'], // Horário de funcionamento
      links: [] // Não há links para horários
    }
  ]

  return (
    <>
      {/* Seção de Cabeçalho */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up" // Animação ao aparecer
          >
            Entre em Contato
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100" // Atraso na animação
          >
            Fale com nossos especialistas e transforme seu futuro financeiro.
          </p>
        </div>
      </section>

      {/* Seção de Informações de Contato */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Como entrar em contato?" // Título da seção
            subtitle="Estamos prontos para ajudar você a organizar, crescer e proteger suas finanças."
            centered={true} // Centralizar o título e o subtítulo
          />
          
          {/* Grid para exibir as informações de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              // Mapeamento dos dados de contato
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card text-center"
                data-aos="fade-up" // Animação de fade-up ao aparecer
                data-aos-delay={index * 100} // Atraso para cada item de contato
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {info.icon} {/* Ícone correspondente */}
                </div>
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{info.title}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">
                      {info.links[idx] ? (
                        // Se houver link, criamos um link clicável
                        <a href={info.links[idx]} className="hover:text-secondary-500 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        // Se não houver link, exibe o texto simples
                        detail
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Seção do Formulário de Contato e Mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Envie uma Mensagem" // Título da seção do formulário
                subtitle="Preencha o formulário abaixo e um de nossos especialistas financeiros entrará em contato com você em até 24 horas."
              />
              <ContactForm /> {/* Componente do formulário de contato */}
            </div>
            
            <div>
              <SectionHeading 
                title="Nossa Localização" // Título da seção de localização
                subtitle="Visite nosso escritório no coração do distrito financeiro de Nova York."
              />
              <MapComponent /> {/* Componente do mapa */}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Perguntas Frequentes" // Título da seção de FAQ
            subtitle="Encontre respostas para perguntas comuns sobre como entrar em contato com nossa equipe e começar."
            centered={true} // Centralizar o título e o subtítulo
          />
          
          {/* Grid de perguntas e respostas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up" // Animação de fade-up
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Em quanto tempo recebo uma resposta?</h3>
              <p className="text-gray-600">
              Respondemos em até 24 horas úteis. Para urgências, ligue diretamente para nosso número.
              </p>
            </div>
            
            {/* Outras perguntas de FAQ */}
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100" // Atraso na animação
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Preciso preparar algo para a consulta inicial?</h3>
              <p className="text-gray-600">
              Não é obrigatório, mas se tiver informações sobre seus objetivos e situação financeira, podemos ajudar ainda melhor.
              </p>
            </div>
            
            {/* Mais perguntas */}
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200" // Atraso na animação
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">A consulta inicial é gratuita?</h3>
              <p className="text-gray-600">
              Sim! Oferecemos uma consulta gratuita de 30 minutos para entender suas necessidades.
              </p>
            </div>
            
            <div 
              className="bg-gray-50 p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300" // Atraso na animação
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso agendar uma reunião online?</h3>
              <p className="text-gray-600">
              Claro! Atendemos presencialmente ou por videochamada, conforme sua preferência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de CTA (Call to Action) */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar? {/* Chamada à ação */}
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo rumo ao sucesso financeiro entrando em contato com nossa equipe hoje mesmo.
            </p>
            {/* Botão de chamada à ação */}
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
