import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GalleryPage from './pages/GalleryPage'
import Dashboard1Page from './pages/Dashboard1Page'
import Dashboard2Page from './pages/Dashboard2Page'
import DecodePage from './pages/DecodePage'
import EncodePage from './pages/EncodePage'
import CustomizeStarPage from './pages/CustomizeStarPage'
import FindStarPage from './pages/FindStarPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/dashboard1" element={<Dashboard1Page />} />
        <Route path="/dashboard2" element={<Dashboard2Page />} />
        <Route path="/decode" element={<DecodePage />} />
        <Route path="/encode" element={<EncodePage />} />
        <Route path="/customize-star" element={<CustomizeStarPage />} />
        <Route path="/find-star" element={<FindStarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
