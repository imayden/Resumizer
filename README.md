# Resumiser - Efficient AI Resume Builder

## Team
- [Ayden - imayden](https://github.com/imayden)
- [Danny - dcapua](https://github.com/dcapua)
- [Earth - earthcha](https://github.com/earthcha)
- [Henry - phhoang98a](https://github.com/phhoang98a)

## Features
* Build your resume with AI

## Front-End
_**Tech stack**_

* React
* Tailwind CSS

_**Setup**_

1. Clone the repository
2. Install the dependencies by running `npm install` (NodeJS is a prerequisite)
3. Start the development server by running `npm run dev`
4. Open `http://localhost:5173` in your browser

## Back-end
### Job Server
_**Setup**_

1. cd ./backend/JobServer
2. Install the dependencies by running `pip install -r requirements.txt`
3. Start the development server by running `flask run`

_**Apis**_
```yml
POST - http://127.0.0.1:5000/job

Body(JSON): 
- "job_title": Title of the job (Software engineer)
- "country": Country of job posts
- "location": Specific location (optional)

Result: List of job information about company, title, date_posted, job_url, location, site
```
<img width="712" alt="Screenshot 2024-02-02 at 4 55 53 AM" src="https://github.com/imayden/Resumizer/assets/34488386/9f102deb-af29-42b9-8250-0266c22be785">

## Database
* TBD

## API
* OpenAI API - GPT



