import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './FindStarPage.css'

function FindStarPage() {
  return (
    <div className="find-star-page">
      <Stars />
      
      <div className="find-star-container">
        <h1>🌟 나의 별 찾기</h1>
        <p className="subtitle">LUMINA 우주에서 당신만의 별을 찾아보세요</p>
        
        <div className="star-display">
          <img src="/images/encoded/encoded_LLL0001_star.png" alt="나의 별" />
        </div>
        
        <p className="artist-name">demo_artist 작가님의 별</p>
        
        <div className="button-container">
          <Link to="/gallery" className="btn btn-primary">갤러리로 이동</Link>
          <Link to="/" className="btn btn-secondary">홈으로</Link>
        </div>
      </div>
    </div>
  )
}

export default FindStarPage

