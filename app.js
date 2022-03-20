const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

const success = chalk.greenBright.inverse;
const working = chalk.yellowBright.inverse;
const fail = chalk.redBright.inverse;
const neutral = chalk.blueBright.inverse;

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isURL("https/mead.io"));
// console.log(chalk.greenBright.inverse("Success!"));
// console.log(chalk.redBright.inverse("Error!"));

// console.log(process.argv[2]);

// const command = process.argv[2];
// if (command === "add") {
//   console.log(working("Adding note!"));
// } else if (command === "remove") {
//   console.log(working("Removing note!"));
// }

// console.log(process.argv);

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log(working("Removing the note!"));
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log(working("Listing all notes!"));
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read all notes",
  handler: function () {
    console.log(working("Reading all notes!"));
  },
});

// console.log(yargs.argv);
yargs.parse();
