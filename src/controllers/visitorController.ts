import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class VisitorController{
    async handle(request: Request, response: Response){
        const visitors = await prisma.visitante.findMany();
        response.json(visitors);
    }

    async store(request: Request, response: Response){
        const { name, cpf, phone } = request.body;

        const visitorAdded = await prisma.visitante.create({
            data: { 
                cpf,
                name,
                phone}
            });
        response.json(visitorAdded);
    }

    async registerAVisit(request: Request, response: Response){
        const {idApartment, idVisitor } = request.body;

        const visitRegistered = await prisma.visita.create({
            data:{
                idApartment,
                idVisistor: idVisitor,
            }
        });

        response.json(visitRegistered);
    }
}

export default VisitorController;
