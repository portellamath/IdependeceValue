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
      title: 'Planejamento Financeiro Estratégico',
      description: 'Mapas financeiros abrangentes adaptados aos seus objetivos e circunstâncias específicos.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Crescimento de Investimentos',
      description: 'Estratégias de investimento especializadas para maximizar retornos enquanto gerencia riscos.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Gestão de Riscos',
      description: 'Identificação proativa e mitigação de riscos financeiros para proteger seus ativos.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Análise de Desempenho',
      description: 'Análises detalhadas e relatórios para acompanhar o progresso em direção aos seus objetivos financeiros.'
    }
  ]

  const testimonials = [
    {
      author: 'Jennifer Adams',
      position: 'CEO, TechStart Inc.',
      content: 'A IV Value transformou nossas operações financeiras. A orientação estratégica deles nos ajudou a aumentar a rentabilidade em 28% em apenas um ano.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Michael Johnson',
      position: 'Proprietário de Pequeno Negócio',
      content: 'Como proprietário de um pequeno negócio, eu estava lutando com a gestão de fluxo de caixa. A IV Value forneceu estratégias simples, mas eficazes, que mudaram completamente o meu negócio.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Sarah Thompson',
      position: 'Diretora de Operações, GlobalTech',
      content: 'A abordagem personalizada deles para gestão financeira os diferencia. Eles não oferecem apenas soluções; eles dedicam tempo para entender as suas necessidades específicas.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    }
  ]

  return (
    <>
      <HeroSection />

      {/* Seção de Funcionalidades */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Criando Valor Financeiro Duradouro"
            subtitle="Nossos serviços abrangentes são projetados para ajudá-lo a alcançar o sucesso financeiro por meio de planejamento estratégico e gestão especializada."
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

      {/* Seção Sobre */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Equipe Financeira" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div>
              <SectionHeading 
                title="Gestão Financeira Especializada Desde 2010"
                subtitle="Combinamos expertise da indústria com um serviço personalizado para entregar resultados excepcionais."
                data_aos="fade-left"
              />
              <div data-aos="fade-left" data-aos-delay="100">
                <p className="text-gray-600 mb-6">
                  Na IV Value, acreditamos que o sucesso financeiro começa com uma base sólida de confiança e expertise. Nossa equipe de profissionais financeiros experientes traz décadas de experiência combinada para cada relacionamento com o cliente.
                </p>
                <p className="text-gray-600 mb-8">
                  Seja para planejar sua aposentadoria, gerenciar as finanças de um negócio ou otimizar seu portfólio de investimentos, nossa abordagem personalizada garante que suas necessidades e objetivos específicos sejam sempre nossa principal prioridade.
                </p>
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
            title="O Que Nossos Clientes Dizem"
            subtitle="Temos orgulho de ter ajudado centenas de clientes a alcançar seus objetivos financeiros."
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

      {/* Seção de CTA (Chamada para Ação) */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar o Seu Futuro Financeiro?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo rumo ao sucesso financeiro conectando-se com nossa equipe de especialistas hoje mesmo.
            </p>
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