import { useEffect, useRef } from 'react'

function Stars() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 별 생성
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      star.style.animationDelay = Math.random() * 2 + 's'
      star.style.width = Math.random() * 2 + 1 + 'px'
      star.style.height = star.style.width
      container.appendChild(star)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div ref={containerRef} className="stars-bg" />
}

export default Stars

