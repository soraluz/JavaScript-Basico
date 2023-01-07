let nombre="Ricardo";
let apellido="Soraluz";
let persona={
    nombre:nombre,
    apellido:apellido
}
localStorage.setItem("persona",JSON.stringify(persona))
sessionStorage.setItem("persona",JSON.stringify(persona))
//document.cookie="usuario=Ricardo; expires="+ new Date(2023, 0, 1).toUTCString()

let objeto1=JSON.parse(localStorage.getItem("persona"))
let objeto2=JSON.parse(sessionStorage.getItem("persona"))
console.log(objeto1.nombre)
console.log(objeto2.apellido)