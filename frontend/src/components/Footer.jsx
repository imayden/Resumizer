import React from "react";

function Footer() {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-tranparent text-white text-opacity-50 text-base text-center">
      {/* Dynamically present the current year and copyright information */}
      {currentYear} © Resumizer
    </footer>
  );
}

export default Footer;
