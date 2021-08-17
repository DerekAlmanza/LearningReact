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
import RetornarPropTypes from './PropTypesComp';
import RetornarDefaultPropTypes from './DefaultPropTypesComp';

const root = document.getElementById('root');
const root2 = document.getElementById('root2');
const root3 = document.getElementById('root3');
const root4 = document.getElementById('root4');
const root5 = document.getElementById('root5');
const root6 = document.getElementById('root6');

ReactDOM.render( < PrimerComp />,root);
ReactDOM.render( < RetornarFragmento />, root2);
ReactDOM.render( < ImprimirVars />, root3);
ReactDOM.render( < Propiedades saludoProp='Hola este es un prop'/>, root4);
// ReactDOM.render( < PropiedadesOtraForma />, root4);
ReactDOM.render( < RetornarPropTypes saludo={ 123 } saludo2= { 234 } />, root5);
ReactDOM.render( < RetornarDefaultPropTypes />, root6)


