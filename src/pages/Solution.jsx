import { 
  FiPieChart, 
  FiTrendingUp, 
  FiDollarSign, 
  FiUser, 
  FiShield, 
  FiBarChart2, 
  FiFileText, 
  FiBriefcase 
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import SolutionCard from '../components/SolutionCard'

const Solution = () => {
  const solutions = [
    {
      icon: <FiPieChart size={24} />,
      title: 'Planejamento Financeiro',
      description: 'Mapas financeiros completos, adaptados aos seus objetivos, tolerância ao risco e horizonte de tempo.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Gestão de Investimentos',
      description: 'Gestão especializada da sua carteira de investimentos para maximizar retornos enquanto gerencia os riscos adequadamente.'
    },
    {
      icon: <FiDollarSign size={24} />,
      title: 'Análise de Custos',
      description: 'Análise detalhada de suas despesas para identificar oportunidades de redução de custos e melhoria da eficiência.'
    },
    {
      icon: <FiUser size={24} />,
      title: 'Consultoria Personalizada',
      description: 'Sessões de consultoria individual com nossos especialistas financeiros para abordar suas preocupações e perguntas específicas.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Gestão de Riscos',
      description: 'Identificação e mitigação de riscos financeiros por meio de seguros apropriados e planejamento de contingência.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Análise de Desempenho',
      description: 'Relatórios regulares de desempenho e análises para mantê-lo informado sobre o progresso financeiro.'
    },
    {
      icon: <FiFileText size={24} />,
      title: 'Planejamento Tributário',
      description: 'Planejamento tributário estratégico para minimizar sua carga tributária, garantindo total conformidade com as leis fiscais.'
    },
    {
      icon: <FiBriefcase size={24} />,
      title: 'Serviços Financeiros para Empresas',
      description: 'Serviços financeiros especializados para empresas, incluindo gestão de fluxo de caixa e estratégias de crescimento.'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Começamos com uma discussão abrangente para entender sua situação financeira, objetivos e desafios.'
    },
    {
      number: '02',
      title: 'Análise Financeira',
      description: 'Nossa equipe realiza uma análise minuciosa da sua posição financeira atual, identificando pontos fortes e áreas para melhoria.'
    },
    {
      number: '03',
      title: 'Desenvolvimento de Estratégia',
      description: 'Com base na nossa análise, desenvolvemos uma estratégia financeira personalizada para ajudá-lo a alcançar seus objetivos específicos.'
    },
    {
      number: '04',
      title: 'Implementação',
      description: 'Trabalhamos com você para implementar as estratégias recomendadas, fazendo ajustes conforme necessário para garantir os melhores resultados.'
    },
    {
      number: '05',
      title: 'Gestão Contínua',
      description: 'Nossa equipe fornece monitoramento contínuo e gestão do seu plano financeiro, ajustando conforme as circunstâncias mudam.'
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
            Nossas Soluções Financeiras
          </h1>
          <p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Soluções financeiras completas para ajudá-lo a alcançar seus objetivos financeiros.
          </p>
        </div>
      </section>

      {/* Seção de Soluções */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Soluções de Gestão Financeira"
            subtitle="Nosso portfólio de serviços é projetado para atender a todos os aspectos da sua vida financeira."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                delayIndex={index % 4}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Processo */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Nosso Processo"
            subtitle="Seguímos uma abordagem estruturada para garantir que nossas soluções financeiras sejam adaptadas às suas necessidades específicas."
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex mb-12 last:mb-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mr-6 relative">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-full font-bold text-xl">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-14 left-1/2 w-0.5 h-full -ml-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Por que nos escolher?" */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Por que escolher a IV Value?"
                subtitle="Combinamos experiência, personalização e tecnologia de ponta para entregar resultados financeiros superiores."
              />
              
              <div data-aos="fade-up">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Equipe Especializada</h3>
                  <p className="text-gray-600">
                    Nossa equipe é composta por profissionais financeiros certificados com décadas de experiência combinada em várias disciplinas financeiras.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Abordagem Personalizada</h3>
                  <p className="text-gray-600">
                    Reconhecemos que cada cliente é único, por isso desenvolvemos soluções personalizadas adaptadas às suas necessidades e objetivos específicos.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Processo Transparente</h3>
                  <p className="text-gray-600">
                    Acreditamos em total transparência em todas as nossas negociações, garantindo que você sempre entenda nossas recomendações e suas justificativas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-600">
                    Nosso compromisso com o seu sucesso financeiro não termina no planejamento inicial; fornecemos suporte contínuo e ajustes conforme suas circunstâncias mudam.
                  </p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Reunião de Equipe Financeira" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Histórias de Sucesso */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Histórias de Sucesso"
            subtitle="Leia sobre como nossas soluções financeiras ajudaram clientes a alcançar seus objetivos."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-6 rounded-lg shadow-card"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Estratégia de Crescimento Empresarial</h3>
              <p className="text-gray-600 mb-4">
                Uma empresa de tecnologia de médio porte nos procurou com problemas de fluxo de caixa, apesar do aumento da receita. Nossa equipe implementou uma estratégia financeira completa que melhorou o fluxo de caixa, reduziu despesas desnecessárias e criou um plano de crescimento sustentável. Em 18 meses, a empresa aumentou sua margem de lucro em 22% e expandiu para dois novos mercados.
              </p>
              <div className="text-sm text-gray-500">
                - TechGrowth Solutions, Setor de Tecnologia
              </div>
            </div>
            
            <div 
              className="bg-white p-6 rounded-lg shadow-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Planejamento para Aposentadoria</h3>
              <p className="text-gray-600 mb-4">
                Um casal na faixa dos 50 anos estava preocupado com a preparação para a aposentadoria. Desenvolvemos uma estratégia personalizada de aposentadoria que otimizou seus investimentos, melhorou a eficiência fiscal e criou um roteiro claro para a aposentadoria. Com nossas recomendações, conseguiram se aposentar três anos antes do planejado, com a segurança financeira desejada.
              </p>
              <div className="text-sm text-gray-500">
                - Clientes Privados, Planejamento de Aposentadoria
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar Seu Futuro Financeiro?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Entre em contato conosco hoje para discutir como nossas soluções financeiras podem ajudá-lo a alcançar seus objetivos.
            </p>
            <a href="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Agendar uma Consultoria
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution