// Updated by Earth https://github.com/earthcha

import React from 'react';
import { FadeIn } from "../components/FadeIn";
import Container from '../components/Container';
import Button from '../components/Button';
import Tile from '../components/Tile';
import InputField from '../components/InputField';
import Socials from '../components/Socials';

const Setting = () => {
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
                            placeholder="Paste your OpenAI API Key here and save ..."
                        />
                    </div>

                    <Button
                        href="#"
                        variant="primary">
                        Save
                    </Button>
                </Tile>

            </FadeIn>

            <FadeIn>
                <Socials />
            </FadeIn>
        </Container>
    );
};

export default Setting;