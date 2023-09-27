// creacion de la lista de contactos, con algunos contactos iniciales
let ListaDeContactos = [
    {id: 0, nombre: "juan", apellido: "vazquez", telefono: "3155-5520", 
    ciudad: "Tegucialpa", direccion:"colonia el sitio, tegucigalpa honduras"},

    {id: 1, nombre: "eddy", apellido: "flores", telefono: "5210-9510", 
    ciudad: "Tegucialpa", direccion:"colonia el sitio, tegucigalpa honduras"},

    {id: 2, nombre: "jose", apellido: "ortiz", telefono: "3150-9540", 
    ciudad: "Tegucialpa", direccion:"colonia el sitio, tegucigalpa honduras"},

    {id: 3, nombre: "isaac", apellido: "sanchez", telefono: "6512-5021", 
    ciudad: "Tegucialpa", direccion:"colonia el sitio, tegucigalpa honduras"},

    {id: 4, nombre: "dennis", apellido: "villalobos", telefono: "5541-9520", 
    ciudad: "Tegucialpa", direccion:"colonia el sitio, tegucigalpa honduras"},
];

// creacion de la funcion para agregar un nuevo contacto
function agregarContacto() {
    let id = document.getElementById("id")
    let ids = id.value
    let idss = parseInt(ids)
    let nombre = document.getElementById("nombre")
    let nombres = nombre.value
    let apellido = document.getElementById("apellido")
    let apellidos = apellido.value
    let telefono = document.getElementById("telefono")
    let telefonos = telefono.value
    let ciudad = document.getElementById("ciudad")
    let ciudades = ciudad.value
    let direccion = document.getElementById("direccion")
    let direccions = direccion.value

    let NuevoContacto = {
        id: idss,nombre: nombres,apellido: apellidos,telefono: telefonos,ciudad: ciudades,direccion: direccions
    }
    
    ListaDeContactos.unshift(NuevoContacto)
    console.clear();
    for (var objeto of ListaDeContactos) {
        console.log(objeto);
      }
}

//Creacion De La Funcion Para Mostrar El Array En La Consola
function mostrar() {
    console.clear();
    for (var objeto of ListaDeContactos) {
        console.log(objeto);
      }
}

// Eliminar un objeto del array por su index
let eliminar = document.getElementById("eliminarContacto")
let eliminars = eliminar.value

function eliminarContacto(){

    console.clear();

    ListaDeContactos.splice(eliminars, 1);
    for (var objeto of ListaDeContactos) {
        console.log(objeto);
    }

}

//modificar un contacto indice-modificar

function modificar_contacto() {
    let indice_modificar = document.getElementById("indice-modificar")
    let indice_modificar_s = indice_modificar.value
    let indice_modificar_s_s = parseInt(indice_modificar_s)

    let id_modificar = document.getElementById("indice-modificar")
    let id_modificar_s = id_modificar.value
    let id_modificar_s_s = parseInt(id_modificar_s)

    let nombre_modificar = document.getElementById("nombre-modificar")
    let nombre_modificar_s = nombre_modificar.value

    let apellido_modificar = document.getElementById("apellido-modificar")
    let apellido_modificar_s = apellido_modificar.value

    let telefono_modificar = document.getElementById("telefono-modificar")
    let telefono_modificar_s = telefono_modificar.value

    let ciudad_modificar = document.getElementById("ciudad-modificar")
    let ciudad_modificar_s = ciudad_modificar.value

    let direccion_modificar = document.getElementById("direccion-modificar")
    let direccion_modificar_s = direccion_modificar.value
//
    let contacto_modificar = ListaDeContactos[indice_modificar_s_s]

    contacto_modificar.id = id_modificar_s_s
    contacto_modificar.nombre = nombre_modificar_s
    contacto_modificar.apellido = apellido_modificar_s
    contacto_modificar.telefono = telefono_modificar_s
    contacto_modificar.ciudad = ciudad_modificar_s
    contacto_modificar.direccion = direccion_modificar_s

    console.clear();
    for (var objeto of ListaDeContactos) {
        console.log(objeto);
    }
}
