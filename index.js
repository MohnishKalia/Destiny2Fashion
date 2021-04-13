// @ts-check

import { fashion } from './fashion.js';

/**
 * @param {string} string
 */
function kebabify(string) {
    return string.replace(/\s/g, '-');
}

/**
 * @param {import("./fashion.js").Component} component
 * @param {string} className
 */
function getComponentDisplay(component, className = '') {
    return `
    <div class="col py-2 ${className}">
        <p>Armor: <a href="${component.itemUrl}">${component.itemName}</a></p>
        <p>Shader: <a href="${component.shaderUrl}">${component.shaderName}</a></p>
    </div>
    `;
}

/**
 * @param {string} armorPiece
 * @param {import("./fashion.js").ComponentOptions} componentOptions
 */
function getArmorComponent(armorPiece, componentOptions) {
    const hasExotics = componentOptions.exotics && componentOptions.exotics.length >= 0;

    let innerHTML = getComponentDisplay(componentOptions.base);

    if (hasExotics) {
        for (const component of componentOptions.exotics) {
            innerHTML += getComponentDisplay(component);
        }
    }

    return `
    <li class="list-group-item">
        <h5 class="mb-1">${armorPiece}</h5>
        ${hasExotics ? '<p class="text-muted">First armor piece is the base value.</p>' : ''}
        <div class="container">
            <div class="d-none d-md-block">
                <div class="row row-cols-3">
                    ${innerHTML}
                </div>
            </div>
            <div class="d-md-none">
                <div class="row row-cols-1">
                    ${innerHTML}
                </div>
            </div>
        </div>
    </li>
    `;
}

/**
 * @param {string} mediaFile
 */
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
        nav.className = 'mb-2';

        const navDiv = document.createElement('div');
        navDiv.id = `${character}-nav-tab`;
        navDiv.setAttribute('role', 'tablist');
        navDiv.className = 'nav nav-tabs nav-fill';

        const div = document.createElement('div');
        div.className = 'tab-content';
        div.id = `${character}-nav-tabContent`;

        for (const loadout of Object.keys(fashion[character])) {
            /** @type {import('./fashion.js').Loadout} */
            const currentLoadout = fashion[character][loadout];

            const a = document.createElement('a');
            a.className = 'nav-link';
            a.id = `${character}-${kebabify(loadout)}-tab`;
            a.setAttribute('data-toggle', 'tab');
            a.setAttribute('role', 'tab');
            a.href = `#${character}-${kebabify(loadout)}`;
            a.textContent = loadout;
            navDiv.appendChild(a);

            /** @type {[string, keyof Omit<import('./fashion.js').Loadout, 'mediaFile'>][]} */
            const componentBindings = [['Helmet', 'helmet'], ['Gauntlets', 'gauntlets'], ['Chest', 'chest'], ['Legs', 'legs'], ['Class Item', 'classItem']];

            const paneDiv = document.createElement('div');
            paneDiv.className = 'tab-pane fade';
            paneDiv.id = `${character}-${kebabify(loadout)}`;
            paneDiv.setAttribute('role', 'tabpanel');
            paneDiv.innerHTML = `
            <ul class="list-group mb-2">
                ${componentBindings.reduce((prev, val) => prev + getArmorComponent(val[0], currentLoadout[val[1]]), '')}
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
