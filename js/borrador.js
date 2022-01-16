/* let pregunta = prompt("Adivina el numero que estoy pensando, esta entre 1 y 10");
while(pregunta!=7) {
alert(`${pregunta} no es el numero correcto, sigue intentando.`)
pregunta = prompt("Vuelve a intentarlo");
} 
 */

let continuarViaje= true;
let nafta=10;

  do {
    let preguntarSeguir= prompt(`Tienes ${nafta} Ltrs de nafta, quieres seguir el viaje?`).toLocaleUpperCase();
    if(preguntarSeguir=='NO'){
        if(nafta > 9){
            console.log("Te queda bastante aun.")
            continuarViaje=false
        }
        if(nafta < 9){
            console.log("Te quedan menos de 9ltrs")
            continuarViaje=false
        }
        if(nafta==0) {
            console.log("Vas a tener que empujar")
            continuarViaje=false
        }
    }
    else if(preguntarSeguir=="SI"){
        nafta--;
        console.log(`Te quedan ${nafta} Ltrs`)
    }
    else{
        alert("No ingresaste un dato")
    }
    } while (continuarViaje);

    /* funciones */

let totalConIva;
let cantidadDeCuotas;
let totalCuotas;

let precioProducto= Number(prompt("Ingrese el valor del producto"));

function calcularIva(precio){
    let tipoDeResposable= prompt("Que tipo de responsable es? 1-Inscripto  2-Consumidor final")  
    if(tipoDeResposable == 1){
        totalConIva= precioProducto * 0.40 + precioProducto;        
    }else if(tipoDeResposable==2){
        totalConIva= precioProducto * 0.59 + precioProducto;
    }
}

function calcularCuotas(cuotas){
    let cantidadDeCuotas=Number(prompt("Ingrese la cantidad de cuotas (maximo 12)")) 
    if(cantidadDeCuotas<=12){
        totalCuotas= totalConIva/cantidadDeCuotas;
        alert(`El total es de ${totalConIva} pesos, en ${cantidadDeCuotas} cuotas de ${totalCuotas}`)
    }
    else{
        alert("El maximo permitido es 12 cuotas")
    }   
}

calcularIva();
calcularCuotas();

/* objetos */

/* array    */

let paises =[ "francia", "argentina", "bolivia", "brasil"]
let provincias=["bsas", "cordoba", "mendoza"]
let juntarArray= paises.concat(provincias)  /* concatena los array */
let paisesPorVisitar= paises.slice(0,3)
console.log(paisesPorVisitar) 

/* function cuotas (total){
    totalCuotas= total/cantidadDeCuotas;
}

function productoConIva(producto){
    
} */

let total;
let tipoImpuesto;
let precio;

function datosIngresados(){
precio= Number(prompt("Ingrese el precio"))
tipoImpuesto= prompt("Ingrese si desa iva 21% o 10%")
iva(precio);
}

function iva(precio) {
if(tipoImpuesto=21){
        total= precio*2.1+precio;
    }
else if(tipoImpuesto==10){
        total=precio*0.1+precio;
    }
else{
     alert("Debe seleccionar tipo de IVA")
    }
imprimirDatos(total);
}

function imprimirDatos(total){
alert(`El total con iva es $${total}`)
}

datosIngresados();

/* calcular producto */
