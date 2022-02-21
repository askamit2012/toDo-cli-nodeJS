import chalk from "chalk";
import conf from "conf";

const config = new conf();

function clearTasklist() {
  config.delete("tasklist");
  console.log(chalk.red.bold("Tasklist cleared"));
}

export default clearTasklist;
