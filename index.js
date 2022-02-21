#! /usr/bin/env node

import { Command } from "commander";
import getTasklist from "./command/getTasklist.js";
import addTask from "./command/addTask.js";
import checkTask from "./command/checkTask.js";
import clearTasklist from "./command/clearTasklist.js";
import deleteTask from "./command/deleteTask.js";
// import CluiDemo from "./clui-demo.js";
// import figletDemo from "./figlet-demo.js";
// import inquirerDemo from "./inquirer-demo.js";

const program = new Command();

// CluiDemo();
// figletDemo();
// inquirerDemo();

program
  .command("getTasklist")
  .description("All Tasks to be executed")
  .action(getTasklist);

program
  .command("addTask <task>")
  .description("Create a new Task")
  .action(addTask);

program
  .command("checkTask")
  .description("mark the task checked/unchecked")
  .option(
    "-c, --indexArr <indices...>",
    "The tasks to mark done. If not specified, all tasks will be marked done."
  )
  .action(checkTask);

program
  .command("clearTasklist")
  .description("clear the TaskList")
  .action(clearTasklist);

program
  .command("deleteTask")
  .description("deleteing a task or deleting multiple tasks")
  .option("-d, --indexArr <indices...>")
  .action(deleteTask);

program.parse();
