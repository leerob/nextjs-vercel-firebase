const express = require('express');

const server = express();
const port = 9999;

const api = require('./routes/api');

server.use(api);

server.listen(port, (err) => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
});
