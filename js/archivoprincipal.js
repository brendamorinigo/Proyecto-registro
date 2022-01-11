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
