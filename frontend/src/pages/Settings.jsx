import React, { useState, useEffect } from 'react';
import { FadeIn } from "../components/FadeIn";
import Container from '../components/Container';
import Button from '../components/Button';
import Tile from '../components/Tile';
import InputField from '../components/InputField';
import Socials from '../components/Socials';
import UploadPopup from '../components/UploadPopup';
import InputPopUp from '../components/InputPopUp';

const Setting = () => {
    const [apiKey, setApiKey] = useState('');
    const [saveStatus, setSaveStatus] = useState('');

    // Check if there is API key in localStorage
    useEffect(() => {
        const savedApiKey = localStorage.getItem('apiKey');
        if (savedApiKey) {
            setApiKey(savedApiKey);
            setSaveStatus("OPEN AI API Key Saved");
        } else {
            setSaveStatus("No OPEN AI API Key Saved");
        }
    }, []);

    // Ssve API key to localStorage
    const saveApiKey = () => {
        localStorage.setItem('apiKey', apiKey);
        setSaveStatus("OPEN AI API Key Saved");
        console.log(apiKey);
    };

    // Clear API key in localStorage
    const deleteApiKey = () => {
        localStorage.removeItem('apiKey');
        setApiKey('');
        setSaveStatus("No OPEN AI API Key Saved");
    };

    return (
        <Container id="settings">
            <FadeIn>
                <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
                    <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                        <span className="text-[#7F739F]">
                            Update And Save Your
                            {" "}
                        </span>
                        OpenAI API Key
                    </h3>

                    <div>
                        <InputField
                            placeholder="Update your OpenAI API Key here and save ..."
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                        />
                    </div>

                    <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_1fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
                        <Button
                            onClick={saveApiKey}
                            variant="primary">
                            Save
                        </Button>

                        <Button
                            onClick={deleteApiKey}
                            variant="Secondary">
                            Delete
                        </Button>
                    </div>

                    <div className='opacity-50'>
                       · {saveStatus} ·
                    </div>

                    <UploadPopup localAPIkey={apiKey} />
                    <InputPopUp localAPIkey={apiKey} />

                </Tile>
            </FadeIn>
            <Socials />
        </Container>
    );
};

export default Setting;
