// Importação dos ícones que vamos usar na seção de contato
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi' 

// Importando componentes que já foram criados no projeto
import SectionHeading from '../components/SectionHeading' // Cabeçalho reutilizável
import ContactForm from '../components/ContactForm'       // Formulário de contato do usuário
import MapComponent from '../components/MapComponent'     // Mapa com a localização da empresa

// Componente de página: Contact
const Contact = () => {
  // Dados de contato que vamos exibir na tela (telefone, e-mail, endereço e horário)
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,      // Ícone de telefone
      title: 'Telefone',               // Título exibido
      details: ['+55 19 99948-1590'],  // Número de telefone exibido
      links: ['tel:+5519999481590']    // Link para clicar e ligar automaticamente
    },
    {
      icon: <FiMail size={24} />,      // Ícone de e-mail
      title: 'E-mail',
      details: ['info@ivvalue.com', 'support@ivvalue.com'], // Dois e-mails disponíveis
      links: ['mailto:info@ivvalue.com', 'mailto:support@ivvalue.com'] // Links clicáveis para enviar e-mail
    },
    {
      icon: <FiMapPin size={24} />,    // Ícone de localização
      title: 'Localização',
      details: ['FATEC Itu - Rua XV de Novembro, 481', 'Itu, SP 13300-000'], // Endereço físico
      links: ['https://maps.google.com/?q=Rua+XV+de+Novembro,+481,+Itu,+SP,+13300-000'] // Link para o Google Maps
    },
    {
      icon: <FiClock size={24} />,     // Ícone de horário
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 9h-18h', 'Sábado: 10h-14h'], // Horários exibidos
      links: [] // Horário não precisa de link
    }
  ]

  return (
    <>
      {/* Seção: Cabeçalho principal da página */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up" // Animação com efeito "subir" ao aparecer
          >
            Entre em Contato
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fale com nossos especialistas e transforme seu futuro financeiro.
          </p>
        </div>
      </section>

      {/* Seção: Informações de contato (telefone, e-mail, etc) */}
      <section className="section bg-gray-50">
        <div className="container">
          {/* Título e subtítulo da seção */}
          <SectionHeading 
            title="Como entrar em contato?" 
            subtitle="Estamos prontos para ajudar você a organizar, crescer e proteger suas finanças."
            centered={true}
          />
          
          {/* Grid com cada bloco de informação (telefone, e-mail...) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Atraso para animar cada item um após o outro
              >
                {/* Ícone no topo */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {info.icon}
                </div>

                {/* Título do bloco (ex: Telefone, E-mail...) */}
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{info.title}</h3>
                
                {/* Lista de detalhes (número, e-mail, endereço...) */}
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">
                      {info.links[idx] ? (
                        // Se houver link, torna o texto clicável
                        <a href={info.links[idx]} className="hover:text-secondary-500 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        // Se não houver link, só mostra o texto
                        detail
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Seção: Formulário + Mapa lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bloco do formulário */}
            <div>
              <SectionHeading 
                title="Envie uma Mensagem"
                subtitle="Preencha o formulário abaixo e um de nossos especialistas financeiros entrará em contato com você em até 24 horas."
              />
              <ContactForm />
            </div>
            
            {/* Bloco do mapa */}
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

      {/* Seção: Perguntas Frequentes (FAQ) */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para perguntas comuns sobre como entrar em contato com nossa equipe e começar."
            centered={true}
          />
          
          {/* Grid com as perguntas e respostas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Cada bloco é uma pergunta com resposta */}
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Em quanto tempo recebo uma resposta?</h3>
              <p className="text-gray-600">
                Respondemos em até 24 horas úteis. Para urgências, ligue diretamente para nosso número.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Preciso preparar algo para a consulta inicial?</h3>
              <p className="text-gray-600">
                Não é obrigatório, mas se tiver informações sobre seus objetivos e situação financeira, podemos ajudar ainda melhor.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">A consulta inicial é gratuita?</h3>
              <p className="text-gray-600">
                Sim! Oferecemos uma consulta gratuita de 30 minutos para entender suas necessidades.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso agendar uma reunião online?</h3>
              <p className="text-gray-600">
                Claro! Atendemos presencialmente ou por videochamada, conforme sua preferência.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção: CTA (Chamada para ação) final */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo rumo ao sucesso financeiro entrando em contato com nossa equipe hoje mesmo.
            </p>
            {/* Botão de ligação direta */}
            <a href="tel:+5519999481590" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Ligue Agora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// Exporta o componente da página para ser usado na rota /contato
export default Contact
