const fs = require('fs');
const osmosis = require('osmosis');

const results = [];

// Search "node" keyword in google
osmosis
.get('https://www.google.fr/search?q=node')
.find('.g')
.set({
    'title' : 'h3.r a',
    'url'   : 'h3.r a@href'
})
.data(listing => {
    results.push(listing);
})
.done(() => {
    fs.appendFile('data.json', JSON.stringify(results, null, 2), (err) => {
        if (err) throw err;
        console.log('Finished scraping, results added to file "data.json"');
    });
});