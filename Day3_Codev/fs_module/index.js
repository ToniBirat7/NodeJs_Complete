const fs = require("node:fs");

const content = fs.readFileSync("./file.txt", "utf-8"); // Sync

console.log(content);
