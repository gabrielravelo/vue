const saludar = name => `Hello ${ name }`

// console.log( saludar( 'Gaborolo' ) )

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Gabo01'
    }
}

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// const existe = heroes.some( hero => hero.id === 1 )
const { name, id } = heroes.find( hero => hero.id === 1 )

console.log( name )

console.log( getUser() )