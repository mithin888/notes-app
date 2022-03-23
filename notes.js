const fs = require("fs");
const chalk = require("chalk");

const success = chalk.greenBright;
const working = chalk.magentaBright;
const fail = chalk.redBright;
const neutral = chalk.blueBright;

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = note.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(success("New note added!"));
  } else {
    console.log(
      fail("Error adding note. A note with that title already exists!")
    );
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newArray = notes.filter((note) => note.title !== title);
  saveNotes(newArray);

  if (newArray.length === notes.length) {
    console.log(fail("No note found!"));
  } else console.log(success("The note was removed"));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(working("Listing all notes!"));
  notes.forEach((note) => {
    console.log(`${note.title}: ${note.body}`);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(neutral(`${noteToRead.title}`));
    console.log(`${noteToRead.body}`);
  } else console.log(fail(`Could not find note with title: ${title}`));
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
