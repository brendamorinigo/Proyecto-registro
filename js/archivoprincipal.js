/* let numero= Number(prompt("Ingrese el numero que desea multiplicar."))
let contador= 1;

do{
let resultado= contador * numero;
console.log( `Los resultados son:${numero}*${contador}=${resultado}`)
contador++;
} while(contador <= 10);


 */

let pregunta = prompt("Adivina el numero que estoy pensando, esta entre 1 y 10");
/* while(pregunta!=7) {
alert(`${pregunta} no es el numero correcto, sigue intentando.`)
pregunta = prompt("Vuelve a intentarlo");
} */

do{
    if(pregunta <6){
        alert('Estas muy cerca')
    }
    else if (pregunta>7){
    alert ('Casi, te pasaste')
    }
    else if(pregunta===7) {
        alert("Lo adivinaste")
    }
    else{
        alert( 'No a ingresado un dato')
    } 
} while(pregunta)