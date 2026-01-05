import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './AutoCaptionPage.css'

function AutoCaptionPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const demoImages = [
    { id: 1, src: '/images/artworks/demo_1.webp', title: '은빛 물결' },
    { id: 2, src: '/images/artworks/demo_2.webp', title: '꽃피는 사랑' },
    { id: 3, src: '/images/artworks/demo_3.webp', title: '목욕시간' },
  ]

  const demoCaptions = {
    1: `🐟 은빛 물결 속 생명의 춤

펜 하나로 담아낸 물고기 떼의 역동적인 움직임. 
잉크가 종이 위에서 살아 숨 쉬는 순간.

#펜드로잉 #물고기그림 #잉크아트 #동양화 #수묵화 #현대미술 #아트워크 #드로잉 #일러스트 #artoftheday`,
    2: `💐 꽃으로 피어나는 사랑

두 사람의 실루엣이 꽃으로 물들어가는 순간.
사랑은 언제나 아름다운 꽃을 피웁니다.

#수채화 #꽃그림 #사랑 #커플아트 #일러스트레이션 #감성그림 #watercolor #loveillustration #artlover`,
    3: `🛁 노란 오리들의 목욕시간

분홍빛 욕조 속 귀여운 친구들.
일상의 작은 행복을 담은 유화 작품입니다.

#유화 #오리그림 #귀여운그림 #일상드로잉 #oilpainting #cuteillustration #artdaily`
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image)
    setCaption('')
  }

  const handleGenerate = () => {
    if (!selectedImage) return
    
    setIsGenerating(true)
    // 타이핑 효과 시뮬레이션
    const fullCaption = demoCaptions[selectedImage.id]
    let index = 0
    setCaption('')
    
    const typeInterval = setInterval(() => {
      if (index < fullCaption.length) {
        setCaption(prev => prev + fullCaption[index])
        index++
      } else {
        clearInterval(typeInterval)
        setIsGenerating(false)
      }
    }, 30)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(caption)
    alert('캡션이 클립보드에 복사되었습니다!')
  }

  return (
    <div className="auto-caption-page">
      <Stars />
      
      <div className="caption-container">
        <h1>🤖 AI 자동 캡션 생성</h1>
        <p className="subtitle">GPT-4 Vision API를 활용하여 작품에 맞는 캡션과 해시태그를 자동 생성합니다</p>

        <div className="caption-layout">
          <div className="image-selector">
            <h3>작품 선택</h3>
            <div className="image-grid">
              {demoImages.map(img => (
                <div 
                  key={img.id}
                  className={`image-option ${selectedImage?.id === img.id ? 'selected' : ''}`}
                  onClick={() => handleImageSelect(img)}
                >
                  <img src={img.src} alt={img.title} />
                  <span>{img.title}</span>
                </div>
              ))}
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleGenerate}
              disabled={!selectedImage || isGenerating}
            >
              {isGenerating ? '생성 중...' : '✨ 캡션 생성하기'}
            </button>
          </div>

          <div className="caption-result">
            <h3>생성된 캡션</h3>
            <div className="caption-box">
              {caption ? (
                <pre>{caption}</pre>
              ) : (
                <p className="placeholder">왼쪽에서 작품을 선택하고 캡션을 생성해보세요</p>
              )}
            </div>
            {caption && (
              <button className="btn btn-secondary" onClick={handleCopy}>
                📋 복사하기
              </button>
            )}
          </div>
        </div>

        <Link to="/gallery/artist" className="back-link">← 갤러리로 돌아가기</Link>
      </div>
    </div>
  )
}

export default AutoCaptionPage

