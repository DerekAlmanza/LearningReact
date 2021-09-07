/**
    * Obtener gif por medio de peticion https usando fetch. regresa una promesa.
*/
export const obtenerGif = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=3YLDhXWv1S63xr8KcyczSPq3D3Xh4Ftb`;
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })

    return gifs;
}