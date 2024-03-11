import { getHeroById } from './bases/08-imp-exp'
// console.log('Inicio')

// new Promise( (resolve, reject) =>  {
//     console.log('cuerpo de la promesa')
//     reject('promesa resuelta')
// })
// .then( console.log )
// .catch( console.log )


// console.log('Fin')

const getHeroByIdAsync = (id) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            const hero = getHeroById( id )

            if(!hero)
                reject('Heroe no existe')

            resolve( hero )
        }, 1000);
    })
}

getHeroByIdAsync(3)
    .then( hero =>  {
        console.log(`El heroe es ${ hero.name }`)
    })
    .catch( console.log )