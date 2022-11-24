import { User } from "./User.model";
import { Dog } from "./Dog.model";
import { BreedGroup } from "./BreedGroup.model";
import { Temperament } from "./Temperaments.model";

// 1:N -> N:1 relationship
User.hasMany(Dog, {foreignKey:"userId"})
Dog.belongsTo(User)

BreedGroup.hasMany(Dog, {foreignKey:"breedId"})
Dog.belongsTo(BreedGroup)

// N:M relationship
Dog.belongsToMany(Temperament, {through:"dogs_temperaments"})
Temperament.belongsToMany(Dog, {through:"dogs_temperaments"})

export {User, Dog, BreedGroup, Temperament}