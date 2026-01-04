import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Stars />
      
      <div className="not-found-container">
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>요청하신 페이지가 우주 어딘가로 사라졌습니다.<br />LUMINA 은하계로 돌아가 보세요.</p>
        <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default NotFoundPage

