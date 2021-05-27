/* Async - await */

const getImagen = async() => {

    try {
        const apiKey = '3YLDhXWv1S63xr8KcyczSPq3D3Xh4Ftb';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await res.json();
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        console.error(error);
    }
}


getImagen();