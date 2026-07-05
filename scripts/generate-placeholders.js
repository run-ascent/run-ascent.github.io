const fs = require('fs');
const path = require('path');
const events = ['Envirothon', 'Safety', 'Founding'];
const svgTemplate = (text) => `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="#e0e5e2" /><text x="50%" y="50%" font-family="monospace" font-size="20" fill="#101512" text-anchor="middle" dy=".3em">${text}</text></svg>`;

events.forEach(event => {
  const dir = path.join(__dirname, '..', 'public', 'images', 'events', event);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'placeholder-cover.svg'), svgTemplate(event + ' Cover'));
  for(let i=1; i<=6; i++) {
    fs.writeFileSync(path.join(dir, `placeholder-${i}.svg`), svgTemplate(event + ' Image ' + i));
  }
});
console.log('Placeholders created');
