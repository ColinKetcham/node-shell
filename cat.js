const fs = require("fs");

module.exports = (fileName) => {
  // process.stdout.write("got to cat:");

  fs.readFile(`./${fileName}`, "utf8", function (err, data) {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });

  process.stdout.write("\nprompt > ");
};
