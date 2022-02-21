import conf from "conf";
import chalk from "chalk";

const config = new conf();

function addTask(task) {
  let tasklist = config.get("tasklist");
  let length;

  if (!tasklist) {
    tasklist = [];
    length = 0;
  }
  length = tasklist.length;

  tasklist.push({
    id: new Date().getSeconds().toString(),
    index: length + 1,
    task,
    isChecked: false,
    isEditable: false,
  });

  config.set("tasklist", tasklist);

  console.log(chalk.green(task, "task added successfully"));
}

export default addTask;
