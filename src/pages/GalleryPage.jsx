import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import artworksData from '../data/artworks.json'
import './GalleryPage.css'

function GalleryPage({ role = 'artist' }) {
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

      {/* 사이드바 - role에 따라 다른 메뉴 */}
      <aside className="sidebar">
        {role === 'artist' ? (
          <>
            <div className="sidebar-section">
              <h3>작가 메뉴</h3>
              <ul>
                <li><Link to="/customize-star">✨ 나만의 별 만들기</Link></li>
                <li><Link to="/encode">🔐 보증서 발급</Link></li>
                <li><Link to="/find-star">🌟 별 찾기</Link></li>
                <li><Link to="/decode">📋 보증서 확인</Link></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h3>작가 정보</h3>
              <p>작품 수 <span>{artworks.length}</span></p>
              <p>가입일 <span>2024</span></p>
            </div>
          </>
        ) : (
          <>
            <div className="sidebar-section">
              <h3>관객 메뉴</h3>
              <ul>
                <li><Link to="/dashboard2">🏆 이달의 작가</Link></li>
                <li><Link to="/decode">🎫 초대권 확인</Link></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h3>서비스 안내</h3>
              <p>초대권을 다운로드하고</p>
              <p>초대권 확인에서 업로드하면</p>
              <p>작가 갤러리로 이동합니다</p>
            </div>
          </>
        )}
        <div className="sidebar-section">
          <ul>
            <li><Link to="/">🏠 홈으로</Link></li>
          </ul>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <div className={`gallery-container ${isLoading ? 'hidden' : 'visible'}`}>
        <header className="gallery-header">
          <h1>{artist.username} 작가님의 갤러리</h1>
          <a 
            href={`https://www.instagram.com/${artist.instagram_id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@{artist.instagram_id}</span>
          </a>
        </header>

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
