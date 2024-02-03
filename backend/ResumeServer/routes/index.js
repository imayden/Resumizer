var express = require('express');
var router = express.Router();
var pdfParse = require('pdf-parse');
var multer = require('multer');
require("dotenv").config();
const { OpenAI } = require("openai");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

router.post('/', upload.single('resume'), async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const buffer = req.file.buffer;
  const data = await pdfParse(buffer);
  const completion = await openai.chat.completions.create({
    messages: [{
      role: "system",
      content: data.text + " /n  " +
       "This is my resume content, extract it all information base on personal_info, education, work_experience, personal_project, skills. "+
       "Get all information, content is not summarized,  get responsibilities in personal_projects instead of descriptions,  line break when encountering \n, no additional information, return as a json"
    }],
    model: "gpt-3.5-turbo-0125",
  });
  res.status(200).json(JSON.parse(completion.choices[0]?.message?.content));
});
module.exports = router;
