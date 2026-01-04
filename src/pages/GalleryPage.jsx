import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import artworksData from '../data/artworks.json'
import './GalleryPage.css'

function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const { artist, artworks } = artworksData

  useEffect(() => {
    // 볼트 도어 애니메이션
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)
  }

  return (
    <div className="gallery-page">
      <Stars />
      
      {/* Vault Door Animation */}
      {isLoading && (
        <div className="vault-door">
          <div className="door left"></div>
          <div className="door right"></div>
          <div className="vault-message">Accessing LUMINA Digital Vault...</div>
        </div>
      )}

      {/* Gallery Content */}
      <div className={`gallery-container ${isLoading ? 'hidden' : 'visible'}`}>
        <header className="gallery-header">
          <h1>{artist.username} 작가님의 갤러리</h1>
          <a 
            href={`https://www.instagram.com/${artist.instagram_id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <img src="/images/insta.png" alt="Instagram" />
            <span>@{artist.instagram_id}</span>
          </a>
          <Link to="/" className="back-link">홈으로</Link>
        </header>

        <div className="gallery-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-section">
              <h3>🎨 작가 기능</h3>
              <ul>
                <li><Link to="/customize-star">✨ 나만의 별 만들기</Link></li>
                <li><Link to="/encode">🔐 보증서 발급</Link></li>
                <li><Link to="/find-star">🌟 별 찾기</Link></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h3>👀 관객 기능</h3>
              <ul>
                <li><Link to="/dashboard2">🏆 이달의 작가</Link></li>
                <li><Link to="/decode">🎫 초대권 확인</Link></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h3>📊 작가 정보</h3>
              <p>작품 수: <span>{artworks.length}</span></p>
              <p>가입일: <span>2024</span></p>
            </div>
          </aside>

          {/* Gallery Grid */}
          <main className="gallery-main">
            <div className="gallery-grid">
              {artworks.map((artwork, index) => (
                <div 
                  key={artwork.id} 
                  className={`gallery-item ${index === 0 ? 'featured' : ''}`}
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <img src={`/${artwork.image_path}`} alt={artwork.title} />
                  <div className="artwork-info">
                    <h3>{artwork.title}</h3>
                    <p>{artwork.description}</p>
                    <p className="price">{formatPrice(artwork.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        <footer className="gallery-footer">
          <p>&copy; 2024 LUMINA. All rights reserved.</p>
        </footer>
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <div className="lightbox" onClick={() => setSelectedArtwork(null)}>
          <span className="close">&times;</span>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={`/${selectedArtwork.image_path}`} alt={selectedArtwork.title} />
            <div className="lightbox-caption">
              <h3>{selectedArtwork.title}</h3>
              <p>{selectedArtwork.description}</p>
              <p className="price">{formatPrice(selectedArtwork.price)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage

