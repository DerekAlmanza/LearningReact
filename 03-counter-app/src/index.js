// Importamos lo siguiente para poder transformar el archivo js a jsx
import React from 'react';
// Importamos lo siguiente para manipular el DOM
import ReactDOM from 'react-dom';

// Importamos estilos.
import './index.css';

// Importar componentes.
import PrimerComp from './PrimerComp';
import RetornarFragmento from './RetornarFragmentComp';
import ImprimirVars from './ImprimirVarsComp';
import  Propiedades  from './PropiedadesComp';
// import { PropiedadesOtraForma } from './PropiedadesComp';

const root = document.getElementById('root');
const root2 = document.getElementById('root2');
const root3 = document.getElementById('root3');
const root4 = document.getElementById('root4');

ReactDOM.render( < PrimerComp />,root);
ReactDOM.render( < RetornarFragmento />, root2);
ReactDOM.render( < ImprimirVars />, root3);
ReactDOM.render( < Propiedades saludoProp='Hola este es un prop'/>, root4);
// ReactDOM.render( < PropiedadesOtraForma />, root4);


