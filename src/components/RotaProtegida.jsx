// Importa o componente Navigate do React Router
// Ele é usado para redirecionar o usuário para outra rota/página
import { Navigate } from 'react-router-dom'

// Componente RotaProtegida
// Ele protege páginas que só podem ser acessadas por usuários logados
const RotaProtegida = ({ children }) => {
  // Verifica se o usuário está logado
  // Busca na localStorage a chave 'isLoggedIn' e confere se é igual a 'true'
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  // Se o usuário NÃO estiver logado, redireciona para a página de login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  // Se o usuário estiver logado, permite acessar o conteúdo protegido
  return children
}

// Exporta o componente para poder ser usado em outras partes do app
export default RotaProtegida
