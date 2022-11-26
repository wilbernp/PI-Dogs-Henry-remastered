import { Sequelize } from "sequelize";


const sequelize = new Sequelize(`${process.env.DB_URI}`,{
    logging:(msg)=>console.log("connection database stablished")
})


export {sequelize}