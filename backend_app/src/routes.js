import express from 'express';
import auth from './middlewares/auth.js'; // Substitua pelo caminho correto do seu middleware
import UserController from './controllers/UserController.js';
import SessionController from './controllers/SessionController.js';

const routes = express.Router();

routes.post('/users', UserController.create);
routes.post('/session', SessionController.create);

// rota protegida que usa o middleware de autenticação
routes.get('/users', auth, UserController.index);

export default routes;
