# Resumiser - Efficient AI Resume Builder

## Team Members
- [Ayden - Resumizer](https://github.com/Resumizer) - branch: ayden
- [Danny - dcapua](https://github.com/dcapua) - branch: danny
- [Earth - earthcha](https://github.com/earthcha) - branch: earth
- [Henry - phhoang98a](https://github.com/phhoang98a) - branch: henry

## Features
* Build your resume with AI

## Latest Demo Mockups
### Sprint 2
- Design: https://www.figma.com/file/m1DXq5G9wP9tpF1SeZoF5d/Resumizer?type=design&node-id=204%3A111&mode=design&t=ofxu7vmKRs0PRRI2-1
#### Update 02/09/2024
##### Light Mode Design (Visual Desgin Live Demo Edition 1)
![Light Mode Mockup](public/sprint2/lightMockup.png "Light Mode Mockup")
##### Dark Mode Design (Visual Desgin Live Demo Edition 1)
![Dark Mode Mockup](public/sprint2/darkMockup.png "Dark Mode Mockup")


## Front-End
_**Tech stack**_

* ReactJS
* JavaScript/HTML/CSS
* Tailwind CSS
 
_**Setup**_

#### Use `yarn`
1. Clone the repository
2. Type `cd frontend` in terminal
3. Install the dependencies by running `yarn install` (NodeJS and yarn are prerequisites, use `npm install --global yarn` to install all dedendencies of yarn after NodeJS was installed). 
4. Start the development server by running `yarn dev` (if you want to build, use `yarn build` in `/frontend` and the built file will be in the `/frontend/dist` directory)
5. Open `http://localhost:5173` in your browser

#### Use `npm`
1. Clone the repository
2. Type `cd frontend` in terminal
3. Install the dependencies by running `npm install` (NodeJS is a prerequisite). 
4. Start the development server by running `npm run dev` (if you want to build, use `npm run build` in `/frontend` and the built file will be in the `/frontend/dist` directory)
5. Open `http://localhost:5173` in your browser

## Back-end
### Job Server
_**Setup**_

1. cd `/backend/JobServer`
2. Install the dependencies by running `pip install -r requirements.txt`
3. Start the development server by running `flask run`

_**Apis**_
```yml
POST - https://resumizer-7n3e.onrender.com/jobs

Body(JSON): 
- "job_title": Title of the job (Software engineer)
- "country": Country of job posts
- "location": Specific location (optional)

Use the exact name, * indicates support for Glassdoor:

|                      |              |            |                |
|----------------------|--------------|------------|----------------|
| Argentina            | Australia*   | Austria*   | Bahrain        |
| Belgium*             | Brazil*      | Canada*    | Chile          |
| China                | Colombia     | Costa Rica | Czech Republic |
| Denmark              | Ecuador      | Egypt      | Finland        |
| France*              | Germany*     | Greece     | Hong Kong*     |
| Hungary              | India*       | Indonesia  | Ireland*       |
| Israel               | Italy*       | Japan      | Kuwait         |
| Luxembourg           | Malaysia     | Mexico*    | Morocco        |
| Netherlands*         | New Zealand* | Nigeria    | Norway         |
| Oman                 | Pakistan     | Panama     | Peru           |
| Philippines          | Poland       | Portugal   | Qatar          |
| Romania              | Saudi Arabia | Singapore* | South Africa   |
| South Korea          | Spain*       | Sweden     | Switzerland*   |
| Taiwan               | Thailand     | Turkey     | Ukraine        |
| United Arab Emirates | UK*          | USA*       | Uruguay        |
| Venezuela            | Vietnam      |            |                |


Result: List of job information about company, title, date_posted, job_url, location, site
```
![Screenshot 2024-02-13 at 6 56 56 PM](https://github.com/imayden/Resumizer/assets/34488386/ed7509ec-c14c-4d0b-86c8-d7fa12e37adb)


### Resume Server
_**Setup**_

1. cd `/backend/ResumeServer`
2. Install the dependencies by running `npm install`
3. Start the development server by running `npm start`

_**Apis**_
```yml
POST - https://tiny-teal-swordfish-cap.cyclic.app

Body(form-data): 
- resume (File): PDF file
- jobTitle (text)
- openAIkey (text) 

Result: The new content of the resume.
```
![Screenshot 2024-02-13 at 7 15 36 PM](https://github.com/imayden/Resumizer/assets/34488386/288ecc35-b86c-4ab8-a63f-2823fae2377e)

```yml
POST - https://tiny-teal-swordfish-cap.cyclic.app/prompt

Body(JSON): 
- prompt (text)
- openAIkey (text) 

Result: The new content of the resume.
```
![Screenshot 2024-03-05 at 5 38 31 AM](https://github.com/imayden/Resumizer/assets/34488386/37df4529-0ac2-49b9-837a-d76aa8e69def)

## Monitors CPU, memory, and bandwidth usage
_**Job Server**_

The current Render free hosting: 0.1 CPU(10% of a single CPU core's computational capacity), 512 MB (Ram)
* The average duration of JobSpy Api is 6s
* The CPU usage metric indicates the system-wide CPU usage, which includes the usage of all processes running on the system.
  
  During the API runtime, the CPU usage is 58%. The metric is 26% after finishing
* The Memory usage metric indicates the physical memory used by the JobServer process. It includes the memory used by the process's code, data, and shared libraries that are currently in physical memory (RAM). The memory usage of the FastAPI process increases as new memory is allocated to accommodate these operations
  
  Before the API runtime, the Memory usage is 125MB. The metric is 129MB after finishing
* The bandwidth usage is the sum of the request body size and the response body size for each API caller.

![Screenshot 2024-03-19 at 4 42 50 PM](https://github.com/imayden/Resumizer/assets/34488386/a34fe3b9-9a05-4e24-b621-0957afaed42c)

_**Resume Server**_
The current free hosting: 1 GB of runtime memory, 1024 MB (Ram)

The CPU, memory, and bandwidth usage of resume generation by PDF Api: 
![Screenshot 2024-03-19 at 5 04 41 PM](https://github.com/imayden/Resumizer/assets/34488386/99c38fe0-b6d1-45b7-bfc7-d22283fab082)

The CPU, memory, and bandwidth usage of resume generation by prompt Api: 
![Screenshot 2024-03-19 at 5 08 53 PM](https://github.com/imayden/Resumizer/assets/34488386/dae02467-066e-4135-bb96-8fbf2a4e71f8)

## Database
* TBD

## API
* OpenAI API - GPT



