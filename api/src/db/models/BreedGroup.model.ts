import { DataTypes } from "sequelize";
import { sequelize } from "../config/db-connection";

const BreedGroup = sequelize.define("breed_group", {
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
})

export {BreedGroup}