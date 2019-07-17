const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getShows = require('./tvshows');

app.get('/rest/tvshows', (req, res) => res.send(getShows()));

app.use(express.static(path.join(_dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(_dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));