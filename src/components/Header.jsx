import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src="/images/icon_180x180.png" alt="LUMINA 로고" className="logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header

