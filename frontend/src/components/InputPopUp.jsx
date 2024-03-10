import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextField from "./TextField"; 
import Button from "./Button";
import { FadeIn } from "./FadeIn";
import Tile from "./Tile";

const InputPopUp = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);



    //Define TextField input value
    const [fullName, setFullName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [professionalExperience, setProfessionalExperience] = useState("");
    const [additionalPrompts, setAdditionalPrompts] = useState("");

    // Submit form
    const handleSubmit = async () => {
        console.log({ fullName, jobTitle, contactInfo, professionalExperience,  additionalPrompts});

        // Perform client-side validation of input fields here
        if (!fullName.trim() || !jobTitle.trim() || !contactInfo.trim() ||!professionalExperience.trim()) {
            alert('Please fill in all required fields.');
            return;
        }

        // Construct the prompt using the input data
        const prompt = `Please make a new resume referring to my target job in a professional way. 
            My name is ${fullName} and my contact information is ${contactInfo}. 
            ${jobTitle} is my target job. I have some professional experiences in ${professionalExperience}.
            Also include this ${additionalPrompts} as additional information. 
            PLEASE OUTPUT THE GENERATED REFINED RESUME ONLY WITHOUT ANY OTHER TEXT FORMATTED IN MARKDOWN GRAMMAR!`;

        // Replace 'YOUR_OPENAI_KEY_HERE' with your actual OpenAI key
        // const openAIkey = import.meta.env.VITE_OPENAI_KEY;   
        const openAIkey = import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;

        try {
            // Send data to backend
            const response = await fetch('https://tiny-teal-swordfish-cap.cyclic.app/prompt', {
            // const response = await fetch('http://localhost:3000/prompt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt, openAIkey }), // Sending the data as JSON
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log("Resume generated successfully:", result);
                localStorage.setItem('generatedResume', JSON.stringify(result)); // Store the result in local storage
                window.open('/result', '_blank'); // Replace here with real result url
            } else {
                console.error("Failed to generate resume:", result);
            }
        } catch (error) {
            console.error("Error submitting resume data:", error);
        }
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
                    className="
                    overflow-y-auto
                    fixed inset-0 bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-10 backdrop-blur-xl  flex justify-center items-center
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

                        className="
                        overflow-y-auto
                        w-80% h-50% p-5 rounded-[32px] relative flex flex-col items-center justify-center mx-auto 
                        bg-opacity-40 backdrop-blur-3xl border-black border-[1px] border-opacity-5 bg-white 
                        dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black "
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <FadeIn>
                             <div className="min-w-[80vw] ">
                             <button onClick={onClose} className="flex top-2 right-2 mb-5 text-[#7F739F] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer
                                bg-opacity-40 backdrop-blur-3xl border-black border-[1px] border-opacity-5 bg-white 
                                hover:bg-[#7F739F] hover:bg-opacity-50 hover:text-white
                                dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black 
                                ">
                                ⛌
                            </button>
                                <h4 className="my-4 opacity-50">Full Name</h4>
                                <TextField padding="px-4 py-2" rounded="rounded-3xl" title="Full Name" placeholder="Text your name here ... " value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                <h4 className="my-4 opacity-50">Job Title</h4>
                                <TextField padding="px-4 py-2" rounded="rounded-3xl" title="Job Title" placeholder="Text your job title here ... " value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                                <h4 className="my-4 opacity-50">Contact Information</h4>
                                <TextField padding="px-4 py-2" rounded="rounded-3xl" title="Contact Information" placeholder="Text your email, linkedin, etc. here ... " value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
                                <h4 className="my-4 opacity-50">Professional Experience</h4>
                                <TextField padding="px-4 py-0" rounded="rounded-3xl" title="Professional Experience" placeholder="Text your professional experience or educational background here ... " value={professionalExperience} onChange={(e) => setProfessionalExperience (e.target.value)} />
                                <h4 className="my-4 opacity-50">Additional Prompts</h4>
                                <TextField padding="px-4 py-0" rounded="rounded-3xl" title="Additional Prompts" placeholder="Text your additional prompts here, i.e., generate my resume in Spanish or paste the job description of your target job ... " value={additionalPrompts} onChange={(e) => setAdditionalPrompts(e.target.value)} />
                            </div>

                            <div className="flex justify-end mt-4">
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>

                        </FadeIn>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InputPopUp;
