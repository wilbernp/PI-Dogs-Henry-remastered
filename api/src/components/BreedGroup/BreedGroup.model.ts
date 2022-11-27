import { sequelize } from "@/config/db-connection";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export class BreedGroup extends Model<InferAttributes<BreedGroup>, 
InferCreationAttributes<BreedGroup>>{
    declare id: CreationOptional<number>;
    name:string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

BreedGroup.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.STRING
    }
}, {sequelize})