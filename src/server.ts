import express from 'express';
import { env } from './env';

const app = express();
const t;

app.listen(env.SERVER_PORT, () => console.log('Servidor rodando 🚀'));
