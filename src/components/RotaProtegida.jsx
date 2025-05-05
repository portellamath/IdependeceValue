import { Navigate } from 'react-router-dom'

const RotaProtegida = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default RotaProtegida