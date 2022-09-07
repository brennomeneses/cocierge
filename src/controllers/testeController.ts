import { Request, Response } from "express";

const testeController = {
    handle: (request: Request, response: Response)=>{
        response.json({funciona: "sim"});
    }
}

export default testeController;
