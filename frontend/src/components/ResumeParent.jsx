// Used for managing state of parsed resume text

import React, { useState } from "react";
import UploadPopup from "./UploadPopup";
import Result from "./Result";

const ResumeParent = () => {
    const [parsedText, setParsedText] = useState("");

    return (
        <div>
            <UploadPopup onParseText={setParsedText} />
            <Result parsedText={parsedText} />
        </div>
    );
};

export default ResumeParent;