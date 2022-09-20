import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ApartmentController {
    async handle(request: Request, response: Response){
        const apartments = await prisma.apartamento.findMany();

        response.json(apartments);
    }

    async store(request: Request, response: Response){
        const { number, flow, owner, buiding } = request.body;

        const apartmentCreated = await prisma.apartamento.create({
            data:{
                flow,
                number,
                buildingId: buiding,
                ownerId: owner
            }
        });

        response.json(apartmentCreated);
    }
}

export default ApartmentController;