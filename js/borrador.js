/* let pregunta = prompt("Adivina el numero que estoy pensando, esta entre 1 y 10");
while(pregunta!=7) {
alert(`${pregunta} no es el numero correcto, sigue intentando.`)
pregunta = prompt("Vuelve a intentarlo");
} 
 */

do {
    let preguntaBatir = prompt("sigo batiendo? Y / N").toUpperCase();
    if (preguntaBatir == "N") {
      if (batidas > 3) {
        console.log("se te corto la mayonesa");
        continuarBatiendo = false;
      } else if (batidas == 3) {
        console.log("quedo perfecta");
        continuarBatiendo = false;
      } else if (batidas < 3) {
        console.log("falto batir");
        continuarBatiendo = false;
      }
    } else if (preguntaBatir == "Y") {
      batidas++;
      console.log(`Van ${batidas} batidas`);
    } else {
      console.log("ponte a batir!");
    }
  } while (continuarBatiendo);