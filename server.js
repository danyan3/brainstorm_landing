import { readFileSync } from 'fs';
import { join } from 'path';
import { createServer } from 'http';
import { createServer as _createServer } from 'https';
import express, { static as static_ } from 'express';

const __dirname = import.meta.dirname;

const BUILD_FOLDER = 'dist';

const app = express();

const options = {
  key: readFileSync(join(__dirname, '/certs/certificate.key')),
  cert: readFileSync(join(__dirname, '/certs/cert.crt')),
};

app.use(static_(join(__dirname, BUILD_FOLDER)));

app.get('*', (_, res) => {
  res.sendFile(join(__dirname, BUILD_FOLDER, 'index.html'));
});

// HTTP server
createServer(app).listen(3000, () => {
  console.log('HTTP Server is running on port 3000');
});

// HTTPS server
_createServer(options, app).listen(3001, () => {
  console.log('HTTPS Server is running on port 3001');
});