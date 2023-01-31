const fs = require("fs");
const os = require("os");

fs.writeFileSync("sample.txt", "sample text");

let content = fs.readFileSync("sample.txt", "utf-8");
content = content.split("").reverse().join("");

fs.writeFileSync("reversed.txt", content);

console.log(`Home directory: ${os.homedir()}`);
console.log(`Operating system: ${os.platform()}`);
