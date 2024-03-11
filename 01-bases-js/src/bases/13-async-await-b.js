import giphyApi from './bases/11-axios'

const getimage = async () => {
    try {
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original

        const img = document.createElement('IMG')

        img.src = url
        
        document.body.append( img )

    } catch (error) {
        console.log('error:', error)
        throw error
    }
}


getimage()