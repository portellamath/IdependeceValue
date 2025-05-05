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
      description: 'Mapas financeiros simples e personalizados, adaptados à realidade de quem é MEI ou autônomo.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Crescimento de Investimentos',
      description: 'Estratégias práticas e acessíveis para fazer seu dinheiro render, mesmo começando com pouco.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Gestão de Riscos',
      description: 'Dicas e soluções para proteger seu negócio e sua renda contra imprevistos.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Análise de Desempenho',
      description: 'Relatórios claros para acompanhar o crescimento da sua atividade e tomar decisões melhores.'
    }
  ]

  const testimonials = [
    {
      author: 'Jennifer Adams',
      position: 'Manicure e MEI',
      content: 'A Independent Value me ajudou a organizar minhas finanças e aumentar meu lucro como MEI em 28% em apenas um ano.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Michael Johnson',
      position: 'Designer Gráfico Autônomo',
      content: 'Como autônomo, eu estava sempre no vermelho. A Independent Value me ensinou a controlar meu fluxo de caixa e hoje meu negócio está saudável',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5
    },
    {
      author: 'Sarah Thompson',
      position: 'Artesã e Vendedora Online',
      content: 'Eles realmente entendem a realidade do pequeno empreendedor. As soluções são práticas e funcionam no dia a dia.',
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
            title="Criando Valor Financeiro Duradouro para Autônomos e MEIs"
            subtitle="Nossos serviços foram pensados para ajudar você, que trabalha por conta própria, a organizar suas finanças, aumentar sua rentabilidade e crescer de forma segura com planejamento e gestão especializada."
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
                title="Solução Financeira Especializada"
                subtitle="Combinamos tecnologia com atendimento personalizado para entregar soluções que realmente funcionam no dia a dia de quem empreende sozinho."
                data_aos="fade-left"
              />
              <div data-aos="fade-left" data-aos-delay="100">
                <p className="text-gray-600 mb-6">
                Na Independent Value, acreditamos que o sucesso financeiro do autônomo e do microempreendedor começa com uma base sólida: organização, planejamento e foco em resultados. Nossa equipe está pronta para ajudar você a separar suas finanças pessoais das do negócio, controlar melhor seu fluxo de caixa e construir um futuro financeiro mais seguro e próspero.
                </p>
                <p className="text-gray-600 mb-8">
                Seja para organizar seus recebimentos, planejar uma reserva de emergência ou começar a investir com mais confiança, nossa abordagem personalizada garante que suas metas estejam sempre no centro da solução.
                </p>
                <Link to="/solutions" className="btn btn-primary">
                Descubra Nossa Abordagem
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

      {/* CTA Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar o Seu Futuro Financeiro?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
            Dê o primeiro passo rumo ao sucesso financeiro como autônomo ou MEI, conectando-se com nossa equipe hoje mesmo.
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