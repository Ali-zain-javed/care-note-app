import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json());
app.use(cors());

interface Note {
  id?: number;
  residentName: string;
  dateTime: string;
  content: string;
  authorName: string;
}

app.get('/care-notes', (req: Request, res: Response) => {
  fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
    console.log('data', data);
    if (err) {
      return res.status(500).json({ error: 'Failed to read data file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/care-notes', (req: Request, res: Response) => {
  const newNote: Note = { id: Date.now(), ...req.body };

  fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data file' });
    }
    const notes: Note[] = JSON.parse(data);
    notes.unshift(newNote);
    fs.writeFile(DATA_FILE, JSON.stringify(notes, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Failed to save note' });
      }
      res.status(201).json(newNote);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
