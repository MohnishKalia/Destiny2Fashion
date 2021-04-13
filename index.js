import { fashion } from './fashion.js';

function kebabify(string) {
    return string.replace(/\s/g, '-');
}

function getArmorComponent(armorPiece, itemUrl, itemName, shaderUrl, shaderName) {
    return `
    <li class="list-group-item">
        <h5 class="mb-1">${armorPiece}</h5>
        <div class="d-none d-md-block">
            Armor: <a href="${itemUrl}">${itemName}</a> | 
            Shader: <a href="${shaderUrl}">${shaderName}</a>
        </div>
        <div class="d-md-none">
            <p>Armor: <a href="${itemUrl}">${itemName}</a></p>
            <p>Shader: <a href="${shaderUrl}">${shaderName}</a></p>
        </div>
    </li>
    `;
}

function getLoadoutMedia(mediaFile) {
    return mediaFile ? `
    <li class="list-group-item">
        <h5 class="mb-1">Loadout Preview</h5>
        <div class="embed-responsive embed-responsive-16by9">
            <video autoplay loop muted playsinline class="embed-responsive-item" src="${mediaFile}" alt="${mediaFile}"></video>
        </div>
    </li>
    ` : '';
}

for (const character of Object.keys(fashion)) {
    const charElt = document.getElementById(character);

    if (Object.keys(fashion[character]).length) {
        const nav = document.createElement('nav');
        nav.classList = 'mb-2';

        const navDiv = document.createElement('div');
        navDiv.id = `${character}-nav-tab`;
        navDiv.setAttribute('role', 'tablist');
        navDiv.className = 'nav nav-tabs nav-fill';

        const div = document.createElement('div');
        div.className = 'tab-content';
        div.id = `${character}-nav-tabContent`;

        for (const loadout of Object.keys(fashion[character])) {
            const currentLoadout = fashion[character][loadout];

            const a = document.createElement('a');
            a.className = 'nav-link';
            a.id = `${character}-${kebabify(loadout)}-tab`;
            a.setAttribute('data-toggle', 'tab');
            a.setAttribute('role', 'tab');
            a.href = `#${character}-${kebabify(loadout)}`;
            a.textContent = loadout;
            navDiv.appendChild(a);

            const componentBindings = [['Helmet', 'helmet'], ['Gauntlets', 'gauntlets'], ['Chest', 'chest'], ['Legs', 'legs'], ['Class Item', 'classItem']];

            const paneDiv = document.createElement('div');
            paneDiv.className = 'tab-pane fade';
            paneDiv.id = `${character}-${kebabify(loadout)}`;
            paneDiv.setAttribute('role', 'tabpanel');
            paneDiv.innerHTML = `
            <ul class="list-group mb-2">
                ${componentBindings.reduce((prev, val) => {
                    return prev + getArmorComponent(val[0],
                        currentLoadout[val[1]].itemUrl,
                        currentLoadout[val[1]].itemName,
                        currentLoadout[val[1]].shaderUrl,
                        currentLoadout[val[1]].shaderName)
                }, '')}
                ${getLoadoutMedia(currentLoadout.mediaFile)}
            </ul>
            `;
            div.appendChild(paneDiv);
        }

        nav.appendChild(navDiv);
        charElt.appendChild(nav);
        charElt.appendChild(div);
    } else {
        const p = document.createElement('p');
        p.className = 'mt-2 text-center';
        p.textContent = 'There are no loadouts for this class';
        charElt.appendChild(p);

        // const alertDiv = document.createElement('div');
        // alertDiv.className = 'alert alert-danger';
        // alertDiv.setAttribute('role','alert');
        // alertDiv.textContent = 'There are no loadouts for this class';
        // charElt.appendChild(alertDiv);
    }

    // const pre = document.createElement('pre');
    // const code = document.createElement('code');
    // code.textContent = JSON.stringify(fashion[character], null, 2);
    // pre.appendChild(code);
    // charElt.appendChild(pre);
}
