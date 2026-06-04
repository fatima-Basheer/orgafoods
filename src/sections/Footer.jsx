import React from "react";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const footerData = [
  {
    title: "Quick Links",
    links: ["Our Story", "Origins", "Our Selection", "Quality"],
  },
];

function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#022857] via-[#011632] to-[#000a18] text-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center text-xl font-bold gap-3">
        
            <div className="bg-white p-1.5 rounded-xl shadow-md inline-flex items-center justify-center">
              <img src="./orgalogo.png" className="h-10 w-auto object-contain" alt="OrgaFoods Logo" /> 
            </div>
            
            <span style={{ fontFamily: "Playfair Display", fontWeight: 700 }} className="text-[#f4f4f4]">
              OrgaFoods
            </span>
          </div>

          <p className="text-base text-slate-300 leading-5 mt-4">
            Premium quality cheese crafted from 100% pure cow milk. From our
            farm to your flavour.
          </p>
        </div>

        {footerData.map((section, i) => (
          <div key={i}>
            <h2
              className="text-lg font-semibold mb-6 text-[#ddac3c]"
              style={{ fontFamily: "Playfair Display", fontWeight: 700 }}
            >
              {section.title}
            </h2>

            <ul className="space-y-4 text-sm text-slate-300 font-medium">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#ddac3c] transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2
            className="text-base sm:text-lg font-semibold mb-6 text-[#ddac3c]"
            style={{ fontFamily: "Playfair Display", fontWeight: 700 }}
          >
            Get In Touch
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ddac3c] rounded-full shadow-md">
              <FaInstagram className="text-[#022857] text-2xl" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">Instagram</p>
              <a
                href="#"
                className="text-slate-300 text-sm hover:text-[#ddac3c] transition"
              >
                @eatwithorga
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ddac3c] rounded-full shadow-md">
              <FaGlobe className="text-[#022857] text-xl" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">Website</p>
              <a
                href="#"
                className="text-slate-300 text-sm hover:text-[#ddac3c] transition"
              >
                www.orgafoods.co
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ddac3c] rounded-full shadow-md">
              <MdEmail className="text-[#022857] text-xl" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">For any queries, contact us</p>
              <a
                href="#"
                className="text-slate-300 text-sm hover:text-[#ddac3c] transition"
              >
                orgafoodspakistan@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ddac3c] rounded-full shadow-md">
              <FaLocationDot className="text-[#022857] text-xl" />
            </div>
            <div>
              <p className="text-lg font-medium text-white">Location</p>
              <a
                href="#"
                className="text-slate-300 text-sm hover:text-[#ddac3c] transition"
              >
                40/A 4l Gamber Pakpattan road District Okara
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr className="border-slate-700" />

        <p className="text-center text-sm text-slate-400 mt-4">
          © 2026 OrgaFoods. All rights reserved. Premium Quality, From Farm to
          Flavour.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
