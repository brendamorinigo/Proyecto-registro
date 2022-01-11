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