import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './UploadArtworkPage.css'

function UploadArtworkPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    materials: '',
    year: new Date().getFullYear()
  })
  const [previewImage, setPreviewImage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUploading(true)
    
    // 업로드 시뮬레이션
    setTimeout(() => {
      setIsUploading(false)
      setUploadComplete(true)
    }, 2000)
  }

  if (uploadComplete) {
    return (
      <div className="upload-artwork-page">
        <Stars />
        <div className="upload-container success">
          <div className="success-icon">✅</div>
          <h1>업로드 완료!</h1>
          <p>작품이 성공적으로 갤러리에 등록되었습니다.</p>
          <p className="demo-notice">(데모 페이지이므로 실제로 저장되지 않습니다)</p>
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => setUploadComplete(false)}>
              다른 작품 업로드
            </button>
            <Link to="/gallery/artist" className="btn btn-secondary">
              갤러리로 이동
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="upload-artwork-page">
      <Stars />
      
      <div className="upload-container">
        <h1>🖼️ 작품 업로드</h1>
        <p className="subtitle">새로운 작품을 갤러리에 등록하세요</p>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-layout">
            <div className="image-upload-area">
              <label className="image-dropzone">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  hidden
                />
                {previewImage ? (
                  <img src={previewImage} alt="Preview" className="preview-image" />
                ) : (
                  <div className="dropzone-content">
                    <span className="upload-icon">📤</span>
                    <p>클릭하여 이미지 선택</p>
                    <span className="hint">JPG, PNG, WebP (최대 10MB)</span>
                  </div>
                )}
              </label>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>작품 제목 *</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="작품의 제목을 입력하세요"
                  required
                />
              </div>

              <div className="form-group">
                <label>작품 설명</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="작품에 대한 설명을 입력하세요"
                  rows={4}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>가격 (₩)</label>
                  <input 
                    type="number" 
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="500000"
                  />
                </div>

                <div className="form-group">
                  <label>제작 연도</label>
                  <input 
                    type="number" 
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>재료/기법</label>
                <input 
                  type="text" 
                  name="materials"
                  value={formData.materials}
                  onChange={handleInputChange}
                  placeholder="예: Oil on canvas, Digital art"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary submit-btn"
            disabled={isUploading || !previewImage}
          >
            {isUploading ? '업로드 중...' : '🚀 작품 등록하기'}
          </button>
        </form>

        <Link to="/gallery/artist" className="back-link">← 갤러리로 돌아가기</Link>
      </div>
    </div>
  )
}

export default UploadArtworkPage

