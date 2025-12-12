import { Column } from "typeorm";

const { Entity, PrimaryGeneratedColumn } = require("typeorm");

@Entity('dishes')
export class DishesEntity{
    @PrimaryGeneratedColumn()
    restaurentId: number;

    @Column({type:'varchar'})
    restaurentname: string;

    @Column({type:'varchar'})
    city: string;

    @Column({type:'varchar'})
    dishname: string;

    @Column({type:'decimal'})
    dishprice: number;

    @Column({name: 'ordercount',type:'int',default:0})
    ordercount: number;
}