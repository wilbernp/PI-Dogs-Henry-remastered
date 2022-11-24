import { DataTypes } from "sequelize";
import { sequelize } from "../config/db-connection";



const Temperament = sequelize.define("temperament", {
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
    
})

export {Temperament}