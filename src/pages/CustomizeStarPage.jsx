import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './CustomizeStarPage.css'

function CustomizeStarPage() {
  const [colors, setColors] = useState({
    color1: '#ffff99',
    color2: '#FFF5CC',
    color3: '#00ffff'
  })

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

  const handleCreate = () => {
    alert('데모 버전에서는 별 생성이 지원되지 않습니다.')
  }

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

        <Link to="/" className="back-link">홈으로</Link>
      </div>
    </div>
  )
}

export default CustomizeStarPage

