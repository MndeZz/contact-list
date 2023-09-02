// Creacion Del Array Con Algunos Contactos
let listaContactos = ["juan vazquez", "eddy flores", "jose ortiz", "isaac sanchez"];
document.write(`Lista De Contactos Original:    ${listaContactos}`);
//Creacion De La Funcion Para Agregar Un Contacto
function agregarContacto() {
    let agregarContacto = document.getElementById("agregarContacto");
    let contacto = agregarContacto.value;
    listaContactos.unshift(contacto);

    let secctionlement = document.getElementById("preb-array");
    secctionlement.innerHTML = `Se Agrego Un Contacto a La Lista: ${listaContactos}`;
}
//Creacion De La Funcion Para Eliminar Un Contacto
function eliminarContacto() {
    let eliminarContacto = document.getElementById("eliminarContacto");
    let contacto = eliminarContacto.value;

    let indice = listaContactos.indexOf(contacto);

    if (indice !== -1) {
        listaContactos.splice(indice|0, 1);
    }

    let secctionlement = document.getElementById("preb-array");
    secctionlement.innerHTML = `Se Elimino Un Contacto a La Lista: ${listaContactos}`;
}
//Creacion De La Funcion Para Mostrar El Array En La Consola
function mostrar() {
    console.log(`La Lista Es: ${listaContactos}`);
}
