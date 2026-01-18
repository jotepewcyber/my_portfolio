import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/debate.jpg";
import img2 from "../images/java.png";
import pentest from "../images/pentest.jpg";
import ceh1 from "../images/ceh1.png";
import phpsessid from "../images/phpsessid.png";
import race from "../images/race.png";
import req_smgl from "../images/req_smgl.png";
import csrf from "../images/csrf.jpeg";

/* ---------- Custom Arrows ---------- */
function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-[-60px] -translate-y-1/2 
                 text-5xl text-white cursor-pointer z-10
                 hover:text-orange-400 transition"
    >
      ❯
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-[-60px] -translate-y-1/2 
                 text-5xl text-white cursor-pointer z-10
                 hover:text-orange-400 transition"
    >
      ❮
    </div>
  );
}

function Featured() {
  /* ---------- Featured Items (replace with your data) ---------- */
  const featuredItems = [
    { id: 1, title: "Certified Ethical Hacker", image: ceh1, link: "https://drive.google.com/file/d/1K7mirstUCVAzcqmoRGG4vAt_tcoltO13/view" },
    { id: 2, title: "Certificate of Confirmation(Pentesting)", image: pentest, link: "https://drive.google.com/file/d/1o1G0Fh1ZMF4X_1M6BYzOfPIE92VNBf0A/view" },
    { id: 3, title: "Race Condition Exploitation", image: race, link: "https://medium.com/@arunodayvmtiwari1102/exploiting-race-condition-to-apply-discount-coupon-multiple-times-8c8368be44d2" },
    { id: 4, title: "HTTP Request Smuggling Attacks", image: req_smgl, link: "https://medium.com/@arunodayvmtiwari1102/http-request-smuggling-a1be1c2cf302" },
    { id: 5, title: "Bruteforcing PHPSESSID cookie", image: phpsessid, link: "https://medium.com/@arunodayvmtiwari1102/ctf-involving-bruteforcing-phpsessid-cookie-04d862890359" },
    { id: 6, title: "CSRF involving Referrer Header Modification", image: csrf, link: "https://medium.com/@arunodayvmtiwari1102/ctf-with-csrf-involving-referrer-header-186041e6b6b5" },
  ];

  /* ---------- Slider Settings ---------- */
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="featured"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>

        <Slider {...settings}>
          {featuredItems.map((item) => (
            <div key={item.id} className="px-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 rounded-lg overflow-hidden
                           shadow-lg hover:shadow-orange-500/30
                           transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-center">
                    {item.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Featured;
