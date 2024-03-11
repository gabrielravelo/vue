

const characters = ['Goku', 'Vegeta', 'Trunks']

const [ g, v, t, goten = 'no tiene valor' ] = characters

const returnArray = ([ letters, numbers ]) => {
    return [ letters, numbers ]
}

const [ letters, numbers ] = returnArray(['XYZ', 987])

console.log(letters, numbers)