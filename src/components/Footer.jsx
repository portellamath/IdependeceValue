import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-gray-400 mt-4">
              Transforming financial futures with expert management solutions since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Investment Management
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Cost Analysis
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Personalized Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Finance Street, Suite 200<br />
                New York, NY 10001
              </li>
              <li className="text-gray-400">
                <a href="tel:+12125557890" className="hover:text-secondary-500 transition-colors">+1 (212) 555-7890</a>
              </li>
              <li className="text-gray-400">
                <a href="mailto:info@ivvalue.com" className="hover:text-secondary-500 transition-colors">info@ivvalue.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {year} IV Value Financial Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer