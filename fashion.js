// @ts-check
import { itemsToUrls } from './data';

// const itemsToUrls = {
//     'Virtuous Mask': 'https://www.light.gg/db/items/90191153/virtuous-mask/',
//     'Canis Luna Grips': 'https://www.light.gg/db/items/1633261020/canis-luna-grips/',
//     'Intrepid Discovery Vest': 'https://www.light.gg/db/items/3254010962/intrepid-discovery-vest/',
//     'Luxe Riders': 'https://www.light.gg/db/items/952534832/luxe-riders/',
//     'Steeplechase Cloak': 'https://www.light.gg/db/items/3675842925/steeplechase-cloak/',
//     'Solstice Mask (Magnificent)': 'https://www.light.gg/db/items/3742741341/solstice-mask-magnificent/',
//     'Cunning Rivalry Cloak': 'https://www.light.gg/db/items/195422190/cunning-rivalry-cloak/',
//     'Virtuous Helm': 'https://www.light.gg/db/items/3324052357/virtuous-helm/',
//     'Siegebreak Gauntlets': 'https://www.light.gg/db/items/377715970/siegebreak-gauntlets/',
//     'Phoenix Battle Ornament': 'https://www.light.gg/db/items/3440657549/phoenix-battle-ornament/',
//     'Siegebreak Greaves': 'https://www.light.gg/db/items/2463438524/siegebreak-greaves/',
//     'Virtuous Mark': 'https://www.light.gg/db/items/3173709985/virtuous-mark/',
//     'Intrepid Inquiry Hood': 'https://www.light.gg/db/items/4071506690/intrepid-inquiry-hood/',
//     "Legacy's Oath Gloves": 'https://www.light.gg/db/items/79460168/legacys-oath-gloves/',
//     'Celestial Robes': 'https://www.light.gg/db/items/3721737629/celestial-robes/',
//     'Celestial Boots': 'https://www.light.gg/db/items/2889842501/celestial-boots/',
//     'Forbidden Visage Bond': 'https://www.light.gg/db/items/1838291479/forbidden-visage-bond/',
//     'Hrafnagud': 'https://www.light.gg/db/items/2549526496/hrafnagud/',
//     'Mask of Bakris': 'https://www.light.gg/db/items/1619425569/mask-of-bakris/',
//     'Orpheus Rig': 'https://www.light.gg/db/items/193869523/orpheus-rig/',
// };

const shadersToUrls = {
    'None': 'javascript:void(0);',
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
    'Valkyrie Zero': 'https://www.light.gg/db/items/737170669/valkyrie-zero/',
    'Cryptic Legacy': 'https://www.light.gg/db/items/2357830697/cryptic-legacy/',
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
 * A collection of possible components for an armor piece.
 * @typedef {Object} ComponentOptions
 * @property {Component} base the base item component
 * @property {Component[]=} exotics the array of alternate exotic item components
 */

/**
 * A loadout, components for each armor piece.
 * @typedef {Object} Loadout
 * @property {ComponentOptions} helmet the component for the helmet
 * @property {ComponentOptions} gauntlets the component for the gauntlets
 * @property {ComponentOptions} chest the component for the chest
 * @property {ComponentOptions} legs the component for the legs
 * @property {ComponentOptions} classItem the component for the classItem
 * @property {string=} mediaFile the file of a media that showcases the loadout
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
                base: {
                    itemName: 'Virtuous Mask',
                    shaderName: 'Ruin Wreath',
                },
                exotics: [
                    {
                        itemName: 'Mask of Bakris',
                        shaderName: 'None',
                    },
                    {
                        itemName: 'Hrafnagud',
                        shaderName: 'Valkyrie Zero',
                    },
                ],
            },
            gauntlets: {
                base: {
                    itemName: 'Canis Luna Grips',
                    shaderName: 'Satou Tribe',
                },
            },
            chest: {
                base: {
                    itemName: 'Intrepid Discovery Vest',
                    shaderName: 'Satou Tribe',
                },
            },
            legs: {
                base: {
                    itemName: 'Luxe Riders',
                    shaderName: 'Metro Shift',
                },
                exotics: [
                    {
                        itemName: 'Orpheus Rig',
                        shaderName: 'Cryptic Legacy',
                    },
                ],
            },
            classItem: {
                base: {
                    itemName: 'Steeplechase Cloak',
                    shaderName: 'Skele-Ghaul',
                },
            },
            mediaFile: 'media/hunter_standard_fit.mp4',
        },
        'Crucible Fit': {
            helmet: {
                base: {
                    itemName: 'Solstice Mask (Magnificent)',
                    shaderName: 'Horizons Beyond',
                },
            },
            gauntlets: {
                base: {
                    itemName: 'Canis Luna Grips',
                    shaderName: 'Satou Tribe',
                },
            },
            chest: {
                base: {
                    itemName: 'Intrepid Discovery Vest',
                    shaderName: 'Satou Tribe',
                },
            },
            legs: {
                base: {
                    itemName: 'Luxe Riders',
                    shaderName: 'Metro Shift',
                },
            },
            classItem: {
                base: {
                    itemName: 'Cunning Rivalry Cloak',
                    shaderName: 'Vanguard Marshal',
                },
            },
            mediaFile: 'media/hunter_crucible_fit.mp4',
        },
    },
    warlock: {
        'Standard Fit': {
            helmet: {
                base: {
                    itemName: 'Intrepid Inquiry Hood',
                    shaderName: 'Carbon Blood',
                },
            },
            gauntlets: {
                base: {
                    itemName: "Legacy's Oath Gloves",
                    shaderName: 'House of Meyrin',
                },
            },
            chest: {
                base: {
                    itemName: 'Celestial Robes',
                    shaderName: 'House of Meyrin',
                },
            },
            legs: {
                base: {
                    itemName: 'Celestial Boots',
                    shaderName: 'Carminica',
                },
            },
            classItem: {
                base: {
                    itemName: 'Forbidden Visage Bond',
                    shaderName: 'Imperial Opulence',
                },
            },
            mediaFile: 'media/warlock_standard_fit.mp4',
        },
    },
    titan: {
        'Standard Fit': {
            helmet: {
                base: {
                    itemName: 'Virtuous Helm',
                    shaderName: 'Jacarina',
                },
            },
            gauntlets: {
                base: {
                    itemName: 'Siegebreak Gauntlets',
                    shaderName: 'Endless Glory',
                },
            },
            chest: {
                base: {
                    itemName: 'Phoenix Battle Ornament',
                    shaderName: 'Monochromatic',
                },
            },
            legs: {
                base: {
                    itemName: 'Siegebreak Greaves',
                    shaderName: 'Celestial Dome',
                },
            },
            classItem: {
                base: {
                    itemName: 'Virtuous Mark',
                    shaderName: 'Monochromatic',
                },
            },
            mediaFile: 'media/titan_standard_fit.mp4',
        },
    },
};

for (const character of Object.keys(fashion)) {
    for (const loadout of Object.keys(fashion[character])) {
        for (const armorPiece of Object.keys(fashion[character][loadout])) {
            if (armorPiece === 'mediaFile') continue;
            
            /** @type {ComponentOptions} */
            const componentOptions = fashion[character][loadout][armorPiece];

            componentOptions.base.itemUrl = itemsToUrls[componentOptions.base.itemName];
            componentOptions.base.shaderUrl = shadersToUrls[componentOptions.base.shaderName];

            if (componentOptions.exotics?.length) {
                for (const component of componentOptions.exotics) {
                    component.itemUrl = itemsToUrls[component.itemName];
                    component.shaderUrl = shadersToUrls[component.shaderName];
                }
            }
        }
    }
}

export { fashion };
