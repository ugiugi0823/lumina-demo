import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './CustomizeStarPage.css'

function CustomizeStarPage() {
  const [colors, setColors] = useState({
    color1: '#ffff99',
    color2: '#FFF5CC',
    color3: '#00ffff'
  })
  const [starGenerated, setStarGenerated] = useState(false)
  const canvasRef = useRef(null)

  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

  const handleRandomize = () => {
    setColors({
      color1: randomColor(),
      color2: randomColor(),
      color3: randomColor()
    })
  }

  const handleColorChange = (key, value) => {
    setColors(prev => ({ ...prev, [key]: value }))
  }

  // 별 그리기 함수
  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color, glow = false) => {
    let rot = Math.PI / 2 * 3
    let x = cx
    let y = cy
    const step = Math.PI / spikes

    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy - Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius
      y = cy - Math.sin(rot) * innerRadius
      ctx.lineTo(x, y)
      rot += step
    }

    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath()

    if (glow) {
      ctx.shadowBlur = 30
      ctx.shadowColor = color
    }

    ctx.fillStyle = color
    ctx.fill()
    ctx.shadowBlur = 0
  }

  // 별 생성
  const handleCreate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const size = 400
    canvas.width = size
    canvas.height = size

    // 배경 그라데이션 (우주 배경)
    const bgGradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
    bgGradient.addColorStop(0, '#1a1a2e')
    bgGradient.addColorStop(1, '#0a0a0a')
    ctx.fillStyle = bgGradient
    ctx.fillRect(0, 0, size, size)

    // 배경 별들
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const starSize = Math.random() * 2
      ctx.beginPath()
      ctx.arc(x, y, starSize, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8})`
      ctx.fill()
    }

    // 글로우 효과
    const glowGradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, 150)
    glowGradient.addColorStop(0, colors.color1 + '40')
    glowGradient.addColorStop(0.5, colors.color2 + '20')
    glowGradient.addColorStop(1, 'transparent')
    ctx.fillStyle = glowGradient
    ctx.fillRect(0, 0, size, size)

    // 외곽 별 (보조 색상 2)
    drawStar(ctx, size/2, size/2, 8, 120, 60, colors.color3, true)

    // 중간 별 (보조 색상 1)
    drawStar(ctx, size/2, size/2, 8, 90, 45, colors.color2, true)

    // 중심 별 (주 색상)
    drawStar(ctx, size/2, size/2, 8, 60, 30, colors.color1, true)

    // 중심 하이라이트
    const centerGradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, 30)
    centerGradient.addColorStop(0, '#ffffff')
    centerGradient.addColorStop(0.3, colors.color1)
    centerGradient.addColorStop(1, 'transparent')
    ctx.fillStyle = centerGradient
    ctx.beginPath()
    ctx.arc(size/2, size/2, 25, 0, Math.PI * 2)
    ctx.fill()

    setStarGenerated(true)
  }

  // 다운로드
  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'LUMINA_my_star.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  // 색상 변경 시 미리보기 업데이트
  useEffect(() => {
    if (starGenerated) {
      handleCreate()
    }
  }, [colors])

  return (
    <div className="customize-star-page">
      <Stars />
      
      <div className="customize-container">
        <h1>나만의 별 만들기</h1>
        <p className="subtitle">당신만의 특별한 은하를 만들어보세요. 아래에서 원하는 색상을 선택하세요.</p>
        
        <div className="color-picker-container">
          <div className="color-picker">
            <div 
              className="color-preview" 
              style={{ backgroundColor: colors.color1 }}
              onClick={() => document.getElementById('color1').click()}
            />
            <input 
              type="color" 
              id="color1" 
              value={colors.color1}
              onChange={(e) => handleColorChange('color1', e.target.value)}
            />
            <span>주 색상</span>
          </div>
          
          <div className="color-picker">
            <div 
              className="color-preview" 
              style={{ backgroundColor: colors.color2 }}
              onClick={() => document.getElementById('color2').click()}
            />
            <input 
              type="color" 
              id="color2" 
              value={colors.color2}
              onChange={(e) => handleColorChange('color2', e.target.value)}
            />
            <span>보조 색상 1</span>
          </div>
          
          <div className="color-picker">
            <div 
              className="color-preview" 
              style={{ backgroundColor: colors.color3 }}
              onClick={() => document.getElementById('color3').click()}
            />
            <input 
              type="color" 
              id="color3" 
              value={colors.color3}
              onChange={(e) => handleColorChange('color3', e.target.value)}
            />
            <span>보조 색상 2</span>
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleRandomize} className="btn btn-secondary">랜덤 색상</button>
          <button onClick={handleCreate} className="btn btn-primary">별 만들기</button>
        </div>

        {/* 별 캔버스 */}
        <div className={`star-preview ${starGenerated ? 'visible' : ''}`}>
          <canvas ref={canvasRef} className="star-canvas" />
          {starGenerated && (
            <button onClick={handleDownload} className="btn btn-download">
              ⬇️ 별 다운로드
            </button>
          )}
        </div>

        <Link to="/gallery/artist" className="back-link">갤러리로 돌아가기</Link>
      </div>
    </div>
  )
}

export default CustomizeStarPage
