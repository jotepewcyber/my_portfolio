import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Skills1 from './skills1.jsx'
import Skills2 from './skills2.jsx'
import Skills3 from './skills3.jsx'
import Skills4 from './skills4.jsx'

function Skills() {
  return (
   <section id='skills' className='relative overflow-hidden flex flex-row text-white body-font'>
        <div className="container mx-auto px-5 py-24 space-y-12">
   <Skills1 />
   <Skills2 />
    <Skills4 />
   <Skills3 />
   
   </div>
  </section>
  )
}

export default Skills
