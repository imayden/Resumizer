import express from 'express';
import { json } from 'body-parser';
import PDFParser from 'pdf-parse';

const app = express();
const port = 3000;

app.use(json());

app.post('/extractResumeInfo', async (req, res) => {
  try {
    const { pdfData } = req.body;

    if (!pdfData) {
      return res.status(400).json({ error: 'Missing PDF data' });
    }

    // Parse PDF content
    const dataBuffer = Buffer.from(pdfData, 'base64');
    const data = await PDFParser(dataBuffer);

    // Extract info
    const extractedInfo = {
      text: data.text,
      // Add more extraction logic
    };

    res.json({ success: true, data: extractedInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});