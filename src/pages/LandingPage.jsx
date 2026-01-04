import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import Header from '../components/Header'
import './LandingPage.css'

const artworks = [
  { id: 1, title: "은빛 물결", artist: "Demo Artist", price: "₩850,000", image: "/images/artworks/demo_1.webp" },
  { id: 2, title: "꽃피는 사랑", artist: "Demo Artist", price: "₩750,000", image: "/images/artworks/demo_2.webp" },
  { id: 3, title: "목욕시간", artist: "Demo Artist", price: "₩600,000", image: "/images/artworks/demo_3.webp" },
  { id: 4, title: "붉은 노을의 후지산", artist: "Demo Artist", price: "₩900,000", image: "/images/artworks/demo_4.webp" },
  { id: 5, title: "원시의 사냥꾼", artist: "Demo Artist", price: "₩700,000", image: "/images/artworks/demo_5.webp" },
  { id: 6, title: "청색 초상", artist: "Demo Artist", price: "₩800,000", image: "/images/artworks/demo_6.webp" },
  { id: 7, title: "구름 사이 여정", artist: "Demo Artist", price: "₩950,000", image: "/images/artworks/demo_7.webp" },
  { id: 8, title: "무사의 여명", artist: "Demo Artist", price: "₩1,200,000", image: "/images/artworks/demo_8.webp" },
]

function LandingPage() {
  return (
    <div className="landing-page">
      <Stars />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">당신의 예술, 우주의 빛이 되다</h1>
          <p className="hero-subtitle">LUMINA와 함께 무한한 은하계로 도약하세요</p>
          <p className="demo-notice">
            본 서비스는 사업 종료로 데모 페이지로 운영됩니다<br />
            <span className="demo-period">2023.08.01 – 2025.03.01</span>
          </p>
          <div className="cta-buttons">
            <Link to="/gallery/artist" className="cta-button">작가로 시작하기</Link>
            <Link to="/dashboard2" className="cta-button">관객으로 시작하기</Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">우리가 해결하고자 한 문제</h2>
          
          <div className="problem-cards">
            <div className="problem-card">
              <div className="problem-icon">😔</div>
              <h3>작가 보증의 부재</h3>
              <p>청년 예술가들이 자신의 작품을 보증할 수 있는 신뢰할 수 있는 수단이 없었습니다.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💻</div>
              <h3>포트폴리오 구축의 어려움</h3>
              <p>나만의 갤러리 웹사이트, 포트폴리오 사이트를 만드는 것이 기술적으로 어려웠습니다.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📝</div>
              <h3>홍보용 해시태그 고민</h3>
              <p>인스타그램 홍보용 해시태그를 매번 생성하는 것이 시간이 오래 걸리고 어려웠습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">LUMINA의 솔루션</h2>
          
          <div className="feature-group">
            <div className="feature">
              <div className="feature-icon-box">🔐</div>
              <div className="feature-content">
                <h4>Invisible 워터마크 & YOLO 탐지</h4>
                <p>자체 개발한 Invisible 워터마크 모델과 YOLO 탐지 기술로 작가 보증 체계를 구축했습니다. 작품에 눈에 보이지 않는 디지털 서명을 삽입하여 진위를 확인할 수 있습니다.</p>
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-box">🖼️</div>
              <div className="feature-content">
                <h4>나만의 갤러리 구축</h4>
                <p>코딩 없이도 누구나 쉽게 자신만의 온라인 갤러리를 만들 수 있습니다. 전문적인 포트폴리오 웹사이트를 몇 분 안에 완성할 수 있습니다.</p>
                <span className="tech-tag">No-Code</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-box">🤖</div>
              <div className="feature-content">
                <h4>AI 자동 캡션 생성</h4>
                <p>GPT API를 활용하여 작품 이미지를 분석하고 자동으로 캡션을 생성합니다. 작가는 작품에만 집중할 수 있습니다.</p>
                <span className="tech-tag">GPT-4 Vision</span>
                <span className="tech-tag">Image Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="gallery-preview">
        <div className="container">
          <h2 className="section-title">인기 작품 구경하기</h2>
          <div className="gallery-track">
            {artworks.map(artwork => (
              <div key={artwork.id} className="artwork-card">
                <div className="artwork-image">
                  <img src={artwork.image} alt={artwork.title} />
                </div>
                <h3>{artwork.title}</h3>
                <p className="artist">{artwork.artist}</p>
                <p className="price">{artwork.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2024 LUMINA. 무한한 가능성을 향해 함께 나아갑니다.</p>
          <Link to="/dashboard1" className="cta-button">LUMINA 시작하기</Link>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

