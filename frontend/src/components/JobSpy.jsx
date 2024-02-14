import React from 'react';

const JobSpy = () => {
    return (
      <div
        className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 mb-[8px]
        bg-opacity-40 backdrop-blur-3xl border-white border-[1px] border-opacity-5 bg-white 
          dark:bg-opacity-40 dark:backdrop-blur-3xl dark:border-black dark:border-[1px] dark:border-opacity-5 dark:bg-black "
      >
        <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] text-[#4F0ED1] dark:text-white">
          Looking for a job?{" "}
          <span className="text-[#7F739F]"> Search here!</span>
        </h3>
        
        <input
          type="text"
          placeholder="Search jobs..."
          className="min-h-[96px] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white bg-[#4F0ED1] hover:bg-[#6D49FE] "
        />
      </div>
    );
}

export default JobSpy;
