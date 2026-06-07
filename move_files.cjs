const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'public', 'images');

fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
    let newName;
    const lower = file.toLowerCase();
    
    // Mapping base names to sanitized ones in data.ts
    if (lower.includes('astrid')) newName = 'astrid-sander.jpeg';
    else if (lower.includes('bele')) newName = 'belen-toni.jpeg';
    else if (lower.includes('cile')) newName = 'cecile-pablo.jpeg';
    else if (lower.includes('diego')) newName = 'diego-suarez.jpeg';
    else if (lower.includes('his rhythm keys')) newName = 'cody-lee.png';
    else if (lower.includes('jorge urbano')) newName = 'jorge-urbano.jpeg';
    else if (lower.includes('jose')) newName = 'jose-serrano.jpeg';
    else if (lower.includes('petite')) newName = 'petite-suite.jpeg';
    else if (lower.includes('leo')) newName = 'leo.jpeg';
    else if (lower.includes('mario')) newName = 'mario.jpeg';
    else if (lower.includes('burguez')) newName = 'martin-burguez.jpeg';
    else if (lower.includes('pedro')) newName = 'marta-pedro.jpeg';
    else if (lower.includes('huertas')) newName = 'rafa-huertas.jpeg';
    else if (file === 'Regina.jpeg') newName = 'regina.jpeg'; // Note: check precise name match
    else if (lower.includes('ricky')) newName = 'ricky-vivar.jpeg';
    else if (file.includes('Rostom (2)')) newName = 'rostom2.jpeg';
    else if (file === 'Rostom.jpeg') newName = 'rostom.jpeg';
    else if (lower.includes('sonia')) newName = 'sonia-jcarlos.jpeg';
    else if (lower.includes('red hot')) newName = 'red-hot-rollers.png';
    else if (lower.includes('tete')) newName = 'tete-leal.jpeg';
    else if (lower.includes('sentimental')) newName = 'sentimental-gentlemen.jpeg';
    else if (lower.includes('sun rockets')) newName = 'sun-rockets.jpeg';

    if (newName) {
       fs.renameSync(path.join(srcDir, file), path.join(destDir, newName));
       console.log(`Moved "${file}" to "${newName}"`);
    } else {
       console.log(`No match for: "${file}"`);
    }
  }
});

