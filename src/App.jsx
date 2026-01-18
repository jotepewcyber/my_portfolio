import { useEffect, useState } from 'react'
import Hero  from './components/hero/Hero.jsx'
import aos from 'aos'
import 'aos/dist/aos.css' 
import Skills from './skills/skills.jsx'
import Experience from './Experience/Experience.jsx'
import Interests from './Interests/Interests.jsx'
import Projects from './projects/Projects.jsx'
import Contact from './contacts/Contact.jsx'
import Footer from './footer/Footer.jsx'
import {Routes,Route} from 'react-router-dom'
import ScrollToHash from './components/scroll2hash.jsx'
import Featured from './featured/featured.jsx'
function App() {
useEffect(() => {
  aos.init({ duration: 600 })
}, [])

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <main className='bg-black'>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Interests />
                <Featured />
              <Footer />
            
            </main>
          }
        />
        <Route
          path="/contact"
          element={
            <main className='bg-violet-500'>
              <Contact />
              <Footer />
            </main>
          }
        />
      </Routes>
    </>
  )
}

export default App
