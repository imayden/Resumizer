import React, { useState } from "react";
import axios from 'axios';

function JobSpy() {

  const [jobData, setJobData] = useState({
    job_title: '',
    country: '',
    location: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobData({
      ...jobData,
      [name]: value
    });
  };

  // jobspy POST
  const handleSearch = (event) => {
    event.preventDefault();
    axios.post('https://job-server-0wyb.onrender.com/jobs', jobData)
      .then(response => {
        console.log('Job search successful:', response.data);

        setJobData({ // reset
          job_title: '',
          country: '',
          location: ''
        });
      })
      .catch(error => {
        console.error('Error searching for job:', error);
      });
  };

  return (
    <div
      className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 mb-[8px]
        bg-opacity-40 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black "
    >
      <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] text-[#4F0ED1] dark:text-white">
        Looking for a job? <span className="text-[#7F739F]"> Search here!</span>
      </h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <form onSubmit={handleSearch}>
            <input
              className = "min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-4 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
              type = "text"
              name = "job_title"
              value = {jobData.job_title}
              onChange = {handleChange}
              placeholder = "Enter job title"
              required
            ></input>
          </form>
        </div>
        <div>
          <form>
            <input
              className = "min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-4 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
              type = "text"
              name = "country"
              value = {jobData.country}
              onChange = {handleChange}
              placeholder = "Enter country"
              required
            ></input>
          </form>
        </div>
        <div>
          <form>
            <input
              className = "min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-4 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
              type = "text"
              name = "location"
              value = {jobData.location}
              onChange = {handleChange}
              placeholder = "Enter location"
              required
            ></input>
          </form>
        </div>
        <div>
          <button
            className = "min-h-[96px] w-full transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
            type = "submit"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobSpy;
