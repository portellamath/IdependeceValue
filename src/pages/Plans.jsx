import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import PlanCard from '../components/PlanCard'

const Plans = () => {
  const plans = [
    {
      title: 'Plano Essencial',
      price: '199',
      period: 'mês',
      description: 'Perfeito para indivíduos e pequenas empresas que estão começando.',
      features: [
        'Avaliação financeira básica',
        'Relatórios financeiros mensais',
        'Suporte por e-mail',
        'Revisão anual de portfólio',
        'Planejamento tributário básico'
      ],
      isPopular: false
    },
    {
      title: 'Plano Premium',
      price: '499',
      period: 'mês',
      description: 'Nosso plano mais popular para empresas em crescimento e investidores sérios.',
      features: [
        'Avaliação financeira completa',
        'Relatórios financeiros quinzenais',
        'Suporte prioritário por e-mail e telefone',
        'Revisões trimestrais de portfólio',
        'Estratégias fiscais avançadas',
        'Planejamento de aposentadoria',
        'Consultor financeiro dedicado'
      ],
      isPopular: true
    },
    {
      title: 'Plano Corporativo',
      price: '999',
      period: 'mês',
      description: 'Gestão financeira de nível empresarial para organizações estabelecidas.',
      features: [
        'Estratégia financeira corporativa',
        'Relatórios completos semanais',
        'Suporte prioritário 24/7',
        'Revisões mensais detalhadas',
        'Otimização fiscal personalizada',
        'Planejamento sucessório',
        'Equipe de consultores dedicados',
        'Soluções de gestão de riscos',
        'Consultoria para fusões e aquisições'
      ],
      isPopular: false
    }
  ]

  const customPlans = [
    {
      title: 'Planejamento Financeiro',
      description: 'Planejamento financeiro completo adaptado aos seus objetivos e circunstâncias específicas.',
      link: '/contact'
    },
    {
      title: 'Gestão de Investimentos',
      description: 'Gestão profissional do seu portfólio de investimentos para maximizar retornos e minimizar riscos.',
      link: '/contact'
    },
    {
      title: 'Planejamento de Aposentadoria',
      description: 'Planejamento estratégico para garantir uma aposentadoria confortável e segura.',
      link: '/contact'
    },
    {
      title: 'Consultoria Empresarial',
      description: 'Consultoria financeira especializada para empresas de todos os tamanhos, desde startups até grandes corporações.',
      link: '/contact'
    }
  ]

  return (
    <>
      {/* Seção de Cabeçalho */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Planos de Gestão Financeira
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Escolha o plano perfeito para atingir seus objetivos financeiros e transformar seu futuro financeiro.
          </p>
        </div>
      </section>

      {/* Seção de Planos */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Nossos Planos de Serviço"
            subtitle="Selecione o plano que melhor atende às suas necessidades e objetivos financeiros."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard 
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                delayIndex={index}
              />
            ))}
          </div>
          
          <div 
            className="mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-gray-600 mb-6">
              Não tem certeza de qual plano é o ideal para você? Entre em contato para uma recomendação personalizada.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Obter Recomendação Personalizada
            </Link>
          </div>
        </div>
      </section>

      {/* Soluções Personalizadas */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Serviços Financeiros Especializados"
            subtitle="Além dos nossos planos padrão, oferecemos serviços especializados para atender a necessidades financeiras específicas."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <Link 
                  to={plan.link} 
                  className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium"
                >
                  Saiba Mais <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Frequentes */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para perguntas comuns sobre nossos planos de gestão financeira."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div 
              className="mb-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Como saber qual plano é ideal para mim?</h3>
              <p className="text-gray-600">
                O melhor plano depende da sua situação financeira específica, objetivos e complexidade das suas necessidades financeiras. Nosso Plano Essencial é ótimo para indivíduos que estão começando sua jornada financeira, enquanto nossos Planos Premium e Corporativo oferecem serviços mais completos para quem possui situações financeiras mais complexas.
              </p>
            </div>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso atualizar ou reduzir meu plano depois?</h3>
              <p className="text-gray-600">
                Claro! Você pode atualizar ou reduzir seu plano a qualquer momento. Sabemos que as necessidades financeiras mudam, e facilitamos o ajuste dos serviços de acordo.
              </p>
            </div>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">É necessário um compromisso de longo prazo?</h3>
              <p className="text-gray-600">
                Não, não é necessário um compromisso de longo prazo. Todos os nossos planos são cobrados mensalmente, e você pode cancelar a qualquer momento. No entanto, a gestão financeira geralmente gera melhores resultados quando abordada como uma estratégia de longo prazo.
              </p>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Vocês oferecem planos personalizados?</h3>
              <p className="text-gray-600">
                Sim, podemos criar planos de gestão financeira personalizados adaptados às suas necessidades específicas. Entre em contato com nossa equipe para discutir seus requisitos e criaremos uma solução personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo para atingir seus objetivos financeiros com a IV Value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
                Contate-nos Hoje
              </Link>
              <Link to="/solutions" className="btn bg-white text-primary-500 hover:bg-gray-100">
                Explore Nossas Soluções
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Plans
