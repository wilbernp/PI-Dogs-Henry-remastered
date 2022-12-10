import { sequelize } from "@/config/db-connection";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export class BreedGroup extends Model<InferAttributes<BreedGroup>, 
InferCreationAttributes<BreedGroup>>{
    declare id: CreationOptional<number>;
    declare name:string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

BreedGroup.init({
    id:{
        type:DataTypes.INTEGER,
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
        type:DataTypes.DATE
    }
}, {sequelize})