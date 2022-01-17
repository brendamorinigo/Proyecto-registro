/* array de objetos */

const bici1= new DatosBici("philco", "amarillo", 29, "once")
const bici2= new DatosBici("slp", "negra", 27, "berisso" )
const bici3= new DatosBici("venzo", "blanco", 29, "la plata")
const bici4= new DatosBici("lince", "blanco", 27.5, "quilmes" )

const bicicletas= [];
bicicletas.push(bici1, bici2, bici3, bici4);
let datoIngresado= prompt("ingrese la marca")
const buscarMarca= bicicletas.filter((bici)=>bici.marca== datoIngresado );
console.log(buscarMarca);


