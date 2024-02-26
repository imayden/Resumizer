import React from "react";
import Socials from "./Socials";
import Container from "./Container";

function Footer() {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Socials />
      <footer className="w-full py-4 bg-tranparent text-[#24263B] text-opacity-50 dark:text-white dark:text-opacity-50 text-base text-center">
      {/* Dynamically present the current year and copyright information */}
      {currentYear} © Resumizer
    </footer>
    </Container>
    
  );
}

export default Footer;
