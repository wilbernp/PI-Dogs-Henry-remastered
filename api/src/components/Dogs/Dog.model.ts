import { sequelize } from "@/config/db-connection";
import { 
    DataTypes, 
    Model, 
    InferAttributes, 
    InferCreationAttributes,
    CreationOptional
} from "sequelize";

export class Dog extends Model<InferAttributes<Dog>, InferCreationAttributes<Dog>>{
    declare id: CreationOptional<string>
    declare name:string;
    declare min_life_span:number;
    declare max_life_span:number;
    declare min_height:number;
    declare max_height:number;
    declare min_weight:number;
    declare max_weight:number;
    declare image_url:string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

}

Dog.init({
    id:{
        type: DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    min_life_span:{
        type:DataTypes.INTEGER
    },
    max_life_span:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    min_height:{
        type:DataTypes.INTEGER,
    },
    max_height:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    min_weight:{
        type:DataTypes.INTEGER,
    },
    max_weight:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    image_url:{
        type:DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
},{sequelize})