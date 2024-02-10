import React from 'react';

const JobSpy = () => {
    return (
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8 mb-[8px]
        bg-opacity-30 backdrop-blur-2xl border-white border-[1px] border-opacity-10 bg-white 
          dark:bg-opacity-30 dark:backdrop-blur-2xl dark:border-black dark:border-[1px] dark:border-opacity-10 dark:bg-black " >
            <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] text-[#4F0ED1] dark:text-white">
                Seeking for a job?{" "}
                <span className="text-[#7F739F]">
                    {" "}
                    Let's search here!
                </span>
            </h3>
            <h5 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                    {" "}
                    Here's gonna be a
                </span>
                {" "}
                `job search component`
                <span className="text-[#7F739F]">
                    {" "}
                    awaiting to build ......
                </span>
            </h5>
        </div>
    );
}

export default JobSpy;
