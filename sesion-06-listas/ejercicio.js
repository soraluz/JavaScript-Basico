const compras = ['arroz', 'azucar', 'leche', 'fideos', 'aceite'];
compras.push("Aceite de Girasol");
console.log(compras);
compras.pop('Aceite de Girasol');
console.log(compras);
const peliculas = [
    {
        titulo: "titulo1",
        director: "director1",
        fecha: "07/01/2023"
    },
    {
        titulo: "titulo2",
        director: "director2",
        fecha: "07/01/2023"
    },
    {
        titulo: "titulo3",
        director: "director3",
        fecha: "07/01/2003"
    }
]
const peli_post=peliculas.filter((peli)=>{
    console.log(peli.fecha)
    return new Date(peli.fecha) > new Date("01/01/2010")
})
console.log(peli_post)
const lista_director=peliculas.map((peli)=>{
    return peli.director
})
console.log(lista_director)
const lista_titulo=peliculas.map((peli)=>{
    return peli.titulo
})
console.log(lista_titulo)

const director_Titulo= lista_director.concat(lista_titulo)
console.log(director_Titulo)

const director_Titulo2= [...lista_director,...lista_titulo]
console.log(director_Titulo2)
