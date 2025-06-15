const fs = require("node:fs");

console.log("Synchronous");

const content = fs.readFileSync("./file.txt", "utf-8"); // Sync

console.log(content);

console.log("Synchronous");

const contentSync = fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Last");
