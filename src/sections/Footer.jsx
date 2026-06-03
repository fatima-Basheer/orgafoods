import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
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
    <footer className="bg-[#ddac3c] text-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center text-xl font-bold gap-2">
            <img src="./logo.png" className="h-10" />
            <span>Orga Foods</span>
          </div>

          <p className="text-base text-gray-200 leading-5 mt-4">
            Premium quality cheese crafted from 100% pure cow milk. From our
            farm to your flavour.
          </p>
        </div>

        {footerData.map((section, i) => (
          <div key={i}>
            <h2 className="text-base sm:text-lg font-semibold mb-6">
              {section.title}
            </h2>

            <ul className="space-y-4 text-sm text-gray-200">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-black transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-6">
            Get In Touch
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <FaInstagram className="text-[#0C4D9A] text-lg" />
            </div>
            <div>
              <p className="text-xl font-medium">Instagram</p>
              <a
                href="#"
                className="text-gray-200 text-sm hover:text-black transition"
              >
                @eatwithorga
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <FaGlobe className="text-[#0C4D9A] text-lg" />
            </div>
            <div>
              <p className="text-xl font-medium">Website</p>
              <a
                href="#"
                className="text-gray-200 text-sm hover:text-black transition"
              >
                www.orgafoods.co
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <MdEmail className="text-[#0C4D9A] text-lg" />
            </div>
            <div>
              <p className="text-xl font-medium">For any queries, contact us</p>
              <a
                href="#"
                className="text-gray-200 text-sm hover:text-black transition"
              >
                orgafoodspakistan@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <FaLocationDot className="text-[#0C4D9A] text-lg" />
            </div>
            <div>
              <p className="text-xl font-medium">Location</p>
              <a
                href="#"
                className="text-gray-200 text-sm hover:text-black transition"
              >
                40/A 4l Gamber Pakpattan road District Okara
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr className="border-gray-200" />

        <p className="text-center text-base text-gray-200 mt-4">
          © 2026 OrgaFoods. All rights reserved. Premium Quality, From Farm to
          Flavour.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
