import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.svg";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";
import UploadPopup from "./UploadPopup";
import JobSpy from './JobSpy';

function Home() {

  // The upload pop-up display status - Default is not open
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  // Toggle the upload pop-up
  const toggleUploadPopup = () => {
    setShowUploadPopup(!showUploadPopup);
  };

  return (
    <Container id="home">

      {/* Title Line */}
      <FadeIn>

        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 
          bg-opacity-30 backdrop-blur-2xl border-white border-[1px] border-opacity-10 bg-white 
          dark:bg-opacity-30 dark:backdrop-blur-2xl dark:border-black dark:border-[1px] dark:border-opacity-10 dark:bg-black " >
            <img
              src={logo}
              alt="logo"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
              // dark:ring-black dark:ring-opacity-10 dark:ring-[2px]"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Resumizer
              <br />
              Build Your Resume
              {" "}<br />
              <span className="text-[#7F739F]">
                {" "}
                In Minutes.
              </span>
            </h1>
          </div>

          {/* Action Tile */}
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center p-12 rounded-3xl max-md:p-8 
          bg-opacity-30 backdrop-blur-2xl border-white border-[1px] border-opacity-10 bg-white 
          dark:bg-opacity-30 dark:backdrop-blur-2xl dark:border-black dark:border-[1px] dark:border-opacity-10 dark:bg-black " >
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                  Ready To Feel {" "}
                </span>
                <br />
                The Magic?
              </h2>
            </div>

            {/* Upload File Button */}
            <button
              // href="#"
              onClick={toggleUploadPopup} // Toggle event for the Upload File Button
              className="min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
            >
              Upload Now
              <span className=" animate-pulse"></span>
            </button>

            {/* Manual Input Button */}
            <a
              href="#"
              className="min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-[#4F0ED1] hover:text-white dark:text-[#7A7497] bg-[#6D49FE] bg-opacity-0 hover:bg-[#6D49FE] ring-2 ring-[#4F0ED1] dark:ring-[#7A7497] hover:ring-0"
            >
              Input Manually
              <span className=" animate-pulse"></span>
            </a>

          </div>

        </div>
      </FadeIn>


      <FadeIn>
        {/* Socials Component */}
        <Socials />
      </FadeIn>

      <FadeIn>
        {/* JobSpy Component */}
        <JobSpy />
      </FadeIn>

      {/* Upload File Pop-up */}
      <UploadPopup isOpen={showUploadPopup} onClose={toggleUploadPopup} />

    </Container>
  );
}

export default Home;
