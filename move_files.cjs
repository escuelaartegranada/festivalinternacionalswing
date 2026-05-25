const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'public', 'images');

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.jpeg')) {
    let newName;
    if (file.includes('Toni')) newName = 'belen-toni.jpeg';
    else if (file.includes('Pablo')) newName = 'cecile-pablo.jpeg';
    else if (file.includes('Diego')) newName = 'diego-suarez.jpeg';
    
    if (newName) {
       fs.renameSync(path.join(srcDir, file), path.join(destDir, newName));
       console.log(`Moved ${file} to ${newName}`);
    }
  }
});
