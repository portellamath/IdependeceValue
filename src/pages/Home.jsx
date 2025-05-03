import { Link } from 'react-router-dom' // Importando Link para navegação entre páginas
import { FiPieChart, FiTrendingUp, FiShield, FiBarChart2 } from 'react-icons/fi' // Importando ícones para ilustrar as funcionalidades
import HeroSection from '../components/HeroSection' // Importando componente para a seção de introdução (herói) da página
import SectionHeading from '../components/SectionHeading' // Importando componente para o título e subtítulo das seções
import FeatureCard from '../components/FeatureCard' // Importando componente para exibir os cards das funcionalidades
import TestimonialCard from '../components/TestimonialCard' // Importando componente para exibir os cards dos depoimentos

const Home = () => {
  // Array de objetos que define as funcionalidades principais do serviço
  const features = [
    {
      icon: <FiPieChart size={24} />, // Ícone representando a funcionalidade de planejamento financeiro
      title: 'Planejamento Financeiro Estratégico', // Título da funcionalidade
      description: 'Mapas financeiros simples e personalizados, adaptados à realidade de quem é MEI ou autônomo.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiTrendingUp size={24} />, // Ícone representando a funcionalidade de crescimento de investimentos
      title: 'Crescimento de Investimentos', // Título da funcionalidade
      description: 'Estratégias práticas e acessíveis para fazer seu dinheiro render, mesmo começando com pouco.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiShield size={24} />, // Ícone representando a funcionalidade de gestão de riscos
      title: 'Gestão de Riscos', // Título da funcionalidade
      description: 'Dicas e soluções para proteger seu negócio e sua renda contra imprevistos.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiBarChart2 size={24} />, // Ícone representando a funcionalidade de análise de desempenho
      title: 'Análise de Desempenho', // Título da funcionalidade
      description: 'Relatórios claros para acompanhar o crescimento da sua atividade e tomar decisões melhores.' // Descrição detalhada da funcionalidade
    }
  ]

  // Array de objetos que define os depoimentos de clientes
  const testimonials = [
    {
      author: 'Jennifer Adams', // Nome do autor do depoimento
      position: 'Manicure e MEI', // Cargo do autor
      content: 'A Independent Value me ajudou a organizar minhas finanças e aumentar meu lucro como MEI em 28% em apenas um ano.', // Conteúdo do depoimento
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // URL da imagem do autor
      rating: 5 // Classificação em estrelas (5 estrelas)
    },
    {
      author: 'Michael Johnson', // Nome do autor do depoimento
      position: 'Designer Gráfico Autônomo', // Cargo do autor
      content: 'Como autônomo, eu estava sempre no vermelho. A Independent Value me ensinou a controlar meu fluxo de caixa e hoje meu negócio está saudável', // Conteúdo do depoimento
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // URL da imagem do autor
      rating: 5 // Classificação em estrelas (5 estrelas)
    },
    {
      author: 'Sarah Thompson', // Nome do autor do depoimento
      position: 'Artesã e Vendedora Online', // Cargo do autor
      content: 'Eles realmente entendem a realidade do pequeno empreendedor. As soluções são práticas e funcionam no dia a dia.', // Conteúdo do depoimento
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // URL da imagem do autor
      rating: 5 // Classificação em estrelas (5 estrelas)
    }
  ]

  return (
    <>
      <HeroSection /> {/* Exibindo a seção de introdução (herói) */}

      {/* Seção de Funcionalidades */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Criando Valor Financeiro Duradouro para Autônomos e MEIs" // Título da seção
            subtitle="Nossos serviços foram pensados para ajudar você, que trabalha por conta própria, a organizar suas finanças, aumentar sua rentabilidade e crescer de forma segura com planejamento e gestão especializada." // Subtítulo da seção
            centered={true} // Indicando que o título e o subtítulo devem ser centralizados
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Renderizando os cards das funcionalidades usando o map */}
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} // Usando o índice como chave para cada card
                icon={feature.icon} // Ícone da funcionalidade
                title={feature.title} // Título da funcionalidade
                description={feature.description} // Descrição da funcionalidade
                delayIndex={index} // Usando o índice para definir o delay da animação
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem da equipe financeira */}
            <div data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Equipe Financeira" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              {/* Título e Subtítulo sobre a empresa */}
              <SectionHeading 
                title="Solução Financeira Especializada"
                subtitle="Combinamos tecnologia com atendimento personalizado para entregar soluções que realmente funcionam no dia a dia de quem empreende sozinho."
                data_aos="fade-left" // Definindo animação para aparecer da esquerda
              />
              <div data-aos="fade-left" data-aos-delay="100">
                {/* Descrição sobre a empresa */}
                <p className="text-gray-600 mb-6">
                Na Independent Value, acreditamos que o sucesso financeiro do autônomo e do microempreendedor começa com uma base sólida: organização, planejamento e foco em resultados.
                Nossa equipe está pronta para ajudar você a separar suas finanças pessoais das do negócio, controlar melhor seu fluxo de caixa e construir um futuro financeiro mais seguro e próspero.
                </p>
                <p className="text-gray-600 mb-8">
                Seja para organizar seus recebimentos, planejar uma reserva de emergência ou começar a investir com mais confiança, nossa abordagem personalizada garante que suas metas estejam sempre no centro da solução.
                </p>
                {/* Link para a página de soluções */}
                <Link to="/solutions" className="btn btn-primary">
                  Descubra Nossa Abordagem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="O Que Nossos Clientes Dizem" // Título da seção
            subtitle="Temos orgulho de ter ajudado centenas de clientes a alcançar seus objetivos financeiros." // Subtítulo da seção
            centered={true} // Centralizando o título e o subtítulo
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Renderizando os cards dos depoimentos usando o map */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} // Usando o índice como chave para cada card
                author={testimonial.author} // Nome do autor do depoimento
                position={testimonial.position} // Cargo do autor
                content={testimonial.content} // Conteúdo do depoimento
                image={testimonial.image} // URL da imagem do autor
                rating={testimonial.rating} // Avaliação em estrelas
                delayIndex={index} // Usando o índice para definir o delay da animação
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA (Chamada para Ação) */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            {/* Título e Descrição da chamada para ação */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar o Seu Futuro Financeiro?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
               Dê o primeiro passo rumo ao sucesso financeiro como autônomo ou MEI, conectando-se com nossa equipe hoje mesmo.
            </p>
            {/* Link para a página de contato */}
            <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Comece Agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
