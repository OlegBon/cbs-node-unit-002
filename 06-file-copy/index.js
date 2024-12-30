import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// node index.js source.dat ./tmp
// node index.js source.dat ..
// node index.js source.dat ./

// Перевірка параметрів командного рядка
if (process.argv.length < 4) {
  console.error("Please provide source file path and target directory path.");
  process.exit(1);
}

// Визначення шляхів до файлів
const sourceFilePath = path.resolve(process.cwd(), process.argv[2]);
const targetDirectoryPath = path.resolve(process.cwd(), process.argv[3]);
const targetFilePath = path.join(
  targetDirectoryPath,
  path.basename(sourceFilePath)
);

// Перевірка існування вихідного файлу
if (!fs.existsSync(sourceFilePath)) {
  console.error("File not found");
  process.exit(1);
}

// Перевірка існування цільової директорії
if (!fs.existsSync(targetDirectoryPath)) {
  console.error("Target directory not found");
  process.exit(1);
}

if (!fs.statSync(targetDirectoryPath).isDirectory()) {
  console.error("Target path is not a directory");
  process.exit(1);
}

// Перевірка існування файлу з таким ім'ям у цільовій директорії
if (fs.existsSync(targetFilePath)) {
  console.error("File with such name already exists in the destination folder");
  process.exit(1);
}

// Копіювання файлу
fs.copyFile(sourceFilePath, targetFilePath, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File was copied successfully");
  }
});
