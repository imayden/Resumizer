import React from "react";
import Socials from "./Socials";

const UploadPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If pop-up is not open then return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-4 rounded-lg max-w-md w-full">
      <button onClick={onClose} className="flex justify-center items-center"> (X) </button>
        <h2>Upload Your Resume Here</h2>
        {/* Pop-up content here */}
        <Socials /> 
        {/* More content */}
      </div>
    </div>
  );
};

export default UploadPopup;
