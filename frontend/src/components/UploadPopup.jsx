
import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import InputField from "./InputField";
import Button from "./Button";
import pdfToText from 'react-pdftotext'


const UploadPopup = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const [file, setFile] = useState(""); // Save uploaded file
    const [fileName, setFileName] = useState(""); // Save uploaded file name to present
    const [jobTitle, setJobTitle] = useState("");
    const [uploadStatus, setUploadStatus] = useState(""); // "Save upload status"
    const [parsedText, setParsedText] = useState(""); // Save parsed pdf text
    const fileInputRef = useRef(null); // Create a ref to index the input file
    const [conbinedPrompts, setConbinedPrompts] = useState("");


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // Check the type and size of the selected file
        if (
            selectedFile &&
            (selectedFile.type === "application/pdf" // PDF Document
                // || 
                // selectedFile.type === "application/msword" // Old Microsoft Word Document (.doc)
                // || 
                // selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // Comtemporaty Microsoft Word Document (.docx)
            ) &&
            selectedFile.size <= 4 * 1024 * 1024 // Less than 4 MB
        ) {
            setFile(selectedFile);
            setFileName(selectedFile.name); // Update the file name
            setUploadStatus(`${selectedFile.name} Uploaded`); // Update the upload status
            console.log("File uploaded successfully");
            // pdfToText(selectedFile).then(text => {
            //     console.log("File Parsed Successfully: " + text);
            pdfToText(selectedFile).then(text => {
                console.log("File Parsed Successfully: " + text);
                setParsedText(text);
            }).catch(error => console.error("Failed to extract text from pdf"));
        } else {
            // alert("Invalid file. Please select a PDF or Word document less than 4MB.");
            alert("Invalid file. Please select a PDF document less than 4MB.");
            setFile(null); // Clear the selected file
            setFileName(""); // Clear the file name
            setUploadStatus(""); // Clear the upload status
        }
    };

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value);
    };

    const handleJobTitleBlur = () => {
        const conbinedPrompts = `My Target Job Is: ${jobTitle}. 
            Please Refine My Resume Refer To My Target Job In A Professional Way: ${parsedText}
            PLEASE OUTPUT THE GENERATED REFINED RESUME ONLY WITHOUT ANY OTHER TEXT AND PUT THE RESULTS IN A CODE BLOCK FORMATTED IN MARKDOWN GRAMMAR!
            `;
        setConbinedPrompts(conbinedPrompts);
        console.log(conbinedPrompts);
    };

    const handleConfirmClick = async () => {
        if (!file) {
            alert("Please select a file before confirming.");
            return;
        }

        // Create a FormData object to send uploaded file and jobTitle
        const formData = new FormData();
        // formData.append("file", file);
        formData.append("resume", file);
        formData.append("jobTitle", jobTitle);

        const openAIkey = import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
        // const openAIkey = "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"
        console.log("openAIkey: " + openAIkey);
        formData.append("openAIkey", openAIkey); 

        /* 
            **************************************************************************************
            Fetch the data from the server
            **************************************************************************************
        */
        try {
            // Send request to server to detect and parse the file content
            const response = await fetch('https://tiny-teal-swordfish-cap.cyclic.app', {
            // const response = await fetch('http://localhost:3000', {
                method: 'POST',
                body: formData,
            });

            // Fetche the data sent from the server
            const result = await response.json();
            if (response.ok) {
                // Clear the caches
                setFile(null);
                setFileName("");
                setUploadStatus("");

                // Handle the result
                console.log("Resume generated successfully:");
                console.log("============================================================");
                console.log(result);
                console.log("============================================================");
                window.open('/result', '_blank'); // Replace here with real result url
            } else {
                // Handle Error
                console.error("Server responded with error:", result);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }

        /* 
            **************************************************************************************
            Fetch the data from the server
            **************************************************************************************
        */
    };










    if (!isOpen) return null;

    // Element background blur effect
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    // Pop up animation
    const modalVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0.5,
            transition: { duration: 0.5 }
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        },
    };


    return (

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-10 backdrop-blur-xl  flex justify-center items-center
                    pointer-events-auto
                    "
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"

                    onClick={onClose}

                >
                    <motion.div
                        onClick={(event) => event.stopPropagation()}

                        className="w-80% h-50% p-5 rounded-[32px] relative flex flex-col items-center justify-center overflow-hidden mx-auto 
                        bg-opacity-40 backdrop-blur-3xl border-black border-[1px] border-opacity-5 bg-white 
                        dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black "
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <FadeIn>
                            <button onClick={onClose} className="flex top-2 right-2 mb-5 text-[#7F739F] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer
                            bg-opacity-40 backdrop-blur-3xl border-black border-[1px] border-opacity-5 bg-white 
                            hover:bg-[#7F739F] hover:bg-opacity-50 hover:text-white
                            dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black 
                            ">
                                ⛌
                            </button>

                            <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 
                            bg-opacity-10 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
                            dark:bg-opacity-10 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black 
                            px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
                                <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
                                    Upload Your Resume{" "}
                                    <span className="text-[#7F739F]">
                                        {" "}
                                        Here
                                    </span>
                                    <br />
                                </h3>

                                <div
                                    className="items-center text-center text-[18px] opacity-[50%] w-full justify-center align-center"
                                >
                                    {uploadStatus && <p>{uploadStatus}</p>}
                                </div>


                                {/* File choosing button */}
                                {/* Present uploadStatus */}

                                <button
                                    onClick={() => fileInputRef.current.click()}
                                    className=" w-full h-[72px] text-[#4F0ED1] hover:text-white dark:text-[#7A7497] bg-[#6D49FE] bg-opacity-0 hover:bg-[#6D49FE] ring-2 ring-[#4F0ED1] dark:ring-[#7A7497] hover:ring-0  transition-[background-color] duration-300 ease-[ease-out] text-[24px] leading-[48px] font-regular text-center items-center jsutify-center tracking-[-0.01em] rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8"
                                >
                                    Choose File
                                </button>

                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                            </div>

                            <br />

                            {/* Input Target Job Titles (Optional) */}
                            <InputField
                                placeholder="Enter target jobs here (Optional)"
                                value={jobTitle}
                                onChange={handleJobTitleChange}
                                onBlur={handleJobTitleBlur}
                            />

                            <br />

                            <Button
                                variant="primary"
                                onClick={handleConfirmClick}
                            >
                                Confirm
                            </Button>
                        </FadeIn>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UploadPopup;

