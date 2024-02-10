import React, { useState, useEffect } from 'react';
import { FadeIn } from "./FadeIn";
import { Link, useLocation } from "react-router-dom";
import blackLogo from '../assets/colorLogo.svg';
import whiteLogo from '../assets/whiteLogo.svg';

// Define the data for navigation links
const navlinkes = [
  {
    name: "home.",
    link: "/home",
  },
  // {
  //   name: "about.",
  //   link: "/about",
  // },
  {
    name: "result.",
    link: "/result",
  },

  // {
  //   name: "contact.",
  //   link: "/contact",
  // },
];

// Define the Navbar component
function Navbar() {

  const location = useLocation(); // To locate and highlight the currant page anchor

  // Set up default/initial logo style
  const [logo, setLogo] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? whiteLogo : blackLogo
  );

  useEffect(() => {
    // Detect when system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setLogo(e.matches ? whiteLogo : blackLogo);
    };

    // Listen for changes
    mediaQuery.addListener(handleChange);

    // Cleanup function to remove the event listener
    return () => mediaQuery.removeListener(handleChange);
  }, []);


  return (
    <div >
      <FadeIn>

        {/* Navbar main body, using flex layout, including Resumizer title and navigation links */}
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center text-black dark:text-white mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6 
        bg-opacity-25 backdrop-blur-2xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
        dark:bg-opacity-25 dark:backdrop-blur-2xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black ">

          {/* Auto-switch logo by themes */}
          <Link to="/home" className="text-lg leading-6 -translate-x-[0.01em]">
            <img src={logo} alt="logo" className="w-[88px]" />
          </Link>

          <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
            {navlinkes.map((navlink) => (
              // Dynamically generate each navigation link 
              <Link
                to={navlink.link}
                key={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out]  text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-[#4F0ED1] dark:hover:text-white ${location.pathname === navlink.link ? "text-[#4F0ED1] dark:text-white" : "text-[#7F739F]"
                  }`}
              >
                {navlink.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile view, bottom-fixed navigation bar */}
        <div className="flex w-full justify-center items-center sm:hidden fixed top-0 z-50">
          <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px] bg-opacity-30 text-[#4F0ED1] dark:text-white px-8 py-4 rounded-full fixed bottom-5 mx-auto 
          bg-opacity-25 backdrop-blur-2xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
          dark:bg-opacity-25 dark:backdrop-blur-2xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black " >
            {navlinkes.map((navlink) => (
              // Dynamically generate each navigation link 
              <Link
                to={navlink.link}
                key={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out]  text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${location.pathname === navlink.link ? "text-[#4F0ED1] dark:text-white" : "text-[#7F739F]"
                  }`}
              >
                {navlink.name}
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;
