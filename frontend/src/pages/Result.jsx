import React, { useState } from "react";
import Container from "../components/Container";
import logo from "../assets/logo.svg";
import Socials from "../components/Socials";
import { FadeIn } from "../components/FadeIn";
import JobSpy from '../components/JobSpy';
import Tile from "../components/Tile";
import Button from "../components/Button";
import InputField from "../components/InputField";


function Reuslt() {

  // The upload pop-up display status - Default is not open
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  // Toggle the upload pop-up
  const toggleUploadPopup = () => {
    setShowUploadPopup(!showUploadPopup);
  };


  return (
    <Container id="result">

      {/* Title Line */}
      <FadeIn>

        <div className="grid gap-x-2 gap-y-2 grid-cols-[0.4fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 
          bg-opacity-40 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black " >

            <div className="top-2">
              <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                  Text Here To Add Additional
                  {" "}
                </span>
                <br />
                Prompts
              </h3>
            </div>

            <div className="bottom-2">
              <InputField
                className="min-h-[200px] rounded-2xl"
                placeholder="Add additional prompts here. i.e, my target job is UX desginer ..."
              />
            </div>

            <Button
              href="#"
              variant="primary">
              Regenerate
            </Button>
          </div>

          {/* Action Tile */}
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center p-12 rounded-3xl max-md:p-8 
          bg-opacity-40 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black " >

            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                  Revised {" "}
                </span>
                Resume
              </h3>
            </div>


            <div className="flex w-full h-[1000px] flex-col items-start gap-x-8 gap-y-8  px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8
            bg-opacity-20 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
            dark:bg-opacity-20 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black text-[#7F739F]" >

              Result

            </div>

            <div className="grid gap-x-4 gap-y-2 grid-cols-[1fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
              <Button
                href="#"
                variant="primary">
                Export
              </Button>
              <Button
                href="#"
                variant="secondary">
                Copy All
              </Button>
            </div>


          </div>

        </div>
      </FadeIn>

      <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

        {/* Action Tile */}
        <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
          <div>
            <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Upload <br />
              <span className="text-[#7F739F]">
                Resume {" "}
              </span>
            </h2>
          </div>

          {/* Upload File Button */}
          <Button
            onClick={toggleUploadPopup}
            variant="primary">
            Upload Now
          </Button>

        </Tile>

        {/* Action Tile */}
        <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
          <div>
            <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">

              Input <br />
              <span className="text-[#7F739F]">
                Resume {" "}
              </span>
            </h2>
          </div>

          {/* Manual Input Button */}
          <Button
            href="#"
            variant="primary">
            Input Now
          </Button>
        </Tile>


      </div>




      <FadeIn>
        {/* JobSpy Component */}
        <JobSpy />
      </FadeIn>

      <FadeIn>
        {/* Socials Component */}
        <Socials />
      </FadeIn>


    </Container>
  );
}

export default Reuslt;
