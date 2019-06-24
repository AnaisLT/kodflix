const express = require('express');
const app = express();
const port = 3000;
const getShows = require('./tvshows');

app.get('/rest/tvshows', (req, res) => res.send(getShows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));