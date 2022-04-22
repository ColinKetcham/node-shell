const fs = require("fs");

module.exports = function (write) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      write(files.join("\n"));
    }
  });
};
