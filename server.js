import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();
console.log(__dirname)

app.use(express.static(__dirname+'/dist'));

app.listen(PORT, () => {
    console.log(`express server listen ${PORT}`);
});