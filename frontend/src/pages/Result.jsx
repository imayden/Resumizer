import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import JobSpy from '../components/JobSpy';
import Tile from "../components/Tile";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Socials from "../components/Socials";
import TextField from "../components/TextField";
import UploadPopup from "../components/UploadPopup";
import InputPopUp from "../components/InputPopUp";
import ReactMarkdown from 'react-markdown';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

const Result = () => {

  // The upload pop-up display status - Default is not open
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [generatedResume, setGeneratedResume] = useState(null);
  const [additionalPrompts, setAdditionalPrompts] = useState('')

  useEffect(() => {
    // Retrieve the generated resume from local storage
    const storedResume = localStorage.getItem('generatedResume');
    if (storedResume) {
      setGeneratedResume(JSON.parse(storedResume));
    }
  }, []);

  // Toggle the upload pop-up
  const toggleUploadPopup = () => {
    setShowUploadPopup(!showUploadPopup);
  };

  // The input pop-up display status - Default is not open
  const [showInputPopup, setShowInputPopup] = useState(false);

  // Toggle the input pop-up
  const toggleInputPopup = () => {
    setShowInputPopup(!showInputPopup);
  };

  const handleExport = () => {
    if (!generatedResume || !generatedResume.content) {
      alert("No resume available.");
      return;
    }
  
    // Create a new instance of jsPDF
    const pdf = new jsPDF();
  
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
  
    const margin = 10;
    const initialY = 10;
    let y = initialY;
  
    const maxWidth = pageWidth - margin * 2;
    const lineHeight = 10; 

    const lines = pdf.splitTextToSize(generatedResume.content, maxWidth);

    lines.forEach(line => {
      if (y > pageHeight - margin) { 
        pdf.addPage();
        y = initialY; 
      }
  
      pdf.text(line, margin, y);
      y += lineHeight; 
    });
  
    // Save the PDF
    pdf.save('Resume.pdf');
  };
  


  // Copy function
  const handleCopy = () => {
    // Check if the resume text exists
    if (!generatedResume || !generatedResume.content) {
      alert("No resume available.");
      return;
    }

    // Extract resume content and get rid of " ```markdown" from beginning
    const contentToCopy = generatedResume.content.replace(/^```markdown\s*/, '');

    // Copy text to clipboard
    navigator.clipboard
      .writeText(contentToCopy)
      .then(() => {
        alert("Resume copied to clipboard successfully.");
      })
      .catch((error) => {
        console.error("Failed to copy resume to clipboard:", error);
        alert("Failed to copy resume to clipboard.");
      });
  };

  const handleRegenerate = async () => {

    if (!additionalPrompts.trim()) {
      alert('Please write a prompt.');
      return;
    }

    const prompt = `Reformat the following resume: ${generatedResume.content} 
      according to the following prompt: ${additionalPrompts} 
      PLEASE OUTPUT THE GENERATED REFINED RESUME ONLY WITHOUT ANY OTHER TEXT FORMATTED IN MARKDOWN GRAMMAR!`;

    // const openAIkey = import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY || localAPIkey;  
    const openAIkey = localStorage.getItem('apiKey');

    if (!openAIkey || openAIkey.length === 0) {
        alert("OpenAI API key is missing.");
        return;
    }

    alert("Nice! Your well refined resume is generating ... Please be patient and wait for seconds!");


    try {
      const response = await fetch('https://tiny-teal-swordfish-cap.cyclic.app/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, openAIkey }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Resume regenerated successfully:", result);
        setGeneratedResume(result);
        localStorage.setItem('generatedResume', JSON.stringify(result));
        window.open('/result', '_blank');
      } else {
        console.error("Failed to regenerate resume:", result);
      }
    } catch (error) {
      console.error("Error regenerating resume:", error);
      alert("Oops...we lost connection with server! Please clear your browser cookies, enter your OpenAI API key, refresh and try again.");
    }
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

            {generatedResume ? (
              <ReactMarkdown>
                {generatedResume.content} 
              </ReactMarkdown> // Displaying the resume
            ) : (
              <div>No result yet</div> // Placeholder when there is no resume
            )}

          </div>

          <div className="grid gap-x-4 gap-y-8 grid-cols-[1fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto]">
            <Button
              href="#"
              variant="primary"
              onClick={handleExport}>

              Export

            </Button>
            <Button
              href="#"
              variant="secondary"
              onClick={handleCopy}>

              Copy All

            </Button>
          </div>



        </Tile>
      </FadeIn>

      <FadeIn>
        <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
          <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
            <span className="text-[#7F739F]">
              Add Additional
              {" "}
            </span>

            Prompts
          </h3>

          {/* InputField for additional prompts */}
          <div>
            <TextField
              className="w-full"
              rounded="rounded-3xl"
              // height="min-h-[200px]"
              placeholder="Add additional prompts here, i.e, my target job is UX designer ..."
              value={additionalPrompts}
              onChange={(e) => setAdditionalPrompts(e.target.value)}
            />
          </div>

          <Button
            href="#"
            variant="primary"
            onClick={handleRegenerate}>
            Regenerate
          </Button>
        </Tile>
      </FadeIn>

      <FadeIn>
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
              // href="#"
              onClick={toggleInputPopup}
              variant="primary">
              Input Now
            </Button>


          </Tile>
        </div>
      </FadeIn>

      <FadeIn>
        {/* JobSpy Component */}
        <JobSpy />
      </FadeIn>

      <Socials
      />

      <UploadPopup isOpen={showUploadPopup} onClose={toggleUploadPopup} />

      {/* Input Manually Pop-up */}
      <InputPopUp isOpen={showInputPopup} onClose={toggleInputPopup} />

    </Container>
  );
}

export default Result;
