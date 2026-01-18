import React, { useState } from 'react'
import interest from '../images/interest.png'
import python from '../images/python.png'
import basketball from '../images/basketball.jpeg'
import debate from '../images/debate.png'
import philosophy from '../images/philosophy.png'
function Interests() {
  const [activeIndex, setActiveIndex] = useState(null)

  const items = [
    {
      id: 1,
      title: 'Basketball',
      description:
        'Playing basketball keeps me physically active while strengthening teamwork, leadership, and strategic thinking skills.',
      icon: '🏀',
      src: basketball,
    },
    {
      id: 2,
      title: 'Debate',
      description:
        'Debate enhances my communication skills, critical reasoning, and ability to express ideas clearly and confidently.',
      icon: '🎤',
      src: debate,
    },
    {
      id: 3,
      title: 'Philosophy',
      description:
        'Studying philosophy helps me think deeply about ethics, logic, and problem-solving, shaping a disciplined mindset.',
      icon: '📚',
      src: philosophy,
    },
  ]

  const displaySrc = activeIndex !== null ? items[activeIndex].src : items[0].src

  return (
    <section id="interests" className="relative overflow-hidden flex flex-col text-gray-700 body-font">
      {/* Background Glow */}
     
      <div className="absolute top-[120px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col space-y-4">
            <h1 className='text-8xl font-mono text-green-500'>Interests!!!</h1>
            {items.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`cursor-pointer p-4 rounded-lg transition-all border ${
                  activeIndex === index ? 'bg-orange-50 border-orange-300 shadow' : 'bg-white border-transparent'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{item.icon}</div>
                  <div>
                    <h3 className="text-3xl font-mono font-semibold">{item.title}</h3>
                    <p className="text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 flex items-center justify-center">
          <div className="relative">
            <div className="md:h-[450px] h-[300px] md:w-[350px] w-[300px] bg-gradient-to-r from-orange-400 to-yellow-300 absolute rounded-2xl transform -rotate-3 -top-6 left-6 shadow-[0_0_40px_rgb(255,165,0,0.15)] z-0"></div>
            <img
              src={displaySrc}
              alt="interest"
              className="object-cover md:w-[350px] md:h-[450px] w-[300px] h-[300px] object-center rounded relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests