let cantidad;
let cantidadDeIngrediente;
let precio;
let ingrediente;
let precioIngrediente;

function datosIngresados(){
ingrediente= prompt ("Ingrese el nombre del ingrediente");
precio= Number(prompt("Ingrese el precio por kilo"));
cantidad= Number(prompt("Ingrese la cantidad a utilizar en grs"));
cantidadTotal(cantidad, precio)
resultado(cantidad, ingrediente, precioIngrediente);
}

function cantidadTotal(cantidad, precio) {
precioIngrediente= cantidad*precio/1000;
console.log(precioIngrediente);
}

function resultado(cantidad, ingrediente, precioIngrediente){
alert(`El precio por ${cantidad}grs de ${ingrediente} es de $${precioIngrediente} pesos .`)
}


 datosIngresados();