import { Router } from 'express';
import testeController from './controllers/testeController';

const routes = Router();

routes.get("/", testeController.handle);

export default routes;