const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  // return finished code to post route for response
  return note;
}

function deleteNote(id, notesArray) {
  console.log(notesArray);
  const newNotesArray = notesArray.filter((note) => note.id !== id);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: newNotesArray }, null, 2)
  );
  return newNotesArray;
}

// function deleteNote(id) {
//   let rawData = fs.readFileSync("./db/db.json");
//   let parsedData = JSON.parse(rawData);
//   const noteArray = parsedData.notes;
//   //console.log(noteArray);
//   const newArray = removeItem(noteArray, id);
//   //console.log(newArray);
//   //console.log(JSON.stringify(newArray, null, 2));
//   fs.writeFileSync(
//     "./db/db.json",
//     JSON.stringify({ notes: newArray }, null, 2)
//   );
//   return newArray;
// }

// function removeItem(arr, id) {
//   if (arr.some((note) => note.id === id)) {
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i].id === id) {
//         arr.splice(i, 1);
//         return arr;
//       }
//     }
//   } else {
//     return arr;
//   }
// }

// function removeItem(arr, id) {
//   console.log(id);
//   arr.forEach(function () {
//     if (id !== arr[i].id) {
//       return arr;
//     }
//     if (arr[i].id === id) {
//       arr.splice(i, 1);
//       return arr;
//     }
//   });
// }

module.exports = { findById, createNewNote, deleteNote };
