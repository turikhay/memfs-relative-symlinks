/*
    Node.js
*/
const fs = require('fs');

// cleanup
try { fs.unlinkSync('test/folder/link'); } catch(e) {}

// create symlink
fs.symlinkSync('../target', 'test/folder/link');

// ok!
fs.readFileSync('test/folder/link');
