const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("server is running on port 5000");
});

import data from './data/dataService.js';

console.log(data);


app.get('/data/dataService', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        console.log('Data successfully retrieved and sent as a response.');

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});
