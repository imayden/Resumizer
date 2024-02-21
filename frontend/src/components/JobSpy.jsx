// Create by Danny -  https://github.com/dcapua
// Modified by Ayden - https://github.com/imayden

import React, { useState } from "react";
import axios from "axios";
import Tile from "./Tile";
import InputField from "./InputField";
import Button from "./Button";

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
        country: "",
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
            const response = await axios.post("https://job-server-0wyb.onrender.com/jobs", {
                job_title: jobData.job_title,
                country: jobData.country,
                location: jobData.location,
            })
            setJobResults(response.data)
            setLoading(false)
        } catch (error) {
            console.error("Error searching for job:", error);
        }
    };

    return (

        <Tile className="mb-[8px] w-[100%] grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
            <div className="
                flex 
                flex-col 
                justify-center 
                item-start
                h-full
                ">
                <h3 className="
                    max-md:text-[32px] 
                    max-md:leading-10 
                    max-md:tracking-[-0.01em] 
                    text-[#4F0ED1] 
                    dark:text-white
                    \">
                    Looking for a job?
                    <br />
                    <span className="text-[#7F739F]">
                        Search here!
                    </span>
                </h3>
            </div>

            {/* form and search button */}
            <div >
                <form onSubmit={handleSearch} className="flex flex-col gap-4">
                    <InputField
                        name="job_title"
                        value={jobData.job_title}
                        onChange={handleChange}
                        placeholder="Enter Target Job Title"
                    />
                    <InputField
                        name="country"
                        value={jobData.country}
                        onChange={handleChange}
                        placeholder="Enter Preferred Country"
                    />
                    <InputField
                        name="location"
                        value={jobData.location}
                        onChange={handleChange}
                        placeholder="Enter Preferred City"
                    />
                    {/* Search Button */}
                    <Button
                        onClick={handleSearch}
                        variant="primary"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? 'Searching...' : 'Search Now'}
                    </Button>
                </form>

            </div>



            {/* show table when there are results */}
            {jobResults.site.length > 0 && (
                <div className="w-full">
                    <h2>Job Results</h2>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Title</th>
                                <th className="text-left">Company</th>
                                <th className="text-left">Location</th>
                                <th className="text-left">Date Posted</th>
                                <th className="text-left">Job URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobResults.title.map((title, index) => (
                                <tr key={index}>
                                    <td>{title}</td>
                                    <td>{jobResults.company[index]}</td>
                                    <td>{jobResults.location[index]}</td>
                                    <td>{jobResults.date_posted[index]}</td>
                                    <td>
                                        <a
                                            href={jobResults.job_url[index]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            View Job
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Tile>
    );
}

export default JobSpy;