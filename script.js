
import {
    barcelona,
    roma,
    paris,
    londres
} from './ciudades.js'

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //remover activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        // agregar la clase "active" al enlace actual
        this.classList.add('active');
        // obtener el contenido correspondiente según el lenalce
        let contenido = obtenerContenido(this.textContent);
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = `Valor de de la inversión: $${contenido.precio}.00`

    });
});

//funcion para traer la información correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona
        ,'Roma':roma
        ,'París':paris
        ,'Londres':londres
    };
    return contenido[enlace];
}
console.log(enlaces);
