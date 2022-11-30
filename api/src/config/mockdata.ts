import { BreedGroup } from "src2/components/BreedGroup/BreedGroup.model";
import { Dog } from "src2/components/Dogs/Dog.model";
import { Temperament } from "src2/components/Temperaments/Temperaments.model";
import { User } from "src2/components/Users/User.model";

export const mockDB = async () => {
    const promiseUser = User.create({
        email:"email",
        lastname:"lastname",
        name:"name",
        password:"password"
    })

    const promiseTemperaments = Temperament.bulkCreate([
        {name:"temp1"},
        {name:"temp2"},
        {name:"temp2"}
    ])
    const promiseBreeds = BreedGroup.bulkCreate([
        {name:"breed1"},
        {name:"breed2"},
        {name:"breed3"},
        {name:"breed4"},
    ])

    const promiseDogs = Dog.bulkCreate([
        {
            image_url:"image_url1",
            max_height:12,
            min_height:5,
            max_life_span:10,
            min_life_span:7,
            max_weight:20,
            min_weight:14,
            name:"dog1"
        }
    ])

    await Promise.all([promiseUser,promiseTemperaments, promiseBreeds, promiseDogs])
}


