const path = require("node:path");

// Know the path name and directory name

console.log("Path Name:", __filename); // Logging the full path of the current file
console.log("Directory Name:", __dirname); // Logging the directory name of the current file

// Using basename

console.log("Base Name:", path.basename(__filename)); // Logging the base name of the current file
console.log("Base Name:", path.basename(__dirname)); // Logging the base name of the current directory

// Using extname for extenstion

console.log("Extension", path.extname(__filename));

// Parse method

console.log("Parsed Path : ", path.parse(__dirname));

// Format Method

console.log("Formated Path Name : ", path.format(path.parse(__filename)));

// Join Method, Joins multiple paths

console.log(
  "Joined Path Complex",
  path.join("Folde1", "//Folder1", "../index.html")
);

console.log("Simple Join", path.join("/Folder1", "Folder2", "index.html"));

// Resolve Method

console.log("Resolve Method in Action");

console.log(path.resolve("Folder1", "Folder2", "index.html"));

console.log(path.resolve("/Folder1", "Folder2", "index.html"));

console.log(path.resolve("/Folder1", "//Folder2", "index.html"));

console.log(path.resolve("/Folder1", "//Folder2", "../index.html"));

console.log(path.resolve(__dirname, "index.html"));
