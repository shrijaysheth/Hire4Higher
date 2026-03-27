import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import HomeA from '@/pages/HomeA'
import HomeB from '@/pages/HomeB'
import HomeC from '@/pages/HomeC'
import HomeD from '@/pages/HomeD'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeA />} />
          <Route path="/v/a" element={<HomeA />} />
          <Route path="/v/b" element={<HomeB />} />
          <Route path="/v/c" element={<HomeC />} />
          <Route path="/v/d" element={<HomeD />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
