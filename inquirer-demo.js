import inquirer from "inquirer";

export default function inquirerDemo() {
  //   console.log(inquirer);
  inquirer
    .prompt(["Enter The Task: "])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
