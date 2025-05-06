// Importa o componente Navigate do React Router
// Ele permite redirecionar o usuário para outra página
import { Navigate } from 'react-router-dom'

// Componente ProtectedRoute
// Serve para proteger rotas que só usuários autenticados podem acessar
const ProtectedRoute = ({ children }) => {
  // Verifica se o usuário está autenticado
  // Busca na localStorage a chave 'isAuthenticated' e verifica se é 'true'
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  // Se NÃO estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Se estiver autenticado, permite acessar o conteúdo protegido
  return children
}

export default ProtectedRoute
