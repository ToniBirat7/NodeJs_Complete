const buffer = new Buffer.from("Birat");

buffer.write("ABCDEFH");

console.log(buffer.toJSON());

console.log(buffer.toString());
