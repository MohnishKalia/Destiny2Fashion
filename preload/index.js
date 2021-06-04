// @ts-check

const cheerio = require('cheerio');
const axios = require('axios').default;
const fs = require('fs/promises');

/**
 * @param {number} ms
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const light = axios.create({ baseURL: 'https://www.light.gg/db/all' });
const dataSources = {
    'Armor Pieces': '/?f=3,-41,-42,-43',
    'Armor Ornaments': '/?f=9(1742617626),-41,-42,-43',
    'Universal Armor Ornaments': '/?f=10(Titan%20Universal%20Ornament;Hunter%20Universal%20Ornament;Warlock%20Universal%20Ornament),-41,-42,-43',
    'Shaders' : '/?f=9(41),-41,-42,-43',
}

async function getItems() {
    const itemsToUrls = new Map();
    const shadersToUrls = new Map();
    await getDataSource('Armor Pieces', itemsToUrls, 78);
    await getDataSource('Armor Ornaments', itemsToUrls, 8);
    await getDataSource('Universal Armor Ornaments', itemsToUrls, 10);
    await getDataSource('Shaders', shadersToUrls, 7);
    const fileContent = `
    export const itemsToUrls = ${JSON.stringify(Object.fromEntries(itemsToUrls), null, 4)};

    export const shadersToUrls = ${JSON.stringify(Object.fromEntries(shadersToUrls), null, 4)};
    `;
    await fs.writeFile('../data.js', fileContent);
}

/**
 * 
 * @param {keyof dataSources} dataSource 
 * @param {Map<string, string>} map 
 * @param {number} pageLimit 
 */
async function getDataSource(dataSource, map, pageLimit) {
    console.info(`\nObtaining info from data source "${dataSource}"\n`);
    for (let pageNum = 1; pageNum <= pageLimit; pageNum++) {
        console.info(`Getting data for page ${pageNum}`);
        const page = await light.get(`${dataSources[dataSource]}&page=${pageNum}`);
        const $ = cheerio.load(page.data);
        const armor = $('#item-list').children('.item-row');
        console.info(`  ${armor.length - 1} items found`);
        armor.each((i, piece) => {
            const $piece = $(piece);

            if (i === 0) return;
            const itemName = $piece.children('.item-name').children('a');
            if ($piece.children('.item-icon').children('.armor-indicator').text().trim() === '1.0') {
                console.info(`  Armor 1.0 skipped: "${itemName.text()}"`)
                return;
            }

            map.set(itemName.text(), `https://light.gg${itemName.attr('href')}`);
        });
        // console.log(map);
        console.info(`Done with page ${pageNum}`);
        await sleep(10000);
    }
}

getItems();
