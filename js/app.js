'use strict';

const imagenes = document.querySelectorAll("#galeria img");
const botonSalir = document.getElementById("salir");
const botonDerecha = document.getElementById("derecha");
const botonIzquierda = document.getElementById("izquierda");
const contenedorPrincipal = document.getElementById("contenedor-principal");
const imagenActiva = document.getElementById("imagen-activa");
let indiceImagen = 0;

const abrirContenedor = (e) =>
{
    imagenActiva.src = e.target.src;//se le indice que el que esta siendo presionado le pase su src a la imagen activa
    contenedorPrincipal.style.display = "flex";
    indiceImagen = Array.from(imagenes).indexOf(e.target);//estamos diciendo que vamos a convertir a imagenes en un array con el metodo array from
    //y al ser un array podemos usar el metodo indexof y le pasamos la imagen a la que se le hizo click osea el target y asi obtenemos el indice
}

imagenes.forEach((imagen)=>
{
    imagen.addEventListener("click", abrirContenedor);
});

botonSalir.addEventListener("click", () =>
{
    contenedorPrincipal.style.display = "none";
});

botonIzquierda.addEventListener("click", () =>
{
    if(indiceImagen == 0)
    {
        indiceImagen = imagenes.length;
    }

    imagenActiva.src = imagenes[indiceImagen -1].src; // le decimos que al hacer click en al flecha
    // adelante una imagen osea cambiar el indice por el siguiente
    indiceImagen--;
});

botonDerecha.addEventListener("click", () =>
{
    if(indiceImagen == imagenes.length -1)
    {
        indiceImagen = -1;
    }

    imagenActiva.src = imagenes[indiceImagen + 1].src; // le decimos que al hacer click en al flecha
    // adelante una imagen osea cambiar el indice por el siguiente
    indiceImagen++;
});

