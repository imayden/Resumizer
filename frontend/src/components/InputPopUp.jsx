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
    const [personalInfo, setPersonalInfo] = useState("");
    const [targetJobTitles, setTargetJobTitles] = useState("");
    const [educationalBackground, setEducationalBackground] = useState("");
    const [professionalExperience, setProfessionalExperience] = useState("");
    const [additionalPrompts, setAdditionalPrompts] = useState("");

    // Submit form
    const handleSubmit = async () => {
        // Combine input data
        const resumeData = {
            personalInfo,
            professionalExperience,
            additionalPrompts,
        };

        try {
            // Send date to backend
            const response = await fetch('RESUME_SERVER_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resumeData),
            });

            const result = await response.json();
            if (response.ok) {
                console.log("Resume generated successfully:", result);
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
                            <div className="flex justify-end mt-4">
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>

                            <div className="min-w-[80vw] ">
                                <h4 className="my-4 opacity-50">Personal Information</h4>
                                <TextField padding="px-4 py-2" rounded="rounded-3xl" title="Personal Information" placeholder="Text your name, contacts, target job, educational background, experience and other essential information here ... " value={personalInfo} onChange={(e) => setPersonalInfo(e.target.value)} />

                                <h4 className="my-4 opacity-50">Additional Prompts</h4>
                                <TextField padding="px-4 py-0" rounded="rounded-3xl" title="Additional Prompts" placeholder="Text your additional prompts here, i.e., generate my resume in Spanish or paste the job description of your target job ... " value={additionalPrompts} onChange={(e) => setAdditionalPrompts(e.target.value)} />
                            </div>

                        </FadeIn>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InputPopUp;
