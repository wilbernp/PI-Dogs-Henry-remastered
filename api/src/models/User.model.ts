import { sequelize } from "@/config/db-connection";
import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from "sequelize";


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare lastname: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: new DataTypes.STRING(50)
    },
    email: {
        type: new DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, { sequelize:sequelize})


