import { Sequelize } from "sequelize";
const sequelize = new Sequelize(`${process.env.DB_URI}`,{
    logging:()=>console.log("connection database stablished")
})


export {sequelize}