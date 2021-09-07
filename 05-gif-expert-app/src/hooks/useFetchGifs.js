import { useState } from "react"

/**
    *  Hook para obtener imagen y pantalla de carga de manera automática.
*/
export const useFetchGifs = () => {
    const [state, setstate] = useState( {
        data: [],
        loading: true
    })

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5],
    //         loading: false
    //     })
    // }, 3000);

    return state;
}