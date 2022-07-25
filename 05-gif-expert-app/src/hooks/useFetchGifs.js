import { useEffect, useState } from "react";
import { obtenerGif } from "../helpers/obtenerGif";

/**
 *  Hook para obtener imagen y pantalla de carga de manera automática.
 */
export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    obtenerGif(categoria).then((imagenes) => {
      setState({
        data: imagenes,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
