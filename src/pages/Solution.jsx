// Importando ícones do pacote react-icons/fi (Feather Icons estilizados)
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

// Componentes reutilizáveis do projeto
import SectionHeading from '../components/SectionHeading'
import SolutionCard from '../components/SolutionCard'

// Componente principal da página de Soluções
const Solution = () => {
  // Lista de soluções oferecidas pela empresa
  const solutions = [
    {
      icon: <FiPieChart size={24} />,
      title: 'Planejamento Financeiro',
      description: 'Organizamos suas finanças com um plano claro, adaptado aos seus objetivos e realidade como MEI ou autônomo.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Gestão de Investimentos',
      description: 'Indicamos as melhores opções para fazer seu dinheiro render mais e proteger seu futuro, sem complicação.'
    },
    {
      icon: <FiDollarSign size={24} />,
      title: 'Análise de Custos',
      description: 'Descubra onde está perdendo dinheiro e como reduzir despesas para aumentar seu lucro.'
    },
    {
      icon: <FiUser size={24} />,
      title: 'Consultoria Personalizada',
      description: 'Sessões individuais com nossos especialistas para tirar dúvidas e resolver desafios financeiros específicos do seu negócio.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Gestão de Riscos',
      description: 'Proteja seu negócio e sua renda contra imprevistos com um plano financeiro seguro.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Análise de Desempenho',
      description: 'Relatórios simples e claros para você acompanhar como suas finanças estão evoluindo mês a mês.'
    },
    {
      icon: <FiFileText size={24} />,
      title: 'Planejamento Tributário',
      description: 'Pague menos impostos de forma legal e sem dor de cabeça, com orientações específicas para MEIs e autônomos.'
    },
    {
      icon: <FiBriefcase size={24} />,
      title: 'Serviços para Pequenos Negócios',
      description: 'Gestão de fluxo de caixa, estratégias para crescer e estruturação financeira para você sair da informalidade e ganhar mercado.'
    }  
  ]

  // Passos do processo de atendimento ao cliente
  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos sua situação, seus objetivos e os desafios do seu negócio.'
    },
    {
      number: '02',
      title: 'Análise Financeira',
      description: 'Mapeamos sua real situação financeira e identificamos onde você pode melhorar.'
    },
    {
      number: '03',
      title: 'Desenvolvimento de Estratégia',
      description: 'Criamos um plano financeiro sob medida para você crescer com segurança.'
    },
    {
      number: '04',
      title: 'Implementação',
      description: 'Te acompanhamos na aplicação das soluções, passo a passo.'
    },
    {
      number: '05',
      title: 'Gestão Contínua',
      description: 'Seguimos juntos, ajustando o plano conforme seu negócio evolui.'
    }
  ]

  return (
    <>
      {/* Seção de Abertura com destaque */}
      <section className="bg-primary-500 text-white py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Nossas Soluções Financeiras
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Soluções completas para MEIs e Autônomos que querem crescer com segurança e transformar suas finanças.
          </p>
        </div>
      </section>

      {/* Seção de Cartões com cada solução */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Soluções de Gestão Financeira"
            subtitle="Cuidamos de todos os aspectos da sua vida financeira para que você possa focar no que faz de melhor: tocar o seu negócio."
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

      {/* Seção com etapas do processo de atendimento */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Nosso Processo"
            subtitle="Nosso processo é simples, personalizado e pensado para a realidade de quem empreende sozinho ou com uma pequena equipe."
            centered={true}
          />
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex mb-12 last:mb-0" data-aos="fade-up" data-aos-delay={index * 100}>
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

      {/* Seção explicando os diferenciais da empresa */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Por Que Escolher a Independent Value?"
                subtitle="Combinamos experiência, personalização e tecnologia de ponta para entregar resultados financeiros superiores."
              />
              <div data-aos="fade-up">
                {/* Destaques dos diferenciais */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Equipe Especializada</h3>
                  <p className="text-gray-600">Consultores experientes que entendem a realidade do pequeno empreendedor brasileiro.</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Soluções Personalizadas</h3>
                  <p className="text-gray-600">Cada MEI e autônomo é único. Por isso, criamos planos sob medida para sua realidade.</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Transparência Total</h3>
                  <p className="text-gray-600">Explicamos tudo de forma simples e sem "economês".</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-500 mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-600">Você não fica sozinho: nosso time está sempre disponível para ajudar.</p>
                </div>
              </div>
            </div>

            {/* Imagem ilustrativa à direita */}
            <div data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Financial Team Meeting" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção com histórias de sucesso de clientes */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Histórias de Sucesso"
            subtitle="Leia sobre como nossas soluções financeiras ajudaram clientes a alcançar seus objetivos."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exemplo 1 */}
            <div className="bg-white p-6 rounded-lg shadow-card" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Estratégia de Crescimento Empresarial</h3>
              <p className="text-gray-600 mb-4">
                Estava com problemas de fluxo de caixa. Em 18 meses, com nossa estratégia, aumentou o lucro em 22%.
              </p>
              <div className="text-sm text-gray-500">Microempresa de Tecnologia</div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-white p-6 rounded-lg shadow-card" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Planejamento para Aposentadoria</h3>
              <p className="text-gray-600 mb-4">
                Com nosso plano, conseguiram se aposentar 3 anos antes do previsto com tranquilidade financeira.
              </p>
              <div className="text-sm text-gray-500">Casal Autônomo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção final de chamada para ação */}
      <section className="section bg-primary-500 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar Seu Futuro Financeiro?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Agende uma conversa gratuita com nossos especialistas e descubra como podemos ajudar você a crescer com segurança.
            </p>
            <a href="/contato" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Agendar uma Consultoria
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution
