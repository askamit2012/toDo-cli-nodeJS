import figlet from "figlet";
import chalk from "chalk";

function figletDemo() {
  console.clear();

  figlet.text(
    "ToDo in CLI NodeJS!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

  console.log(chalk.green("------------------------------->"));

  figlet.text("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log();
    console.log();
    console.log(chalk.blue.bold("TODO in CLI Nodejs!"));
    console.log();
    console.log();
    console.log(chalk.green("--------------------------------->"));
    console.log(data);
  });
}

export default figletDemo;
