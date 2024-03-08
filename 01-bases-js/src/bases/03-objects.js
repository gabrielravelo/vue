const persona = {
    nombre: 'Gabriel',
    apellido: 'Ravelo',
    edad: 20,
    direccion: {
        ciudad: 'Caracas',
        zip: 1010,
        lat: 13.3232,
        lng: 42.2423
    }
}

const persona2 = { ...persona }

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)