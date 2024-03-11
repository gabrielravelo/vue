import axios from 'axios'

const apiKey = 'RuRMJ0QEndxXRz4w3l5lxbjIy7SHuYUN'
// `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const giphyApi = axios.create( {
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then( resp => {
//         const { data } = resp.data
//         const { url } = data.images.original
        
//         // console.log(data.data)
//         const img = document.createElement('IMG')

//         img.src = url
        
//         document.body.append( img )
//     })