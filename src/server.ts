import 'reflect-metadata';
import express from 'express';
import { env } from './env';

const app = express();

app.listen(env.SERVER_PORT, () => console.log('Servidor rodando 🚀'));
