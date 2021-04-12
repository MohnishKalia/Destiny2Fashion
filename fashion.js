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
    'Intrepid Inquiry Hood': 'https://www.light.gg/db/items/4071506690/intrepid-inquiry-hood/',
    "Legacy's Oath Gloves": 'https://www.light.gg/db/items/79460168/legacys-oath-gloves/',
    'Celestial Robes': 'https://www.light.gg/db/items/3721737629/celestial-robes/',
    'Celestial Boots': 'https://www.light.gg/db/items/2889842501/celestial-boots/',
    'Forbidden Visage Bond': 'https://www.light.gg/db/items/1838291479/forbidden-visage-bond/',
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
    'Carbon Blood': 'https://www.light.gg/db/items/1371145733/carbon-blood/',
    'House of Meyrin': 'https://www.light.gg/db/items/3650581587/house-of-meyrin/',
    'Carminica': 'https://www.light.gg/db/items/2378905788/carminica/',
    'Imperial Opulence': 'https://www.light.gg/db/items/2027598066/imperial-opulence/',
};

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
 * @property {string=} mediaFile the file of a media that showcases the loadout
 */

// replace Component with {standard: Component, exotics?: Component[]}

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
            mediaFile: 'media/hunter_standard_fit.mp4',
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
            mediaFile: 'media/hunter_crucible_fit.mp4',
        },
    },
    warlock: {
        'Standard Fit': {
            helmet: {
                itemName: 'Intrepid Inquiry Hood',
                shaderName: 'Carbon Blood',
            },
            gauntlets: {
                itemName: "Legacy's Oath Gloves",
                shaderName: 'House of Meyrin',
            },
            chest: {
                itemName: 'Celestial Robes',
                shaderName: 'House of Meyrin',
            },
            legs: {
                itemName: 'Celestial Boots',
                shaderName: 'Carminica',
            },
            classItem: {
                itemName: 'Forbidden Visage Bond',
                shaderName: 'Imperial Opulence',
            },
            mediaFile: 'media/warlock_standard_fit.mp4',
        },
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
            mediaFile: 'media/titan_standard_fit.mp4',
        },
    },
};

for (const character of Object.keys(fashion)) {
    for (const loadout of Object.keys(fashion[character])) {
        for (const armorPiece of Object.keys(fashion[character][loadout])) {
            if (armorPiece === 'mediaFile') continue;
            const component = fashion[character][loadout][armorPiece];
            component.itemUrl = itemsToUrls[component.itemName];
            component.shaderUrl = shadersToUrls[component.shaderName];
        }
    }
}

export { fashion };
