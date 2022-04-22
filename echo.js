module.exports = (string, write) => {
  if (string[0] === `"` && string[string.length - 1] === '"') {
    string = string
      .split("")
      .slice(1, string.length - 1)
      .join("");
  }
  write(string);
};
