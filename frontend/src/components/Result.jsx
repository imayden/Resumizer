import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.svg";
import { ContactIcon } from "./Icons";
import Socials from "./Socials";
import { FadeIn } from "./FadeIn";
import JobSpy from './JobSpy';


function Reuslt() {
  return (
    <Container id="result">

      {/* Title Line */}
      <FadeIn>

        <div className="grid gap-x-2 gap-y-2 grid-cols-[0.4fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 
          bg-opacity-40 backdrop-blur-3xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black " >
            <img
              src={logo}
              alt="logo"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
              // dark:ring-black dark:ring-opacity-10 dark:ring-[2px]"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Result
              <br />
              Page
              {" "}<br />
              <span className="text-[#7F739F]">
                {" "}
                Is Here.
              </span>
            </h1>
          </div>

          {/* Action Tile */}
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center p-12 rounded-3xl max-md:p-8 
          bg-opacity-40 backdrop-blur-3xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black " >

            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                 Revised {" "}
                </span>
                Resume
              </h3>
            </div>


            <div className="flex w-full h-[1000px] flex-col items-start gap-x-8 gap-y-8  px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8
            bg-opacity-20 backdrop-blur-3xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
            dark:bg-opacity-20 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black text-[#7F739F]" >

                Result
              
            </div>


            <button
              className="min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
              >
              Export
              <span className=" animate-pulse"></span>
            </button>

          </div>

        </div>
      </FadeIn>

      
      <FadeIn>
        {/* Socials Component */}
        <Socials />
      </FadeIn>

      <FadeIn>
        {/* JobSpy Component */}
        <JobSpy/> 
      </FadeIn>


    </Container>
  );
}

export default Reuslt;
