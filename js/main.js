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
const seccionResultado= document.querySelector("#resultadobuscador");

/* ARRAY */
const bicicletas= [];
bicicletas.push(bici1, bici2, bici3, bici4, bici5, bici6);

/* Funciones */
btnBuscador.addEventListener("click", () => {

  var input = document.getElementById("buscador");
  valor = input.value;
});

function buscador(palabraclave){
    buscarBici= bicicletas.filter((bici)=>bici.marca== valor);    
    }


/* LLAMADA A FUNCIONES */
buscador(valor);

