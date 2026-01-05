import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './BackgroundColorPage.css'

function BackgroundColorPage() {
  const [backgroundColor, setBackgroundColor] = useState('#0a0a0a')
  const [accentColor, setAccentColor] = useState('#4eebc1')

  const presetThemes = [
    { name: '미드나잇', bg: '#0a0a0a', accent: '#4eebc1' },
    { name: '딥 퍼플', bg: '#1a0a2e', accent: '#b57edc' },
    { name: '오션 블루', bg: '#0a1628', accent: '#00d4ff' },
    { name: '포레스트', bg: '#0a1a0a', accent: '#7fff7f' },
    { name: '선셋', bg: '#1a0f0a', accent: '#ff7043' },
    { name: '로즈', bg: '#1a0a14', accent: '#ff69b4' },
  ]

  const handlePresetClick = (theme) => {
    setBackgroundColor(theme.bg)
    setAccentColor(theme.accent)
  }

  const handleApply = () => {
    alert(`테마가 적용되었습니다!\n배경색: ${backgroundColor}\n강조색: ${accentColor}\n\n(데모 페이지이므로 실제로 저장되지 않습니다)`)
  }

  return (
    <div className="background-color-page" style={{ '--custom-bg': backgroundColor, '--custom-accent': accentColor }}>
      <Stars />
      
      <div className="color-container">
        <h1>🎨 배경색 변경</h1>
        <p className="subtitle">나만의 갤러리 테마를 설정하세요</p>

        <div className="color-layout">
          <div className="preset-section">
            <h3>프리셋 테마</h3>
            <div className="preset-grid">
              {presetThemes.map((theme, index) => (
                <button 
                  key={index}
                  className="preset-btn"
                  style={{ background: theme.bg, borderColor: theme.accent }}
                  onClick={() => handlePresetClick(theme)}
                >
                  <span className="accent-dot" style={{ background: theme.accent }}></span>
                  <span className="preset-name">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="custom-section">
            <h3>커스텀 설정</h3>
            <div className="color-pickers">
              <div className="color-picker-group">
                <label>배경색</label>
                <div className="picker-wrapper">
                  <input 
                    type="color" 
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                  />
                  <span>{backgroundColor}</span>
                </div>
              </div>
              <div className="color-picker-group">
                <label>강조색</label>
                <div className="picker-wrapper">
                  <input 
                    type="color" 
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                  />
                  <span>{accentColor}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="preview-section">
            <h3>미리보기</h3>
            <div className="preview-card" style={{ background: backgroundColor }}>
              <div className="preview-header">
                <h4 style={{ color: accentColor }}>Demo Artist 갤러리</h4>
              </div>
              <div className="preview-grid">
                <div className="preview-item"></div>
                <div className="preview-item"></div>
                <div className="preview-item"></div>
              </div>
              <div className="preview-sidebar" style={{ borderColor: `${accentColor}30` }}>
                <div className="sidebar-item" style={{ background: `${accentColor}20` }}></div>
                <div className="sidebar-item" style={{ background: `${accentColor}20` }}></div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleApply}>
          ✅ 테마 적용하기
        </button>

        <Link to="/gallery/artist" className="back-link">← 갤러리로 돌아가기</Link>
      </div>
    </div>
  )
}

export default BackgroundColorPage

