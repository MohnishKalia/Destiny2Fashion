// @ts-check

const itemsToUrls = {
    'Virtuous Mask': 'https://www.light.gg/db/items/90191153/virtuous-mask/',
    'Canis Luna Grips': 'https://www.light.gg/db/items/1633261020/canis-luna-grips/',
    'Intrepid Discovery Vest': 'https://www.light.gg/db/items/3254010962/intrepid-discovery-vest/',
    'Luxe Riders': 'https://www.light.gg/db/items/952534832/luxe-riders/',
    'Steeplechase Cloak': 'https://www.light.gg/db/items/3675842925/steeplechase-cloak/',
    'Solstice Mask (Magnificent)': 'https://www.light.gg/db/items/3742741341/solstice-mask-magnificent/',
    'Cunning Rivalry Cloak': 'https://www.light.gg/db/items/195422190/cunning-rivalry-cloak/',
    'Virtuous Helm': 'https://www.light.gg/db/items/3324052357/virtuous-helm/',
    'Siegebreak Gauntlets': 'https://www.light.gg/db/items/377715970/siegebreak-gauntlets/',
    'Phoenix Battle Ornament': 'https://www.light.gg/db/items/3440657549/phoenix-battle-ornament/',
    'Siegebreak Greaves': 'https://www.light.gg/db/items/2463438524/siegebreak-greaves/',
    'Virtuous Mark': 'https://www.light.gg/db/items/3173709985/virtuous-mark/',
};

const shadersToUrls = {
    'Ruin Wreath': 'https://www.light.gg/db/items/2590008185/ruin-wreath/',
    'Satou Tribe': 'https://www.light.gg/db/items/3650581588/satou-tribe/',
    'Metro Shift': 'https://www.light.gg/db/items/3205869476/metro-shift/',
    'Skele-Ghaul': 'https://www.light.gg/db/items/1005594230/skele-ghaul/',
    'Horizons Beyond': 'https://www.light.gg/db/items/51755993/horizons-beyond/',
    'Vanguard Marshal': 'https://www.light.gg/db/items/1514974385/vanguard-marshal/',
    'Jacarina': 'https://www.light.gg/db/items/1046971209/jacarina/',
    'Endless Glory': 'https://www.light.gg/db/items/87646118/endless-glory/',
    'Celestial Dome': 'https://www.light.gg/db/items/2815102895/celestial-dome/',
    'Monochromatic': 'https://www.light.gg/db/items/3205869473/monochromatic/',
};

// /**
//  * A fashion component, with item url and shader url.
//  * @typedef {Object} Component

//  */

/**
 * A fashion component, with item url and shader url.
 * @typedef {Object} Component
 * @property {(keyof (typeof itemsToUrls))} itemName the item name
 * @property {string=} itemUrl the light.gg url to the item
 * @property {(keyof (typeof shadersToUrls))} shaderName the shader name
 * @property {string=} shaderUrl the light.gg url to the shader
 */


/**
 * A loadout, components for each armor piece.
 * @typedef {Object} Loadout
 * @property {Component} helmet the component for the helmet
 * @property {Component} gauntlets the component for the gauntlets
 * @property {Component} chest the component for the chest
 * @property {Component} legs the component for the legs
 * @property {Component} classItem the component for the classItem
 */

/**
 * A collection of loadouts for a class.
 * @typedef {Object.<string, Loadout>} Loadouts
 */

/**
 * The entire fashion collection for the page by class.
 * @typedef {Object} Fashion
 * @property {Loadouts} hunter the loadouts for hunter
 * @property {Loadouts} warlock the loadouts for warlock
 * @property {Loadouts} titan the loadouts for titan
 */

/**
 * @type {Fashion}
 */
const fashion = {
    hunter: {
        'Standard Fit': {
            helmet: {
                itemName: 'Virtuous Mask',
                shaderName: 'Ruin Wreath',
            },
            gauntlets: {
                itemName: 'Canis Luna Grips',
                shaderName: 'Satou Tribe',
            },
            chest: {
                itemName: 'Intrepid Discovery Vest',
                shaderName: 'Satou Tribe',
            },
            legs: {
                itemName: 'Luxe Riders',
                shaderName: 'Metro Shift',
            },
            classItem: {
                itemName: 'Steeplechase Cloak',
                shaderName: 'Skele-Ghaul',
            },
        },
        'Crucible Fit': {
            helmet: {
                itemName: 'Solstice Mask (Magnificent)',
                shaderName: 'Horizons Beyond',
            },
            gauntlets: {
                itemName: 'Canis Luna Grips',
                shaderName: 'Satou Tribe',
            },
            chest: {
                itemName: 'Intrepid Discovery Vest',
                shaderName: 'Satou Tribe',
            },
            legs: {
                itemName: 'Luxe Riders',
                shaderName: 'Metro Shift',
            },
            classItem: {
                itemName: 'Cunning Rivalry Cloak',
                shaderName: 'Vanguard Marshal',
            },
        },
    },
    warlock: {

    },
    titan: {
        'Standard Fit': {
            helmet: {
                itemName: 'Virtuous Helm',
                shaderName: 'Jacarina',
            },
            gauntlets: {
                itemName: 'Siegebreak Gauntlets',
                shaderName: 'Endless Glory',
            },
            chest: {
                itemName: 'Phoenix Battle Ornament',
                shaderName: 'Monochromatic',
            },
            legs: {
                itemName: 'Siegebreak Greaves',
                shaderName: 'Celestial Dome',
            },
            classItem: {
                itemName: 'Virtuous Mark',
                shaderName: 'Monochromatic',
            },
        },
    },
};

for (const character of Object.keys(fashion)) {
    for (const loadout of Object.keys(fashion[character])) {
        for (const armorPiece of Object.keys(fashion[character][loadout])) {
            const component = fashion[character][loadout][armorPiece];
            component.itemUrl = itemsToUrls[component.itemName];
            component.shaderUrl = shadersToUrls[component.shaderName];
        }
    }
}

export { fashion };
