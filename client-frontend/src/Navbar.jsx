import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#E97910] p-4 mx-20">
      {/* // make the left and right margins smaller so the navbar is not too wide */}

      <div className="container mx-auto flex justify-between items-center bg-[#E97910]">
        {/* Brand */}
        <div className="text-[#64AB71] justify-between text-2xl font-bold">
          Bheopo Plumbing
        </div>

        {/* Links (hidden on mobile NEEDS TO BE UPDATED FOR MOBILE LATER) */}
        <ul className="hidden md:flex space-x-6 ml-8 text-white ">
          <li>
            <a
              href="#"
              className="hover:text-[#64AB71] hover:scale-105 transition-transform"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#64AB71]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#64AB71]">
              Services
            </a>
          </li>
          {/* <li><a href="#" className="hover:text-[#64AB71]">Contact Us</a></li> */}
        </ul>

        {/* Phone Number */}
        <div className="text-white text-lg ml-auto md:ml-0">1-800-000-000</div>

        {/* <ul className="hidden md:flex space-x-6 text-white">
                <li><a href="#" className="hover:text-[#64AB71] hover:scale-105 transition-transform">Home</a></li>
                <li><a href="#" className="hover:text-[#64AB71]">About</a></li>
                <li><a href="#" className="hover:text-[#64AB71]">Services</a></li>
                <li><a href="#" className="hover:text-[#64AB71]">Contact Us</a></li>
            </ul> */}
      </div>
    </nav>
  );
}
