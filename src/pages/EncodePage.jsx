import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './EncodePage.css'

function EncodePage() {
  return (
    <div className="encode-page">
      <Stars />
      
      <div className="encode-container">
        <h1>생성한 워터마크 발급받기</h1>
        
        <div className="certificate">
          <h2>🌟 LUMINA 보증서</h2>
          <div className="star-image">
            <img src="/images/encoded/encoded_LLL0001_star.png" alt="작가의 별" />
          </div>
          <div className="info">
            <p><strong>작가:</strong> demo_artist</p>
            <p><strong>코드:</strong> LLL0001</p>
            <p><strong>발급일:</strong> 2024</p>
          </div>
          <p className="disclaimer">이 보증서는 LUMINA AI 워터마크 기술로 보호됩니다.</p>
        </div>
        
        <div className="button-group">
          <a href="/images/encoded/encoded_LLL0001_star.png" download="LUMINA_certificate.png" className="btn btn-primary">
            보증서 다운로드
          </a>
          <Link to="/decode" className="btn btn-secondary">보증서 증명</Link>
          <Link to="/gallery/artist" className="btn btn-secondary">🖼️ 갤러리로 가기</Link>
          <Link to="/" className="btn btn-secondary">홈으로</Link>
        </div>
      </div>
    </div>
  )
}

export default EncodePage

