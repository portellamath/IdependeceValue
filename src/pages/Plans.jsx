// Importações de bibliotecas e componentes externos
import { FiArrowRight } from 'react-icons/fi' // Ícone de seta
import { Link } from 'react-router-dom' // Navegação interna
import SectionHeading from '../components/SectionHeading' // Título e subtítulo de seção
import PlanCard from '../components/PlanCard' // Card individual de plano

// Componente principal
const Plans = () => {
  // Planos fixos oferecidos
  const plans = [
    {
      title: 'Plano Gratuito',
      price: '0,00',
      period: 'mês',
      description: 'Perfeito para quem está dando os primeiros passos na gestão financeira.',
      features: [
        'Diagnóstico financeiro inicial gratuito',
        'Modelo simples de controle de fluxo de caixa (planilha)',
        'Newsletter com dicas financeiras exclusivas',
        'Acesso a lives e conteúdos educativos',
        'Suporte por e-mail (básico)'
      ],
      isPopular: false
    },
    {
      title: 'Plano Pro',
      price: '19,99',
      period: 'mês',
      description: 'Ideal para MEIs e autônomos que querem melhorar resultados e se profissionalizar',
      features: [
        'Avaliação financeira personalizada',
        'Relatórios mensais com análise dos resultados',
        'Ferramentas online para controle financeiro',
        'Suporte por e-mail e WhatsApp',
        'Revisão trimestral com consultor',
        'Dicas e orientações fiscais para MEI/autônomos',
        'Acesso a workshops exclusivos'
      ],
      isPopular: true // Este plano será destacado
    },
    {
      title: 'Plano Premium',
      price: '49,99',
      period: 'mês',
      description: 'Para quem quer acompanhamento próximo, planejamento avançado e suporte total.',
      features: [
        'Gestão financeira completa e personalizada',
        'Relatórios quinzenais detalhados',
        'Consultor financeiro dedicado',
        'Suporte prioritário por WhatsApp e telefone',
        'Planejamento tributário avançado',
        'Estratégias de investimento personalizadas',
        'Planejamento para aposentadoria e proteção patrimonial',
        'Participação em mentorias com especialistas'
      ],
      isPopular: false
    }
  ]

  // Soluções personalizadas além dos planos fixos
  const customPlans = [
    {
      title: 'Planejamento Financeiro',
      description: 'Planejamento financeiro completo adaptado aos seus objetivos e circunstâncias específicas.',
      link: '/contact'
    },
    {
      title: 'Gestão de Investimentos',
      description: 'Orientação para começar a investir com segurança, mesmo como MEI ou autônomo.',
      link: '/contact'
    },
    {
      title: 'Organização Financeira para MEIs e Autônomos',
      description: 'Planejamento financeiro completo adaptado à sua atividade e ao seu faturamento.',
      link: '/contact'
    },
    {
      title: 'Consultoria Empresarial',
      description: 'Para pequenos negócios que estão crescendo e querem estruturar sua gestão financeira.',
      link: '/contact'
    }
  ]

  return (
    <>
      {/* Seção de Cabeçalho */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Planos de Gestão Financeira
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Escolha o plano ideal para organizar suas finanças, aumentar seus lucros e transformar o futuro do seu negócio como MEI ou autônomo.
          </p>
        </div>
      </section>

      {/* Seção de Planos */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Nossos Planos de Serviço"
            subtitle="Escolha o plano ideal para organizar suas finanças, aumentar seus lucros e transformar o futuro do seu negócio como MEI ou autônomo."
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
          
          {/* Chamada para ação personalizada */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-gray-600 mb-6">
              Não tem certeza de qual plano é o ideal para você? Entre em contato para uma recomendação personalizada.
            </p>
            <Link to="/cadastro" className="btn btn-primary">
              Obter Recomendação Personalizada
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Soluções Personalizadas */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Serviços Financeiros Especializados"
            subtitle="Além dos nossos planos, oferecemos soluções sob medida para quem quer ir além."
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
                <Link to="/solucoes" className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium">
                  Leia Mais <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Frequentes (FAQ) */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para perguntas comuns sobre nossos planos de gestão financeira."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Como saber qual plano é ideal para mim?</h3>
              <p className="text-gray-600">
                O plano ideal depende do seu faturamento, dos seus objetivos e da complexidade da sua atividade. O Plano Gratuito é ótimo para quem está começando, enquanto o Premium é mais completo para quem quer crescer com apoio contínuo.
              </p>
            </div>
            <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Posso atualizar ou reduzir meu plano depois?</h3>
              <p className="text-gray-600">
                Sim! Você pode mudar de plano a qualquer momento. Sabemos que o seu negócio evolui, e nossos serviços acompanham essa mudança.
              </p>
            </div>
            <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">É necessário um compromisso de longo prazo?</h3>
              <p className="text-gray-600">
                Não. Nossos planos são cobrados mensalmente, e você pode cancelar quando quiser. Mas, claro, resultados financeiros sólidos surgem com acompanhamento contínuo.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Vocês oferecem planos personalizados?</h3>
              <p className="text-gray-600">
                Sim! Criamos planos sob medida para a sua realidade como MEI ou autônomo. Fale com nossa equipe e vamos montar a solução ideal para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final - Chamada para ação */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Dê o primeiro passo para organizar suas finanças e crescer com segurança com a Independent Value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
                Contate-nos Hoje
              </Link>
              <Link to="/solucoes" className="btn bg-white text-primary-500 hover:bg-gray-100">
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
