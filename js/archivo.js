/* var usuario= prompt("Ingrese su nombre")
let saludo = alert ("Hola! "+ usuario + " bienvenido)
 */


/* CONDICIONALES */
/* let numero = 10;

if (numero==10){
    console.log("el numero es diez")
}
else{
    console.log( "el numero no es diez")
} */

let nombre= prompt("Ingre se su nombre");
let edad= prompt("Ingrese su edad");

if (edad < 18){
    alert('Hola '+ nombre + ' puedes tomar solo bebidas sin alcohol.')
}
else if (edad >=18){
alert ('Hola ' + nombre +' podes ponertela en la pera, ya sos mayor.')
}

else{
    alert( 'No ah ingresado un dato')
}