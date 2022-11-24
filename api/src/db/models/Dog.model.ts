import { DataTypes } from "sequelize";
import { sequelize } from "../config/db-connection";



const Dog = sequelize.define("dog", {
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    min_life_span:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    max_life_span:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    min_height:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    max_height:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    min_weight:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    max_weight:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
})

export {Dog}