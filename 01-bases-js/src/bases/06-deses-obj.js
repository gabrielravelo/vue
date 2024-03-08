
const person = {
    name: 'Gabriel',
    age: 20,
    codeName: 'Gaborolo',
    // power: 'programming god'
}

const { name, age, codeName, power = 'No tiene poder' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ({ name, age, codeName, power }) => ({id: 1234, name,age,codeName,power})

console.log( createHero( person ) );