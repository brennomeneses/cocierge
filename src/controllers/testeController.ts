import { Request, Response } from "express";

class TesteController{
    async handle(request: Request, response: Response){
        response.json({funciona: 'sim'});
    }
}

export default TesteController;
