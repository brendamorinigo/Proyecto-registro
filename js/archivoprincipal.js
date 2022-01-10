let continuarViaje= true;
let nafta=10;

  do {
    let preguntarSeguir= prompt(`Tienes ${nafta}ltrs de nafta, quieres seguir el viaje?`).toLocaleUpperCase();
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
        console.log(`Te quedan ${nafta}ltrs`)
    }
     } while (continuarViaje);