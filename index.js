const path = require('path');
const express = require('express');

/* CONSTS */
const HOST = 'localhost';
const PORT = 3000;
const PAGES_DIR = path.join(__dirname, 'pages');

/* APP */
const app = express();

/* APP - ROUTES */
app.get('/', (req, res) => {
  res.sendFile(`${PAGES_DIR}/index.html`);
});

app.get('/contact', (req, res) => {
  res.sendFile(`${PAGES_DIR}/contact.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${PAGES_DIR}/about.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${PAGES_DIR}/404.html`);
});

/* APP - SERVER */
app.listen(PORT, HOST, () => {
  console.log(`SERVER RUNNING => http://${HOST}:${PORT}`);
});
