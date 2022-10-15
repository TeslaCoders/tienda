console.log("Conectado...............");

// Importar librerias o JS

import {
    listarContactos,
    validarFormulario
} from './helpers/funciones.js';


// Variables globales y constantes

let formulario = document.querySelector('.formulario');   ///  se coloca .  por que es un selector de clase
let enlaceListaContacto = document.querySelector('#lista-contacto');
export let contactos = [];   /// vector 
//export let datos = {};      /// objetos literales




//  query selector es un buscador de etiquetas
let titulo = document.querySelector('#titulo')   //  se coloca # por que tiene un ID en HTML




// Funciones



// Programa Principal


// eventos
document.addEventListener("DOMContentLoaded", () =>{

    contactos = JSON.parse(localStorage.getItem('contactos')) || [];

    console.log(contactos);

    formulario.addEventListener("submit",validarFormulario );  // evento que cada vez que el usuario le de click al submit
    enlaceListaContacto.addEventListener("click", listarContactos)




} );