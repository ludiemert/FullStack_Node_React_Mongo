//import app from './app.js';
//import app from "./app";

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/session', (req, res) => {
  console.log(req.body); // Verifique se os dados estão chegando corretamente
  res.send('Session endpoint reached');
});

app.listen(3333, () => {
  console.log('Service backend running port 3333 🥰');
});
