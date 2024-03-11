
const apiKey = 'RuRMJ0QEndxXRz4w3l5lxbjIy7SHuYUN'

// https://api.giphy.com/v1/gifs/random?api_key=RuRMJ0QEndxXRz4w3l5lxbjIy7SHuYUN


fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
    .then( resp => resp.json())
    .then( ({ data }) =>  {
        const { url } = data.images.original

        const img = document.createElement('IMG')

        img.src = url
        
        document.body.append( img )
    })
    .catch( e => console.log( e ) )