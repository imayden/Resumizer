const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('./app');


describe('POST /', () => {
  it('uploads a file and returns new resume content', async () => {
    const filePath = path.join(__dirname, 'bad_swe_resume.pdf');

    const response = await request(app)
      .post('/')
      .attach('resume', filePath)
      .field('jobTitle', 'Software Engineer')
      .field('openAIkey', process.env.OPENAI_API_KEY);

    expect(response.statusCode).toBe(200);
  }, 100000);

  it('returns an error if no file is uploaded', async () => {
    const response = await request(app)
      .post('/')
      .field('jobTitle', 'Software Engineer')
      .field('openAIkey', process.env.OPENAI_API_KEY);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'No file uploaded' });
  });

  // Add more tests as needed
});
