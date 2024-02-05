import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";


function Reuslt() {
  return (
    <Container id="result">

      {/* Title Line */}
      <FadeIn>

        <div className="grid gap-x-2 gap-y-2 grid-cols-[0.4fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img
              src={logo}
              alt="logo"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Result
              <br />
              Page
              {" "}<br />
              <span className="text-[#8a8a93]">
                {" "}
                Is Here.
              </span>
            </h1>
          </div>

          {/* Action Tile */}
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">

            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#8a8a93]">
                 Revised {" "}
                </span>
                Resume
              </h3>
            </div>


            <div className="flex w-full h-[1000px] flex-col items-start gap-x-8 gap-y-8 bg-[#5A5A5B] bg-opacity-75 backdrop-blur-lg  px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">

                Result
              
            </div>


            <button
              className=" w-full min-h-[96px] bg-[#bfd3eb] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-6 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-black"
            >
              Export
              <span className=" animate-pulse"></span>
            </button>

          </div>

        </div>
      </FadeIn>

      {/* Social Line */}
      <FadeIn>
        <Socials />
      </FadeIn>

      {/* Job Board Line */}
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            Seeking for a job?.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              Let's search here!
            </span>
          </h3>
        </div>
      </FadeIn>

    </Container>
  );
}

export default Reuslt;
