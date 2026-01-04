import { Link, useNavigate } from 'react-router-dom'
import Stars from '../components/Stars'
import './DecodePage.css'

function DecodePage() {
  const navigate = useNavigate()

  const handleDecode = () => {
    navigate('/gallery')
  }

  return (
    <div className="decode-page">
      <Stars />
      
      <div className="decode-container">
        <h1>LUMINA - 초대권 확인</h1>
        
        <div className="decode-area">
          <div className="drop-zone">
            <img src="/images/encoded/encoded_LLL0001_star.png" alt="Demo Watermark" />
            <p>데모 워터마크 이미지</p>
          </div>
          <button onClick={handleDecode} className="btn btn-primary">워터마크 확인</button>
        </div>

        <div className="watermark-info">
          <p>LUMINA의 워터마크 기술은 AI를 활용하여 작가의 정보를 증명합니다.</p>
        </div>

        <Link to="/" className="back-link">홈으로</Link>
      </div>
    </div>
  )
}

export default DecodePage

