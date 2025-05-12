import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Reconstruct __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse the JSON file at runtime
const jsonPath = join(__dirname, 'pythonQuestions.json');
const questionData: any[] = JSON.parse(
  readFileSync(jsonPath, 'utf-8')
);

try {
  await db();
  await cleanDB();

  // bulk create each model
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
