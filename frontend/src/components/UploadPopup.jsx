import React from "react";
import Socials from "./Socials";
import { FadeIn } from "./FadeIn";
import { AnimatePresence, motion } from "framer-motion";

const UploadPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

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
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="w-75% h-50% bg-[#2B2B2C] bg-opacity-50 backdrop-blur-lg p-5 rounded-[32px] relative flex flex-col items-center justify-center overflow-hidden mx-auto"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <FadeIn>
                            <button onClick={onClose} className="flex top-2 right-2 mb-5 bg-[#5A5A5B] text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                                ⛌
                            </button>

                            <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#5A5A5B] bg-opacity-75 backdrop-blur-lg px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
                                <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
                                    Upload Your Resume{" "}
                                    <span className="text-[#8a8a93]">
                                        {" "}
                                        Here
                                    </span>
                                    <br />
                                </h3>

                                <button
                                    // href="#"
                                    className=" w-full h-[72px] bg-white bg-opacity-0 border-[#8a8a93] border-[2px] text-[#8a8a93] transition-[background-color] duration-300 ease-[ease-out] text-[24px] leading-[48px] font-regular text-center items-center jsutify-center tracking-[-0.01em] rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 hover:text-white hover:border-white"
                                >
                                    Choose File
                                </button>
                            </div>

                            <br />

                            <button
                                // href="#"
                                className=" w-full min-h-[96px] bg-[#bfd3eb] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-black"
                            >
                                Confirm
                                <span className=" animate-pulse"></span>
                            </button>
                        </FadeIn>

                        {/* More components here */}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UploadPopup;

