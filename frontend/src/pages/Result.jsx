import React, { useState } from "react";
import Container from "../components/Container";
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
      <FadeIn className="mb-2">
        <Tile>
          <div className="flex flex-col justify-center items-center">
            <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              <span className="text-[#7F739F]">
                Revised {" "}
              </span>
              Resume
            </h3>
          </div>

          <div className="flex w-full inline-flex flex-col items-start gap-x-8 gap-y-8  px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8
            bg-opacity-20 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
            dark:bg-opacity-20 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black text-[#7F739F]" >

            Result

          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-[1fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto]">
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



        </Tile>
      </FadeIn>

      <FadeIn>
        <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
          <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
            <span className="text-[#7F739F]">
              Text Here To Add Additional
              {" "}
            </span>

            Prompts
          </h3>

          <div>
            <InputField
              className="w-full"
              rounded="rounded-3xl"
              height="min-h-[200px]"
              placeholder="Add additional prompts here. i.e, my target job is UX desginer ..."
            />
          </div>

          <Button
            href="#"
            variant="primary">
            Regenerate
          </Button>
        </Tile>
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
        <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center ">
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


    </Container>
  );
}

export default Reuslt;
