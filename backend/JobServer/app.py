from pydantic import BaseModel
from jobspy import scrape_jobs
from fastapi import FastAPI, Request
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
import psutil

app = FastAPI()

@app.get("/system-usage")
def get_system_usage():
    cpu_usage = psutil.cpu_percent()
    memory_usage = psutil.virtual_memory().percent
    return {"cpu_usage": cpu_usage, "memory_usage": memory_usage}

@app.middleware("http")
async def monitor_resource_usage(request: Request, call_next):
    request_body = await request.body()
    request_size = len(request_body)

    async def wrapped_call_next(request):
        request._body = request_body
        return await call_next(request)

    response = await wrapped_call_next(request)
    response_size = int(response.headers.get("Content-Length", 0))
    bandwidth_usage = request_size + response_size
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
