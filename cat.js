const fs = require("fs");

module.exports = (fileName, write) => {
  // process.stdout.write("got to cat:");

  fs.readFile(`./${fileName}`, "utf8", function (err, data) {
    if (err) {
      throw err;
    } else {
      write(data);
    }
  });
};
