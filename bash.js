process.stdout.write("prompt > ");

const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  console.log(cmd);

  if (cmd[0] === "pwd") {
    pwd();
  } else if (cmd[0] === "ls") {
    ls();
  } else if (cmd[0] === "cat") {
    //process.stdout.write(cmd[1]);
    cat(cmd[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
