const fs = require('fs');
const osmosis = require('osmosis');

// Search "node" keyword in google
osmosis
.get('https://www.google.fr/search?q=node')
.find('div .rc')
.set({
    'title' : 'h3.r a',
    'url'   : 'h3.r a@href'
})
.data(listing => {
    // Store data in json file
    fs.appendFile('data.json', JSON.stringify(listing), (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
});