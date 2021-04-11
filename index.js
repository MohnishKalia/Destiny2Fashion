import { fashion } from './fashion.js';

function kebabify(string) {
    return string.replace(/\s/g, '-');
}

class ArmorComponent extends HTMLLIElement {
    constructor() {
        self = super();

        const h5 = document.createElement('h5');
        h5.className = 'mb-1';
        h5.textContent = this.getAttribute('armor-piece');

        const laptopDiv = document.createElement('div');
        laptopDiv.className = 'd-none d-md-block';
        laptopDiv.innerHTML = `
            Armor: <a href="${this.getAttribute('itemUrl')}">${this.getAttribute('itemName')}</a> | 
            Shader: <a href="${this.getAttribute('shaderUrl')}">${this.getAttribute('shaderName')}</a>
        `;

        const mobileDiv = document.createElement('div');
        mobileDiv.className = 'd-md-none';
        mobileDiv.innerHTML = `
            <p>Armor: <a href="${this.getAttribute('itemUrl')}">${this.getAttribute('itemName')}</a></p>
            <p>Shader: <a href="${this.getAttribute('shaderUrl')}">${this.getAttribute('shaderName')}</a></p>
        `;

        self.appendChild(h5);
        self.appendChild(mobileDiv);
        self.appendChild(laptopDiv);
    }
}

customElements.define('armor-component', ArmorComponent, { extends: 'li' });

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

            const paneDiv = document.createElement('div');
            paneDiv.className = 'tab-pane fade';
            paneDiv.id = `${character}-${kebabify(loadout)}`;
            paneDiv.setAttribute('role', 'tabpanel');
            paneDiv.innerHTML = `
            <ul class="list-group mb-2">
                <li is="armor-component"
                    class="list-group-item" 
                    armor-piece="Helmet"
                    itemUrl="${currentLoadout.helmet.itemUrl}"
                    itemName="${currentLoadout.helmet.itemName}"
                    shaderUrl="${currentLoadout.helmet.shaderUrl}"
                    shaderName="${currentLoadout.helmet.shaderName}"
                ></li>
                <li is="armor-component"
                    class="list-group-item" 
                    armor-piece="Gauntlets"
                    itemUrl="${currentLoadout.gauntlets.itemUrl}"
                    itemName="${currentLoadout.gauntlets.itemName}"
                    shaderUrl="${currentLoadout.gauntlets.shaderUrl}"
                    shaderName="${currentLoadout.gauntlets.shaderName}"
                ></li>
                <li is="armor-component"
                    class="list-group-item" 
                    armor-piece="Chest"
                    itemUrl="${currentLoadout.chest.itemUrl}"
                    itemName="${currentLoadout.chest.itemName}"
                    shaderUrl="${currentLoadout.chest.shaderUrl}"
                    shaderName="${currentLoadout.chest.shaderName}"
                ></li>
                <li is="armor-component"
                    class="list-group-item" 
                    armor-piece="Legs"
                    itemUrl="${currentLoadout.legs.itemUrl}"
                    itemName="${currentLoadout.legs.itemName}"
                    shaderUrl="${currentLoadout.legs.shaderUrl}"
                    shaderName="${currentLoadout.legs.shaderName}"
                ></li>
                <li is="armor-component"
                    class="list-group-item" 
                    armor-piece="Class Item"
                    itemUrl="${currentLoadout.classItem.itemUrl}"
                    itemName="${currentLoadout.classItem.itemName}"
                    shaderUrl="${currentLoadout.classItem.shaderUrl}"
                    shaderName="${currentLoadout.classItem.shaderName}"
                ></li>
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
