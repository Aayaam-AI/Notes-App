const fs = require('fs');

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>{note.title===title});
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("Note added successfully");
    } 
    else {
        console.log("Note title taken !!");
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const resultNotes = notes.filter((note)=>{return note.title !== title});
    if(notes.length > resultNotes.length){
        saveNotes(resultNotes);
        console.log("Note removed successfully");
    }
    else {
        console.log("Note not present !!");
    }
};

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length === 0){
        console.log("No Notes available !!")
    }
    else {
        notes.forEach(note => {
            console.log(note.title);
        });
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note)=>note.title===title);
    if(note){
        console.log("Title: ", note.title);
        console.log("Body: ", note.body);
    }
    else {
        console.log("Note with this title not present !!");
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};