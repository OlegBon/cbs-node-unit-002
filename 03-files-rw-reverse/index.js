import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFilePath = path.resolve(path.join(__dirname, "source.dat"));
const targetFilePath = path.resolve(path.join(__dirname, "target.dat"));

const reverse = (sourceFilePath, targetFilePath) => {
  if (!fs.existsSync(sourceFilePath)) {
    console.error("File not found");
    return;
  }

  fs.readFile(sourceFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.writeFile(
      targetFilePath,
      data.split("").reverse().join(""),
      "utf-8",
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(
            "File was processed successfully (source.dat (reverse) to target.dat)"
          );
        }
      }
    );
  });
};

reverse(sourceFilePath, targetFilePath);
