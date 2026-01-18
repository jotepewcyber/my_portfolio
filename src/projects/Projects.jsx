import React from 'react'
import Slider from 'react-slick'
import wazuh from '../images/wazuh.png'
import spam_blocker from '../images/spam_blocker_.png'
import nitm_logo from '../images/nitm_logo.png'
import 'slick-carousel/slick/slick-theme.css' 
import 'slick-carousel/slick/slick.css'
import ctf from '../images/ctf.png'
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-[-60px] -translate-y-1/2 
                 text-green-400 text-8xl cursor-pointer z-10
                 hover:text-orange-400 transition"
    >
      ❯
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute text-green-400 top-1/2 left-[-60px] -translate-y-1/2 
                  text-8xl cursor-pointer z-10
                 hover:text-orange-400 transition"
    >
      ❮
    </div>
  );
}

function Projects() {
    const listProjects=[
        {id:1,title:"VAPT FOR NIT MEGHALAYA",description:"Identified and reported multiple security bugs and misconfigurations in NIT Meghalaya's website.Collaborated with their Cyber Team for fix and secured their digital infrastructure.",image:nitm_logo},
        {id:2,title:"Intrusion Detection System for Meghalaya Cyber Cell",description:"Engineered a ready to use IDS system using Wazuh,Kibana,Filebeat to monitor network traffic and detect potential threats.",image:wazuh},
        {id:3,title:"Spam Websites Blocker(BROWSER EXTENSION)",description:"An all browser extension to block spam websites,having previous records of spam,theft or data leaks.[CORE TECHNOLOGY: Firebase] ",image:spam_blocker},
        {id:4,title:"A CTF PLATFORM",description:"A website to host CTF competitions. Intergated concepts of DevOps, AWS, Full-Stack Web-Development and CyberSecurity. ",image:ctf},
        
    ]
    const settings={
        dots:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
          nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
        
        responsive:[
            {
        breakpoint:700,
        settings:{
            slidesToShow:1,
            
        }
    }
        
        ]
    }
  return (
   <section data-aos="fade-up" data-aos-delay="400" id="projects" className='relative overflow-hidden flex flex-col text-white body-font'>
    <div className="container px-5 py-24 mx-auto h-[660px] w-full ml-8">
        <h2 data-aos="fade-left" data-aos-delay="400" className="text-8xl font-mono text-center text-green-500 mb-12">MY PROJECTS</h2>
        <Slider {...settings}>
            {
                listProjects.map((item)=>(
                    <div key={item.id} className="p-4">
                        <div className="bg-gray-800 overflow-hidden shadow-lg">
                            <img src={item.image} alt={item.title} className="w-[600px] h-[250px] object-cover" />
                            <div className="p-4">
                                <h3 className="tracking-widest text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>

   </section>
  )
}

export default Projects