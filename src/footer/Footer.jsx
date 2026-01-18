import React from "react";

const footerLinks = [
  { name: "Home", link: "#home" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Interests", link: "#interests" },
];

function Footer() {
  return (
    <footer className="bg-black text-gray-300 body-font">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center">

        {/* Left */}
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Arunoday Tiwari
        </p>

        {/* Right Links */}
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {footerLinks.map((item, index) => {
            const href = item.link.startsWith("#") ? `/${item.link}` : item.link;
            return (
              <a
                key={index}
                href={href}
                className="ml-4 text-gray-400 hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}

export default Footer;
