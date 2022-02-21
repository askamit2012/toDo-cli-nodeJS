import conf from "conf";
import chalk from "chalk";

const config = new conf();

function getTasklist() {
  let tasklist = config.get("tasklist");
  if (tasklist && tasklist.length) {
    console.log(chalk.white.underline("index"), chalk.white.underline("task"));
    tasklist.map((task) => {
      if (!task.isChecked) {
        console.log(
          chalk.red.bold.underline(task.index),
          chalk.red.underline(task.task)
        );
      } else {
        console.log(chalk.green.underline(task.index, task.task));
      }
    });
  } else {
    console.log(chalk.green.bold("Congrats! No Tasks Pending."));
  }
}

export default getTasklist;
