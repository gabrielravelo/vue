const nombre = 'Gabriel'
const apellido = 'Ravelo'

const nombreCompleto = `${nombre} ${apellido}`

// console.log(`Resultado: ${1+1}`)

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto ${getSaludo(nombre)}`)