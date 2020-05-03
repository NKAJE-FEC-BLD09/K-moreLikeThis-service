const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8153;

app.listen(port, () => console.log('Listening on port ', port));
app.use(cors());
app.use(bp.json());

