import { argv } from 'node:process';
import fs from 'node:fs/promises';

const jsonPath = argv[2];

const printError = (message) => {
  console.error(message);
  process.exit(1);
};

if (!jsonPath) printError(`error: please provide a JSON file path`);

try {
  const file = await fs.readFile(jsonPath, 'utf8');
  if (!file) printError(`error: could not read file: ${jsonPath}`);
  const json = JSON.parse(file);
  console.log(JSON.stringify(json, null, 2));
} catch (error) {
  printError(`error: invalid JSON in file: ${jsonPath}`);
}