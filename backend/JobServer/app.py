from flask import Flask, request
from jobspy import scrape_jobs
import pandas as pd
app = Flask(__name__)


@app.route("/job", methods=['POST'])
def job():
  job_title = request.json['job_title']
  country = request.json['country']
  location = request.json['location']

  jobs: pd.DataFrame = scrape_jobs(
      site_name=["indeed", "linkedin", "glassdoor"],
      search_term=job_title,
      location=location,
      results_wanted=10,
      country_indeed=country
  )
  return {
    "job_url": jobs["job_url"].tolist(),
    "site": jobs["site"].tolist(),
    "title": jobs["title"].tolist(),
    "company": jobs["company"].tolist(),
    "location": jobs["location"].tolist(),
    "date_posted": jobs["date_posted"].tolist(),
  }, 200

if __name__ == "__name__":
  app.run()