import React from 'react'
import Navbar from '../../navbar/Navbar.jsx'
import CV from '../../images/sde_september.pdf'
import my_img from '../../images/my_img.jpeg'
import hacker from '../../images/hacker.jpg'
import {useState,useEffect} from 'react'
function Hero() {
    const roles=['Developer','Programmer','Hacker']
    const [currentrole,setcurrentrole]=useState(0)

    useEffect(() => {
        const interval=setInterval(()=>{
            setcurrentrole((prev)=>(prev+1)%roles.length);
        },1500);
        return () =>clearInterval(interval);
    },[]);

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255,165,0,0.7)] '></div>
      <Navbar />


      <section 
      data-aos='fade-down'
      data-aos-delay='20'
      className="text-white body-font z-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            {/* <img src={} data-aos='fade-down'
      data-aos-delay='40'className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform-translate-x-1/2 -translate-y-1/2 w-20 h-20' alt="image" /> */}
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-mono text-white">$ whoami</h1>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-mono  text-white">$ Arunoday Tiwari</h1>
            <h2 className="mb-8 leading-relaxed text-green-400 text-8xl">Am I a {roles[currentrole]}?</h2>
            <h2 className="mb-8 leading-relaxed text-green-700 font-mono text-6xl">Let's find out</h2>
            <div className="flex justify-center">
            <a href={CV}> 
<button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none  hover:bg-orange-700 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg'>Download my CV</button>
</a>

            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={my_img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' /></div>

        </div>


      </section>
    </div>
  )
}

export default Hero
