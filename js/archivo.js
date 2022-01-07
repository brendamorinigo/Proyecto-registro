let incognita=27;
do {
let pregunta= prompt("Te animas a adivinar que numero estoy pensando?").toUpperCase()
if(pregunta=="NO"){
    alert("Dale, no seas anti.")
    incognita===27
}
if(pregunta=="SI"){
    let numeroIngresado= Number(prompt("El numero que estoy pensando esta entre 0 y 50, cual crees que es?"))
if(numeroIngresado<10){
alert("Segui subiendo estas lejos.")
}else if(numeroIngresado<=20){
    alert("Segui subiendo te vas acercando.")
}else if(numeroIngresado <27){
    alert("CERCA CERCA.")
}else if(numeroIngresado===27)
alert("Excelente, lo adivinaste")
else if(numeroIngresado>=28){
    alert("Te pasaste.")
}else{
    alert("Ingresa el dato solicitado.")
}}
} while (incognita);