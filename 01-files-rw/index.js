import fs from "fs";
import path from "path";
// в ES модулях __dirname або __filename не визначено, оскільки ES модулі
// не підтримують глобальні змінні, такі як __dirname або __filename.
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFilePath = path.resolve(path.join(__dirname, "source.dat"));
const targetFilePath = path.resolve(path.join(__dirname, "target.dat"));

fs.readFile(sourceFilePath, (err, data) => {
  if (err) {
    console.error(err, data);
    return;
  }
  fs.writeFile(targetFilePath, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data successfully written from source.dat to target.dat");
    }
  });
});
