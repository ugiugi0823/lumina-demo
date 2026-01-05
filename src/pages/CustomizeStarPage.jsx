import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './CustomizeStarPage.css'

function CustomizeStarPage() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
        setIsComplete(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInsertWatermark = () => {
    if (!uploadedImage) return
    
    setIsProcessing(true)
    
    // 워터마크 삽입 시뮬레이션 (2초 후 완료)
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/encoded/encoded_LLL0001_star.png'
    link.download = 'LUMINA_watermarked.png'
    link.click()
  }

  const handleReset = () => {
    setUploadedImage(null)
    setIsComplete(false)
  }

  return (
    <div className="customize-star-page">
      <Stars />
      
      <div className="customize-container">
        <h1>✨ 워터마크 삽입하기</h1>
        <p className="subtitle">작품에 LUMINA AI 워터마크를 삽입하여 작가님의 저작권을 보호하세요.</p>
        
        <div className="watermark-layout">
          {/* 업로드 영역 */}
          <div className="upload-section">
            <h3>1. 작품 업로드</h3>
            <label className="image-dropzone">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                hidden
              />
              {uploadedImage ? (
                <img src={uploadedImage} alt="업로드된 이미지" className="preview-image" />
              ) : (
                <div className="dropzone-content">
                  <span className="upload-icon">📤</span>
                  <p>클릭하여 이미지 선택</p>
                  <span className="hint">JPG, PNG, WebP</span>
                </div>
              )}
            </label>
          </div>

          {/* 화살표 */}
          <div className="arrow-section">
            <div className="process-arrow">
              {isProcessing ? (
                <span className="processing">⏳</span>
              ) : (
                <span>➡️</span>
              )}
            </div>
            <p className="process-text">
              {isProcessing ? 'AI 워터마크 삽입 중...' : 'Invisible Watermark'}
            </p>
          </div>

          {/* 결과 영역 */}
          <div className="result-section">
            <h3>2. 워터마크 삽입 결과</h3>
            <div className={`result-box ${isComplete ? 'complete' : ''}`}>
              {isComplete ? (
                <>
                  <img 
                    src="/images/encoded/encoded_LLL0001_star.png" 
                    alt="워터마크 삽입 결과" 
                    className="result-image"
                  />
                  <div className="watermark-badge">✅ 워터마크 삽입 완료</div>
                </>
              ) : (
                <div className="placeholder-content">
                  <span>🖼️</span>
                  <p>워터마크 삽입 결과가 여기에 표시됩니다</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 기술 설명 */}
        <div className="tech-info">
          <h4>🔐 LUMINA AI 워터마크 기술</h4>
          <p>딥러닝 기반 Invisible Watermark 기술로 눈에 보이지 않는 디지털 서명을 삽입합니다.</p>
          <p>YOLO 탐지 모델로 어떤 이미지에서도 작가 정보를 추출할 수 있습니다.</p>
        </div>

        {/* 버튼 */}
        <div className="button-container">
          {!isComplete ? (
            <button 
              onClick={handleInsertWatermark} 
              className="btn btn-primary"
              disabled={!uploadedImage || isProcessing}
            >
              {isProcessing ? '처리 중...' : '🔐 워터마크 삽입하기'}
            </button>
          ) : (
            <>
              <button onClick={handleDownload} className="btn btn-primary">
                ⬇️ 결과 다운로드
              </button>
              <button onClick={handleReset} className="btn btn-secondary">
                🔄 새 이미지 업로드
              </button>
            </>
          )}
        </div>

        <Link to="/gallery/artist" className="back-link">← 갤러리로 돌아가기</Link>
      </div>
    </div>
  )
}

export default CustomizeStarPage
