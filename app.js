const note = require('./notes.js');
const validator = require('validator');
const yargs = require('yargs');

// Custimize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // To make title to be mandatory to provide
            type: 'string',
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv){
        note.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        note.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        note.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv){
        note.readNote(argv.title);
    }
});

yargs.parse();