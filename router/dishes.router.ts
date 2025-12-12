import { Between, ILike } from "typeorm";
import { AppDataSource } from "../datasource";
import { DishesEntity } from "../entities/dishes.entity";

const express = require('express');

const dishrouter = express.Router();

const  DishTable = AppDataSource.getRepository(DishesEntity)



dishrouter.get('/dishes', async (req: any, res: any) => {
    try {
        const { name, minPrice, maxPrice } = req.query;
        
        const dishes = await DishTable.find({
            where: {
                dishname: name ? ILike(`%${name}%`) : undefined,
                dishprice: (minPrice && maxPrice) ? Between(Number(minPrice), Number(maxPrice)) : Between(0, Number.MAX_SAFE_INTEGER)
            },
            order: { ordercount: "DESC" },
            take: 10
        });

        if (dishes.length === 0) {
            return res.status(404).send({ 
                message: `${name} is not found for the given price range`
            });
        }

        const formatted = dishes.map(d => ({
            ...d,
            dishprice: Number(d.dishprice),
            ordercount: Number(d.ordercount)
        }));

        res.send({ dishes: formatted });
    } catch (err: any) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});



module.exports = {
    dishrouter
}
