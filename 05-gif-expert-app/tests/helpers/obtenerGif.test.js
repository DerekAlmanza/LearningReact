import { obtenerGif } from "../../src/helpers/obtenerGif";

describe("Pruebas en obtenerGif", () => {
  test("Debe retornar un arreglo de gifs ", async () => {
    const gifs = await obtenerGif("matrix");

    expect(gifs.length).toBeGreaterThan(0); // Para comprobar que no nos devolverá un arreglo vacío
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
