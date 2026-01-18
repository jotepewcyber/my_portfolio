import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const listNavbar = [
    { name: "home", link: "#home" },
    { name: "experience", link: "#experience" },
    { name: "skills", link: "#skills" },
    { name: "projects", link: "#projects" },
    { name: "interests", link: "#interests" },
  ]

  return (
    <header
      data-aos="fade-down"
      data-aos-delay="200"
      className="bg-black border-b border-green-500/40 font-mono"
    >
      <div className="container mx-auto flex flex-wrap p-5 items-center">

        {/* Logo / Title */}
        <div className="flex items-center text-green-400 text-2xl font-bold">
          <span className="mr-2">$</span>
          <span>portfolio</span>
        </div>

        {/* Navigation */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-green-400">
          {listNavbar.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="mr-6 hover:text-green-300 transition relative"
            >
              <span className="text-green-600">$</span> {item.name}
            </Link>
          ))}
        </nav>

        {/* Get in Touch Button */}
        <Link to="/contact">
          <button className="border border-green-500 text-green-400 px-6 py-1 rounded hover:bg-green-500 hover:text-black transition shadow-[0_0_10px_rgba(34,197,94,0.6)]">
            ./get-in-touch
          </button>
        </Link>

      </div>
    </header>
  )
}

export default Navbar
