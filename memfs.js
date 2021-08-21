/*
    MemFs
*/
const MemFs = require('memfs');
const fs = MemFs.Volume.fromJSON({
    '/test/target': 'foo',
    '/test/folder': null
});

// cleanup
try { fs.unlinkSync('/test/folder/link'); } catch(e) {}

// create symlink
// resolves '../target' relative to cwd, not '/test/folder'
fs.symlinkSync('../target', '/test/folder/link');

// Error: ENOENT: no such file or directory, open '/test/folder/link'
fs.readFileSync('/test/folder/link');
