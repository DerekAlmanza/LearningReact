/* Desestructuración de arreglos. */

const personajes = ['Harry', 'Ron', 'Hermione'];

const [ , ron, hermione] = personajes;

// console.log(ron, hermione);

// Desestructurar por medio de función.

export const getArreglo = () => {
    return ['ABC', 123];
}

// const [letras, numeros] = getArreglo();
// console.log(letras, numeros);

// Ejercicio 

const useState = (valor) => {
    return [valor, () => { console.log('Tu nombre es'); }]
}

// const [nombre, setNombre] = useState('Lalo');

// setNombre();
// console.log(nombre);