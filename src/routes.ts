import { Router } from 'express';
import ApartmentController from './controllers/apartmentController';
import TesteController from './controllers/testeController';
import VisitorController from './controllers/visitorController';

const routes = Router();

const testController = new TesteController();
const visitorController = new VisitorController();
const apartmentController = new ApartmentController();

routes.get("/", testController.handle);
routes.post("/visitors", visitorController.store);
routes.get("/visitors", visitorController.handle);

routes.get("/apartment", apartmentController.handle);
routes.post("/apartment", apartmentController.store);

export default routes;