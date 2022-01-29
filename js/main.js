/* VARIABLES */
const bici1= new DatosBici("philco", "amarillo", 29, "ONCE")
const bici2= new DatosBici("slp", "negra", 27, "BERISSO")
const bici3= new DatosBici("venzo", "blanco", 29, "LA PLATA")
const bici4= new DatosBici("lince", "blanco", 27.5, "ROMERO" )
const bici5= new DatosBici("raleig", "blanco", 27.5, "QUILMES" )
const bici6= new DatosBici("kawasaki", "blanco", 29, "LA PLATA" )
var valor;
let buscarBici;

/* DOM */
const btnBuscador= document.getElementById("btn");
const seccionResultado= document.querySelector(".resultado");

/* ARRAY */
const bicicletas= [];
bicicletas.push(bici1, bici2, bici3, bici4, bici5, bici6);

/* Funciones */
btnBuscador.addEventListener("click", () => { 
  var input = document.getElementById("buscador");
  valor = input.value;
  alert(valor);
});

function imprimirProductos(array){
    array.forEach(cadaItem => {
        let div =document.createElement("div")
        div.classList.add("containerRes")
        div.innerHTML += `
        <p>${cadaItem.marca} </p>
        <p>${cadaItem.color}</p>
        <p>${cadaItem.rodado}</p>`
        seccionResultado.appendChild(div)

    });
}
imprimirProductos(bicicletas);


/* for(let resultado of bicicletas){
    let div= document.createElement("div");
    div.innerHTML= 
    `<p>${resultado.marca} </p>
     <p>${resultado.color} </p>
     <p>${resultado.rodado}</p>`
     seccionResultado.appendChild(div)
} */


/* function buscador(palabraclave){
    buscarBici= bicicletas.filter((bici)=>bici.marca== valor); 
    }
 */

/* LLAMADA A FUNCIONES */

