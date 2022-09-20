import { Router } from 'express';
import TesteController from './controllers/testeController';
import VisitorController from './controllers/visitorController';

const routes = Router();

const testController = new TesteController();
const visitorController = new VisitorController();

routes.get("/", testController.handle);
routes.post("/visitors", visitorController.store);
routes.get("/visitors", visitorController.handle);

export default routes;