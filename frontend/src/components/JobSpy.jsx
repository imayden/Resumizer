// Create by Danny -  https://github.com/dcapua
// Modified by Ayden - https://github.com/imayden

import React, { useState } from "react";
import axios from "axios";
import Tile from "./Tile";
import InputField from "./InputField";
import Button from "./Button";

function JobSpy() {
    const [jobData, setJobData] = useState({
        job_title: "",
        country: "",
        location: "",
    });

    // Update job data based on user form input
    const handleChange = (event) => {
        const { name, value } = event.target;
        setJobData({
            ...jobData,
            [name]: value,
        });
    };

    const [jobResults, setJobResults] = useState(null);

    // jobspy backend call
    const handleSearch = (event) => {
        event.preventDefault();
        axios
            .post("https://job-server-0wyb.onrender.com/jobs", {
                job_title: jobData.job_title,
                country: jobData.country,
                location: jobData.location,
            })
            .then((response) => {
                console.log("Job search successful:", response.data);
                setJobResults(response.data); // update job results to use in grid view
            })
            .catch((error) => {
                console.error("Error searching for job:", error);
            });
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
                        variant="primary">
                            Search Now
                        </Button>
                </form>

            </div>



            {/* show table when there are results */}
            {jobResults && (
                <div>
                    <h2>Job Results</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                        {jobResults.map(job => (
                            <div key={job.job_url}>
                                <h3>{job.title}</h3>
                                <p>{job.company}</p>
                                <p>{job.location}</p>
                                <p>{job.date_posted}</p>
                                <a href={job.url}>[job.site]</a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Tile>
    );
}

export default JobSpy;