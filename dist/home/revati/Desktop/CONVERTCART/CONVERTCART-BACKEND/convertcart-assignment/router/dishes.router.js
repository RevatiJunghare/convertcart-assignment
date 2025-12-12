"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const datasource_1 = require("../datasource");
const dishes_entity_1 = require("../entities/dishes.entity");
const express = require('express');
const dishrouter = express.Router();
const DishTable = datasource_1.AppDataSource.getRepository(dishes_entity_1.DishesEntity);
dishrouter.get('/dishes', async (req, res) => {
    try {
        const { name, minPrice, maxPrice } = req.query;
        const dishes = await DishTable.find({
            where: {
                dishname: name ? (0, typeorm_1.ILike)(`%${name}%`) : undefined,
                dishprice: (minPrice && maxPrice) ? (0, typeorm_1.Between)(Number(minPrice), Number(maxPrice)) : (0, typeorm_1.Between)(0, Number.MAX_SAFE_INTEGER)
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
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});
module.exports = {
    dishrouter
};
