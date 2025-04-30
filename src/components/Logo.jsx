import { Link } from 'react-router-dom'

const Logo = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
  }

  return (
    <Link to="/" className={`flex items-center font-heading ${sizeClasses[size] || sizeClasses.default}`}>
      <div className="flex items-center justify-center w-10 h-10 mr-2 text-white bg-primary-500 rounded">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16H13" stroke="#36AE7C" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M7 10H25" stroke="#36AE7C" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M19 16H25" stroke="#36AE7C" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M7 22H25" stroke="#36AE7C" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M16 13L16 19" stroke="#36AE7C" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="font-bold text-primary-500">IV Value</span>
    </Link>
  )
}

export default Logo
