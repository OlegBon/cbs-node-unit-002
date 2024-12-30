import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFilePath = path.resolve(path.join(__dirname, "source.dat"));
// Ім'я файла можна передати як аргумент командного рядка
// const sourceFilePath = path.resolve(process.argv[2]);

const fileToConsole = (sourceFilePath) => {
  if (!fs.existsSync(sourceFilePath)) {
    console.error("File not found");
    return;
  }

  fs.readFile(sourceFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(data);
    }
  });
};

fileToConsole(sourceFilePath);
