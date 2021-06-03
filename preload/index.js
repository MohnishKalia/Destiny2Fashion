const cheerio = require('cheerio');
const axios = require('axios').default;
const fs = require('fs/promises');

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const light = axios.create({ baseURL: 'https://www.light.gg/db/category' });
// /-7?page=1&f=9(19;39;41;42;43;44;55;57;58)|10(transmat%20effect)|10(ornament),10(armor%20ornament;warlock%20ornament;hunter%20ornament;titan%20ornament)|9(41),,,10(transmat%20effect;ornament;armor%20ornament;warlock%20ornament;hunter%20ornament;titan%20ornament;armor%20ornament;warlock%20ornament;hunter%20ornament;titan%20ornament;transmat%20effect;ornament;transmat%20effect;ornament;transmat%20effect;ornament)#
async function getItems() {
    const itemsToUrls = new Map();
    for (let pageNum = 1; pageNum <= 78; pageNum++) {
        console.info(`Getting data for page ${pageNum}`);
        const page = await light.get(`/20?f=-43&page=${pageNum}`);
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

            itemsToUrls.set(itemName.text(), `https://light.gg${itemName.attr('href')}`);
        });
        // console.log(itemsToUrls);
        console.info(`Done with page ${pageNum}`);
        await sleep(10000);
    }
    const fileContent = `export const itemsToUrls = ${JSON.stringify(Object.fromEntries(itemsToUrls), null, 4)};`;
    await fs.writeFile('../data.js', fileContent);
}

getItems();
