import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

// Helper function to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.post('/api/save-message', (req, res) => {
  const { name, email, message } = req.body;
  // Corrected path construction using path.join
  const csvFilePath = path.join(__dirname, 'messages.csv');
  console.log("CSV file path:", csvFilePath);
  const csvData = `${name},${email},${message}\n`;

  try {
    // Check if the directory exists before attempting to write the file
    const dir = path.dirname(csvFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(csvFilePath)) {
      fs.writeFileSync(csvFilePath, 'Name,Email,Message\n');
    }
    fs.appendFileSync(csvFilePath, csvData);
    console.log("Message saved to CSV successfully!");
    console.log("CSV file path:", csvFilePath);
    res.status(200).send("Message saved successfully!");
  } catch (error) {
    console.error("Error saving message:", (error as Error).message);
    res.status(500).send("Something went wrong! Try again.");
  }
});

export default router;
