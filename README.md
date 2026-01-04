# LUMINA - React 기반 디지털 아트 플랫폼

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 프로젝트 소개

LUMINA는 AI 워터마크 기술을 활용한 디지털 아트 플랫폼입니다. 작가들의 작품을 보호하고, 온라인 갤러리를 통해 전 세계와 연결합니다.

### 주요 기능

- 🎨 **나만의 별 만들기** - 작가만의 고유한 별 아이덴티티 생성
- 🔐 **AI 워터마크 보증서** - 디지털 워터마크 기반 작품 인증
- 🖼️ **온라인 갤러리** - 작품 전시 및 판매
- 🎫 **초대권 시스템** - 워터마크 기반 갤러리 초대

## 🚀 시작하기

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 프로덕션 빌드

```bash
npm run build
```

## 📦 GitHub Pages 배포

### 1. 빌드 설정

`vite.config.js`에서 `base`를 레포지토리 이름으로 설정:

```js
base: '/your-repo-name/'
```

### 2. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# dist 폴더를 gh-pages 브랜치에 배포
npx gh-pages -d dist
```

### 3. GitHub 설정

1. Repository → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages`, `/ (root)`
4. **Save**

배포 완료 후: `https://USERNAME.github.io/REPO_NAME/`

## 📁 프로젝트 구조

```
service/
├── public/
│   └── images/          # 이미지 리소스
├── src/
│   ├── components/      # 재사용 컴포넌트
│   │   ├── Stars.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── LandingPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── Dashboard1Page.jsx
│   │   ├── Dashboard2Page.jsx
│   │   ├── DecodePage.jsx
│   │   ├── EncodePage.jsx
│   │   ├── CustomizeStarPage.jsx
│   │   ├── FindStarPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── data/
│   │   └── artworks.json
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ 기술 스택

- **Frontend**: React 19.1
- **Build Tool**: Vite 7.3
- **Routing**: React Router DOM 7.6
- **Styling**: CSS (Custom)
- **Deployment**: GitHub Pages

## 📄 라이센스

© 2024 LUMINA. All rights reserved.
