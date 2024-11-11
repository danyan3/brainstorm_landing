const path = require('path');
const express = require('express');

const PORT = 3000;
const BUILD_FOLDER = 'build';
const app = express();

app.use(express.static(path.join(__dirname, BUILD_FOLDER)));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, BUILD_FOLDER, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});