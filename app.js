const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Merde à celui qui lit !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
