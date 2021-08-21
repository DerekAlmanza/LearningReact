/* Async - await */

export const getImagen = async() => {

    try {
        const apiKey = '3YLDhXWv1S63xr8KcyczSPq3D3Xh4Ftb';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await res.json();
        const url = data.images.original.url;

        return url;
        
    } catch (error) {
        // console.error(error);
        return 'No existe url';
    }
}


getImagen();