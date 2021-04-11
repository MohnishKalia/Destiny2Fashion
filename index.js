import { fashion } from './fashion.js';

console.log(fashion);

for (const character of Object.keys(fashion)) {
    const charElt = document.getElementById(character);
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = JSON.stringify(fashion[character], null, 2);
    pre.appendChild(code);
    charElt.appendChild(pre);
}
