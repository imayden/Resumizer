import React from "react";
import Socials from "./Socials";
import { FadeIn } from "./FadeIn";
import { AnimatePresence, motion } from "framer-motion";


const UploadPopup = ({ isOpen, onClose }) => {

    const handleConfirmClick = () => {
        window.open('/result', '_blank');
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
                    className="fixed inset-0 bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-10 backdrop-blur-xl  flex justify-center items-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="w-80% h-50% p-5 rounded-[32px] relative flex flex-col items-center justify-center overflow-hidden mx-auto 
                        bg-opacity-40 backdrop-blur-3xl border-black bg-border-[2px] bg-border-opacity-50 bg-white 
                        dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black "
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <FadeIn>
                            <button onClick={onClose} className="flex top-2 right-2 mb-5 text-[#7F739F] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer
                            bg-opacity-40 backdrop-blur-3xl border-black bg-border-[2px] bg-border-opacity-50 bg-white 
                            hover:bg-[#7F739F] hover:bg-opacity-50 hover:text-white
                            dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black 
                            ">
                                ⛌
                            </button>

                            <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 
                            bg-opacity-10 backdrop-blur-3xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
                            dark:bg-opacity-10 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black 
                            px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
                                <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
                                    Upload Your Resume{" "}
                                    <span className="text-[#7F739F]">
                                        {" "}
                                        Here
                                    </span>
                                    <br />
                                </h3>

                                <button
                                    className=" w-full h-[72px] text-[#4F0ED1] hover:text-white dark:text-[#7A7497] bg-[#6D49FE] bg-opacity-0 hover:bg-[#6D49FE] ring-2 ring-[#4F0ED1] dark:ring-[#7A7497] hover:ring-0  transition-[background-color] duration-300 ease-[ease-out] text-[24px] leading-[48px] font-regular text-center items-center jsutify-center tracking-[-0.01em] rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8"
                                
                                >

                                    Choose File
                                </button>
                            </div>

                            <br />

                            <div className="flex w-full flex-col items-stretch gap-x-8 gap-y-8 px-0 py-0 rounded-3xl  max-mdd:max-w-none max-md:p-8 rounded-[99px]
                            bg-opacity-40 backdrop-blur-3xl border-white bg-border-[2px] bg-border-opacity-50 bg-white 
                            dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:bg-border-[2px] dark:bg-border-opacity-50 dark:bg-black " >
                                <input
                                    type="text"
                                    placeholder="Enter target jobs here (Optional)"
                                    className="w-full h-[72px] px-4 py-2 text-[24px] bg-white bg-opacity-20 hover:bg-opacity-80 hover:border-opacity-50 text-[white] hover:text-black text-opacity-50 hover:text-opacity-100 rounded-[99px]"
                                />
                            </div>

                            <br />

                            <button
                                onClick={handleConfirmClick}
                                className="min-h-[96px] w-full transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
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

