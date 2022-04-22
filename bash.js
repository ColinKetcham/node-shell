process.stdout.write("prompt > ");

const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

function write(data) {
  process.stdout.write(data);
  process.stdout.write("\nprompt > ");
}
// process.stdout.write("\nprompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  // console.log(cmd);

  if (cmd[0] === "pwd") {
    pwd(write);
  } else if (cmd[0] === "ls") {
    ls(write);
  } else if (cmd[0] === "cat") {
    //process.stdout.write(cmd[1]);
    cat(cmd[1], write);
  } else if (cmd[0] === "curl") {
    curl(cmd[1], write);
  } else {
    write("You typed: " + cmd);
  }
});
