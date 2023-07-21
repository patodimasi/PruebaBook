const express = require('express');
const app = express();
const PUERTO = 3001;


app.listen(PUERTO)
console.log('Server on port 3001');

app.use(express.static('public'));
