import fs from 'fs';
import path from 'path';

/**
 * Read JSON file
 */
export function readJson(relativePath) {
  const filePath = path.resolve(process.cwd(), relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

/**
 * Write JSON file
 */
export function writeJson(relativePath, data) {
  const filePath = path.resolve(process.cwd(), relativePath);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
