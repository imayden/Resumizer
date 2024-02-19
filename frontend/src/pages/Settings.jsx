// Updated by Earth https://github.com/earthcha

import React from 'react';
import { FadeIn } from "../components/FadeIn";
import Container from '../components/Container';

const Setting = () => {
    return (
       <Container id="settings">
        <FadeIn>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-black bg-opacity-40 backdrop-blur-xl shadow-lg rounded-3xl p-8 max-w-lg w-full m-4">
                    <div className="p-4">
                        <h1 className="text-3xl font-bold mb-6 text-center text-white">Settings</h1>
                        <form>
                            <div className="mb-6">
                                <label htmlFor="api-key" className="block mb-2 text-sm font-medium text-gray-300">API Key:</label>
                                <input
                                type="text"
                                id="api-key"
                                className="bg-gray-700 bg-opacity-50 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Save
                                </button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </FadeIn>
       </Container>
    );
};

export default Setting;