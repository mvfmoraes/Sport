require('./helpers/results');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotas = require('./src/routes');

const app = express();
let PORTA = 3030;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

rotas(app);

app.listen(PORTA, () => console.log(`Pronto para usar! (http://localhost:${PORTA}/)`));

module.exports = app;