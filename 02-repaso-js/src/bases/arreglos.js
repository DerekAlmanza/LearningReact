/* Arreglos. */

let arreglo = [1,2,3,4];

// Añadimos el elemento 5 sin usar push, ya que eso modificaría a ambas variables.
// Forma incorrecta: let arreglo2 = arreglo; 
//                      arreglo2.push(5);

let arreglo2 = [...arreglo,5];

console.log(arreglo);
console.log(arreglo2);

// Ejercicio de multiplicar con map el arreglo2
let dobles = arreglo2.map((x) => {
    return x*2;
})

console.log(dobles);