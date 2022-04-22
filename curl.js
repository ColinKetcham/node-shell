const request = require("request");

module.exports = function (url, write) {
  request(`${url}`, function (err, response, body) {
    if (err) {
      throw err;
    } else {
      write(body);
    }
  });
};
