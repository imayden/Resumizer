// Completed

// Create by Danny -  https://github.com/dcapua
// Modified by Ayden - https://github.com/imayden

import React, { useState } from "react";
import axios from "axios";
import Tile from "./Tile";
import InputField from "./InputField";
import Button from "./Button";
import { FadeIn } from "./FadeIn";

const initialState = {
    job_url: [],
    site: [],
    title: [],
    company: [],
    location: [],
    date_posted: [],
};

function JobSpy() {
    const [jobData, setJobData] = useState({
        job_title: "",
        // country: "",
        country: "United States",
        location: "",
    });
    const [jobResults, setJobResults] = useState(initialState);
    const [loading, setLoading] = useState(false);
    // Update job data based on user form input
    const handleChange = (event) => {
        const { name, value } = event.target;
        setJobData({
            ...jobData,
            [name]: value,
        });
    };

    // jobspy backend call
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            setJobResults(initialState);
            setLoading(true)
            const response = await axios.post("https://resumizer-7n3e.onrender.com/jobs", {
                job_title: jobData.job_title,
                // country: jobData.country,
                country: "United States",
                location: jobData.location,
            })
            setJobResults(response.data)
            setLoading(false)
        } catch (error) {
            console.error("Error searching for job:", error);
        }
    };

    return (
        <FadeIn>
            <Tile className="mb-[8px] w-[100%] grid-rows-[auto] my-2">

                <div className="mb-[8px] w-[100%] grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
                    <div className="flex flex-col justify-center item-starth-full">
                        <h3 className=" max-md:text-[32px] max-md:leading-10  max-md:tracking-[-0.01em]  text-[#4F0ED1]  dark:text-white">
                            Seeking a job in the US?
                            <br />
                            <span className="text-[#7F739F]">
                                Search here!
                            </span>
                        </h3>
                        <div>
                            <br />
                        </div>
                    </div>


                    {/* form and search button */}
                    <div >
                        <form onSubmit={handleSearch} className="flex flex-col gap-2 mb-2">
                            <InputField
                                name="job_title"
                                value={jobData.job_title}
                                onChange={handleChange}
                                placeholder="Enter Target Job Title"
                            />
                            {/* <InputField
                            name="country"
                            value={jobData.country}
                            onChange={handleChange}
                            placeholder="Enter Preferred Country"
                        /> */}
                            <InputField
                                name="location"
                                value={jobData.location}
                                onChange={handleChange}
                                placeholder="Enter Preferred U.S. Location"
                            />

                        </form>
                        {/* Search Button */}
                        <Button
                            onClick={handleSearch}
                            variant="primary"
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? 'Searching...' : 'Search Now'}
                        </Button>
                        <div className="flex-col justify-between items-stretch text-center"
                        >
                            <span className="
                        opacity-50
                        text-sm
                        font-regular
                        ">
                                · Please wait for the searching initialization ·
                            </span>

                        </div>

                    </div>
                </div>

                <Tile 
                    className="bg-opacity-0 dark:bg-opacity-0"
                    padding="px-6 pt-8 pb-6"
                
                >
                    <div className="flex-col justify-between items-stretch text-center "
                    >


                        <p className="mb-4">

                            <span className="
                        opacity-50
                        text-md
                        font-regular
                        ">
                                · Searching Results Will Be Shown Below ·
                            </span>
                        </p>

                        {/* <hr className="border-t-[1px] border-[#4F0ED1] dark:border-white opacity-30" /> */}

                        {/* show table when there are results */}
                        <div
                            className="
                    w-full
                    rounded-lg
                    overflow-hidden
                    "
                        >


                            {jobResults.site.length > 0 && (
                                <div className="
                        w-full 

                        py-8
                        overflow-x-scroll
                        ">

                                    <table className="w-full leading-8">
                                        <thead>
                                            <tr className="
                                        text-left whitespace-nowrap
                                        text-left text-[22px]
                                        max-text-[22px] 
                                        max-md:text-[20px] 
                                        max-sm:text-[18px] 
                                        ">

                                                <th className="px-2"><span className="material-icons">work_outline</span></th>
                                                <th className="px-2"><span className="material-icons">business</span></th>
                                                <th className="px-2"><span className="material-icons">location_on</span></th>
                                                <th className="px-2"><span className="material-icons">event</span></th>
                                                <th className="px-2"><span className="material-icons">send</span></th>
                                            </tr>
                                        </thead>

                                        <tbody
                                            className="border-t border-opacity-30 border-current "
                                        >
                                            {jobResults.title.map((title, index) => (
                                                <tr
                                                    className="
                                            text-left text-[20px] whitespace-nowrap
                                            max-text-[20px] 
                                            max-md:text-[18px] 
                                            max-sm:text-[16px] 
                                            font-light
                                            "
                                                    key={index}>
                                                    <td className="px-2">{title}</td>
                                                    <td className="px-2">{jobResults.company[index]}</td>
                                                    <td className="px-2">{jobResults.location[index]}</td>
                                                    <td className="px-2">{jobResults.date_posted[index]}</td>
                                                    <td className="font-bold px-2">
                                                        <a
                                                            href={jobResults.job_url[index]}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className=" 
                                                        leading-10 
                                                        bg-[#6D49FE] bg-opacity-0 hover:bg-[#6D49FE]
                                                        ring-1 ring-[#4F0ED1] dark:ring-[#7A7497] hover:ring-0
                                                        rounded-full 
                                                        px-4 pb-1
                                                        hover:text-white
                                                        hover:cursor-pointer"
                                                        >
                                                            Apply
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                </Tile>

            </Tile>


        </FadeIn>
    );
}

export default JobSpy;
