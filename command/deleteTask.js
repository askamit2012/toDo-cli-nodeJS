import conf from "conf";
import chalk from "chalk";

const config = new conf();

function deleteTask(indexArr) {
  let tasklist = config.get("tasklist");

  let index = +indexArr.indexArr[0];

  if (index < 1 || index >= tasklist.length + 1) {
    console.log(chalk.blue("Please Enter a valid index to delete"));
    return;
  }

  if (indexArr.indexArr.length == 1) {
    tasklist.splice(index - 1, 1);
  }

  for (let i = index - 1; i <= tasklist.length + 1; i++) {
    if (tasklist[i]) {
      tasklist[i].index = tasklist[i].index - 1;
    }
  }

  config.set("tasklist", tasklist);
}

export default deleteTask;
