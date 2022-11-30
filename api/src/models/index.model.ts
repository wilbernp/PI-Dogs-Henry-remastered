import { BreedGroup } from "./BreedGroup.model";
import { Dog } from "./Dog.model";
import { Temperament } from "./Temperaments.model";
import { User } from "./User.model";

User.hasMany(Dog, {foreignKey:"user_id"})
Dog.belongsTo(User)

BreedGroup.hasMany(Dog, {foreignKey:"BreedGroup_id"})
Dog.belongsTo(BreedGroup)

Dog.belongsToMany(Temperament, {through:"Dog_Temperament"})
Temperament.belongsToMany(Dog, {through:"Dog_Temperament"})

export {BreedGroup, Dog, Temperament, User}