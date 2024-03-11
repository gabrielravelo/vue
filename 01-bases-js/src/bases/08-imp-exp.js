// import { owners } from './data/heroes';

// const [ dc, marvel ] = owners

// console.log( dc )
// console.log( marvel )

import superHeroes from '../data/heroes'


/* 
PARTE I
getHeroById (id)
funciones de flecha
usar find

PARTE II
getHeroByOwner (owner)
funciones de flecha
usar filter
*/

// console.log( superHeroes )

// Parte I
export const getHeroById = id => superHeroes.find( hero => hero.id === id )
// console.log(getHeroById(2))

// Parte II
export const getHeroByOwner = owner => superHeroes.filter( hero => hero.owner === owner )

// console.log(getHeroByOwner('DC'))


/*
import { getHeroById, getHeroByOwner } from './bases/08-imp-exp'


console.log(getHeroById(1))

console.log(getHeroByOwner('Marvel'))

*/