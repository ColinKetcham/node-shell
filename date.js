module.exports = (write) => {
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);
  write(String(date));
};
