import React from "react";
import { FadeIn } from "./FadeIn";

// Define the data for navigation links
const navlinkes = [
  {
    name: "home.",
    link: "#home",
  },
  {
    name: "about.",
    link: "#about",
  },
];

// Define the Navbar component
function Navbar() {
  return (
    <div>
      <FadeIn>

        {/* Navbar main body, using flex layout, including Resumizer title and navigation links */}
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center bg-[#131315] mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6">
          <span className="text-lg leading-6 -translate-x-[0.01em] ">
            Resumizer.
          </span>
          <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
            {navlinkes.map((navlink) => (

              // Dynamically generate each navigation link
              <a
                href={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${
                  navlink.link === "#home" ? "text-white" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile view, bottom-fixed navigation bar */}
        <div className="flex w-full justify-center items-center sm:hidden">
          <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px]  bg-[#131315] px-8 py-4 rounded-full fixed bottom-5 mx-auto">
            {navlinkes.map((navlink) => (

              // Dynamically generate each navigation link
              <a
                href={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${
                  navlink.link === "#home" ? "text-white" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;
