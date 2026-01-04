import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './Dashboard1Page.css'

function Dashboard1Page() {
  return (
    <div className="dashboard1-page">
      <Stars />
      
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>LUMINA와 함께 빛나는 별이 되세요!</h1>
        </header>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>AI 디지털 보증서 발급</h2>
            <p>디지털 공격에도 강인한 워터마크 기반 보증서 발급</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 8A3 3 0 1 0 18 2a3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>소셜 미디어 공유</h2>
            <p>#LUMINA 해시태그로 더 많은 사람들에게 당신의 작품을 알리세요.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>함께 성장하는 커뮤니티</h2>
            <p>당신이 유명해질수록, 우리도 함께 성장합니다. 이 여정을 함께해요!</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>LUMINA와 함께 시작하세요</h2>
          <div className="button-container">
            <Link to="/encode" className="btn btn-secondary">보증서 발급</Link>
            <Link to="/decode" className="btn btn-primary">보증서 증명</Link>
          </div>
          <Link to="/" className="home-button">홈으로</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard1Page

