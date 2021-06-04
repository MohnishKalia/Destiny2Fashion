// @ts-check
import { itemsToUrls, shadersToUrls } from './data.js';

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
                        shaderName: 'Default Shader',
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
