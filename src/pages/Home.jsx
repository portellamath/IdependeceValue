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
      description: 'Mapas financeiros abrangentes adaptados aos seus objetivos e circunstâncias específicos.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiTrendingUp size={24} />, // Ícone representando a funcionalidade de crescimento de investimentos
      title: 'Crescimento de Investimentos', // Título da funcionalidade
      description: 'Estratégias de investimento especializadas para maximizar retornos enquanto gerencia riscos.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiShield size={24} />, // Ícone representando a funcionalidade de gestão de riscos
      title: 'Gestão de Riscos', // Título da funcionalidade
      description: 'Identificação proativa e mitigação de riscos financeiros para proteger seus ativos.' // Descrição detalhada da funcionalidade
    },
    {
      icon: <FiBarChart2 size={24} />, // Ícone representando a funcionalidade de análise de desempenho
      title: 'Análise de Desempenho', // Título da funcionalidade
      description: 'Análises detalhadas e relatórios para acompanhar o progresso em direção aos seus objetivos financeiros.' // Descrição detalhada da funcionalidade
    }
  ]

  // Array de objetos que define os depoimentos de clientes
  const testimonials = [
    {
      author: 'Jennifer Adams', // Nome do autor do depoimento
      position: 'CEO, TechStart Inc.', // Cargo do autor
      content: 'A IV Value transformou nossas operações financeiras. A orientação estratégica deles nos ajudou a aumentar a rentabilidade em 28% em apenas um ano.', // Conteúdo do depoimento
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // URL da imagem do autor
      rating: 5 // Classificação em estrelas (5 estrelas)
    },
    {
      author: 'Michael Johnson', // Nome do autor do depoimento
      position: 'Proprietário de Pequeno Negócio', // Cargo do autor
      content: 'Como proprietário de um pequeno negócio, eu estava lutando com a gestão de fluxo de caixa. A IV Value forneceu estratégias simples, mas eficazes, que mudaram completamente o meu negócio.', // Conteúdo do depoimento
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // URL da imagem do autor
      rating: 5 // Classificação em estrelas (5 estrelas)
    },
    {
      author: 'Sarah Thompson', // Nome do autor do depoimento
      position: 'Diretora de Operações, GlobalTech', // Cargo do autor
      content: 'A abordagem personalizada deles para gestão financeira os diferencia. Eles não oferecem apenas soluções; eles dedicam tempo para entender as suas necessidades específicas.', // Conteúdo do depoimento
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
            title="Criando Valor Financeiro Duradouro" // Título da seção
            subtitle="Nossos serviços abrangentes são projetados para ajudá-lo a alcançar o sucesso financeiro por meio de planejamento estratégico e gestão especializada." // Subtítulo da seção
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
                title="Gestão Financeira Especializada Desde 2010"
                subtitle="Combinamos expertise da indústria com um serviço personalizado para entregar resultados excepcionais."
                data_aos="fade-left" // Definindo animação para aparecer da esquerda
              />
              <div data-aos="fade-left" data-aos-delay="100">
                {/* Descrição sobre a empresa */}
                <p className="text-gray-600 mb-6">
                  Na IV Value, acreditamos que o sucesso financeiro começa com uma base sólida de confiança e expertise. Nossa equipe de profissionais financeiros experientes traz décadas de experiência combinada para cada relacionamento com o cliente.
                </p>
                <p className="text-gray-600 mb-8">
                  Seja para planejar sua aposentadoria, gerenciar as finanças de um negócio ou otimizar seu portfólio de investimentos, nossa abordagem personalizada garante que suas necessidades e objetivos específicos sejam sempre nossa principal prioridade.
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
              Dê o primeiro passo rumo ao sucesso financeiro conectando-se com nossa equipe de especialistas hoje mesmo.
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
