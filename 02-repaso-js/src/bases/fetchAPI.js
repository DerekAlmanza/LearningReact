/* Fetch API. */

const apiKey = '3YLDhXWv1S63xr8KcyczSPq3D3Xh4Ftb';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
const imagen = document.getElementById('imagen');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    window.location.reload();
})

peticion
    .then(res => {
        res.json()
            .then( ({data}) => {
                const url = data.images.original.url;
                const img = document.createElement('img');
                img.src = url;
                imagen.appendChild(img);
            })
    })
    .catch(err => console.warn(err));

