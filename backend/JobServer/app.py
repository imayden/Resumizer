from pydantic import BaseModel
from jobspy import scrape_jobs
from fastapi import FastAPI, Request
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
import psutil
import time

app = FastAPI()
# Get the current process
current_process = psutil.Process()

@app.middleware("http")
async def monitor_resource_usage(request: Request, call_next):
    request_body = await request.body()
    request_size = len(request_body)

    cpu_before = psutil.cpu_percent(interval=None)
    memory_before = current_process.memory_info().rss / 1024 / 1024
    start_time = time.time()

    async def wrapped_call_next(request):
        request._body = request_body
        return await call_next(request)
    response = await wrapped_call_next(request)

    # Measure resources after handling the request
    cpu_after = psutil.cpu_percent(interval=None)
    memory_after = current_process.memory_info().rss / 1024 / 1024
    duration = time.time() - start_time
    response_size = int(response.headers.get("Content-Length", 0))
    bandwidth_usage = request_size + response_size

    # Log or process the resource usage data
    print(f"API call: {request.url.path}")
    print(f"Duration: {duration:.1f}s")
    print(f"CPU usage before: {cpu_before:.2f}%, after: {cpu_after:.2f}%")
    print(f"Memory usage before: {memory_before:.2f} MB, after: {memory_after:.2f} MB")
    print(f"Total bandwidth used (bytes): {bandwidth_usage}")
    return response

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class Job(BaseModel):
  job_title: str
  country: str
  location: str = None

@app.post("/jobs/")
async def find_job(job:Job):
  job_title = job.job_title
  country = job.country
  location = job.location

  jobs: pd.DataFrame = scrape_jobs(
      #site_name=["indeed", "linkedin", "glassdoor"],
      site_name=["linkedin"],
      search_term=job_title,
      location=location,
      results_wanted=10,
      country_indeed=country,
      #proxy="http://jobspy:5a4vpWtj8EeJ2hoYzk@ca.smartproxy.com:20001"
  )
  return {
    "job_url": jobs["job_url"].tolist(),
    "site": jobs["site"].tolist(),
    "title": jobs["title"].tolist(),
    "company": jobs["company"].tolist(),
    "location": jobs["location"].tolist(),
    "date_posted": jobs["date_posted"].tolist(),
  }
