import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './Dashboard2Page.css'

function Dashboard2Page() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/encoded/encoded_LLL0001_star.png'
    link.download = 'LUMINA_invitation.png'
    link.click()
  }

  return (
    <div className="dashboard2-page">
      <Stars />
      
      {/* 메인 콘텐츠 */}
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>LUMINA가 선정한 이달의 작가</h1>
        </header>

        <main className="featured-artwork">
          <div className="artwork-image">
            <img src="/images/artworks/demo_8.webp" alt="이달의 작품" />
          </div>
          <div className="artwork-info">
            <h2>무사의 여명</h2>
            <p>붉은 태양 아래 서 있는 사무라이 수묵화</p>
          </div>
          <div className="watermark-section">
            <h3>작가의 작품 세계로 초대받으세요!</h3>
            <div className="watermark-image">
              <img src="/images/encoded/encoded_LLL0001_star.png" alt="워터마크" />
            </div>
          </div>
        </main>

        <div className="button-container">
          <button onClick={handleDownload} className="btn btn-primary">초대권 다운로드</button>
          <Link to="/decode" className="btn btn-secondary">초대권 확인</Link>
        </div>
        <p className="info-text">초대권 확인에서 이미지 업로드 시 작가의 프로필 및 작품 갤러리로 연결됩니다.</p>

        <div className="nav-links">
          <Link to="/" className="nav-link">🏠 홈으로</Link>
        </div>

        <footer className="dashboard-footer">
          <p>&copy; 2024 LUMINA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard2Page
