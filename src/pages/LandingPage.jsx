import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import Header from '../components/Header'
import './LandingPage.css'

const artworks = [
  { id: 1, title: "희망을 향해", artist: "Demo Artist", price: "₩500,000", image: "/images/artworks/demo_1.webp" },
  { id: 2, title: "고요한 정원", artist: "Demo Artist", price: "₩800,000", image: "/images/artworks/demo_2.webp" },
  { id: 3, title: "눈밭의 친구들", artist: "Demo Artist", price: "₩900,000", image: "/images/artworks/demo_3.webp" },
  { id: 4, title: "날개짓", artist: "Demo Artist", price: "₩700,000", image: "/images/artworks/demo_4.webp" },
  { id: 5, title: "동생의 초상", artist: "Demo Artist", price: "₩500,000", image: "/images/artworks/demo_5.webp" },
  { id: 6, title: "자연의 숨결", artist: "Demo Artist", price: "₩600,000", image: "/images/artworks/demo_6.webp" },
  { id: 7, title: "빛과 그림자", artist: "Demo Artist", price: "₩750,000", image: "/images/artworks/demo_7.webp" },
  { id: 8, title: "도시의 밤", artist: "Demo Artist", price: "₩850,000", image: "/images/artworks/demo_8.webp" },
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-buttons">
            <Link to="/gallery" className="cta-button">작가로 시작하기</Link>
            <Link to="/dashboard2" className="cta-button">관객으로 시작하기</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">LUMINA: 당신의 예술을 우주로</h2>
          
          <div className="feature-group">
            <h3 className="feature-group-title">당신이 아티스트라면!</h3>
            
            <div className="feature">
              <div className="feature-media">
                <img src="/images/make_star.png" alt="나만의 별 만들기" />
              </div>
              <div className="feature-content">
                <h4>나만의 별 만들기</h4>
                <p>당신의 예술 세계를 대표하는 유니크한 별을 창조하세요. 색상과 모양을 선택하여 작품의 아이덴티티를 표현하고, 당신만의 예술 은하계를 펼쳐보세요.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-media">
                <img src="/images/insta.png" alt="보증서 발급" />
              </div>
              <div className="feature-content">
                <h4>보증서 발급 & SNS 홍보</h4>
                <p>LUMINA는 작가님의 고유한 정보를 담은 별 이미지와 보증서를 발급해 드립니다.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-media">
                <img src="/images/gallery.png" alt="온라인 갤러리" />
              </div>
              <div className="feature-content">
                <h4>온라인 갤러리 & 굿즈 제작</h4>
                <p>당신만의 온라인 갤러리를 만들고 작품을 전시하세요. 더 나아가 자신의 작품을 활용한 독특한 굿즈를 제작하여 팬들과 특별한 인연을 만들어보세요.</p>
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

