import conf from "conf";
import chalk from "chalk";

const config = new conf();

function checkTask(index) {
  let tasklist = config.get("tasklist");
  let indexC = Number(index.indexArr[0]);

  if (indexC < 1 || indexC > tasklist.length) {
    console.log(chalk.blue("specify a valid index to check the task!"));
    return;
  }

  tasklist.forEach(function (task) {
    if (task.index == indexC) {
      task.isChecked = !task.isChecked;
    }
  });

  config.set("tasklist", tasklist);
}

export default checkTask;
