import convertString from "./convert-to-base64/index.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
let str = prompt("Enter a string: ");

let result = convertString(str);

console.log(`String in base64 format: ${result}`);
// https://www.base64decode.org/ - to decode base64 string
