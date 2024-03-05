var express = require('express');
var router = express.Router();
var pdfParse = require('pdf-parse');
var multer = require('multer');
require("dotenv").config();
const { OpenAI } = require("openai");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/prompt', async (req, res, next) => {
  const { prompt, openAIkey } = req.body; 
  try {
    const openai = new OpenAI({ apiKey: openAIkey });
    const completion = await openai.chat.completions.create({
      messages: [
        {
          "role": "user",
          "content": prompt
        }
      ],
      model: "gpt-3.5-turbo-16k",
      temperature: 0.3,
      top_p: 1
    });
    res.status(200).json({content:completion.choices[0]?.message?.content});
  } catch (error) {
    console.error(error);
  }
});

router.post('/', upload.single('resume'), async (req, res, next) => {
  const { jobTitle, openAIkey } = req.body; 
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  try {
    const buffer = req.file.buffer;
    const data = await pdfParse(buffer);
    let cleanedText = data.text
    .replace(/\n+/g, ' ') 
    .replace(/[ć\]]/g, '') 
    .trim();
    const systemMessage = `
    Based on the content of the provided resume for the ${jobTitle} role, make the resume better according to the below instructions. Please return only the new resume content as a markdown type. The instructions:
    - The length of the resume should be about one A4 page, not too short
    - Demonstrate results with numbers and metrics, can generate the appropriate numbers
    - Follow the enhanced "X-Y-Z formula" for each point. For example, 'Accomplished X, with a measurable outcome of Y, by implementing Z'
    - Begin every line with a strong verb in the past tense (examples: 'Led', 'Developed', 'Designed') to underscore proactive skills and achievements. Soft verbs like 'Assisted' or 'Helped' should be replaced with more impactful verbs that accurately convey direct contributions
    - Directly quantify achievements, such as 'enhanced software efficiency by 30%' or 'cut down bug resolution time by 50%', to provide clear, measurable impacts of the work done.
    - Edit all grammar and phrasing errors
    - Remove any additional information: References, and Note part which is not included in the original content and created by AI
    `;
    const openai = new OpenAI({ apiKey: openAIkey });
    const completion = await openai.chat.completions.create({
      messages: [
        {
          "role": "system",
          "content": systemMessage
        },
        {
          "role": "user",
          "content": cleanedText
        }
      ],
      model: "gpt-3.5-turbo-16k",
      temperature: 0.3,
      top_p: 1
    });
    res.status(200).json({content:completion.choices[0]?.message?.content});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to parse PDF file. Please check the file and try again' });
  }

});
module.exports = router;
