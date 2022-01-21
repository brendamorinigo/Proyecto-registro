const bici1= new DatosBici("philco", "amarillo", 29, "ONCE", )
const bici2= new DatosBici("slp", "negra", 27, "BERISSO" )
const bici3= new DatosBici("venzo", "blanco", 29, "LA PLATA")
const bici4= new DatosBici("lince", "blanco", 27.5, "ROMERO" )
const bici5= new DatosBici("raleig", "blanco", 27.5, "QUILMES" )
const bici6= new DatosBici("kawasaki", "blanco", 29, "LA PLATA" )

const bicicletas= [];
bicicletas.push(bici1, bici2, bici3, bici4, bici5, bici6);
let datoIngresado= prompt(`Ingrese el tipo de dato por el cual desea filtrar: Marca, Color, Rodado, Lugar o ingrese TODO si desea ver todo.`).toLowerCase();
let buscarBici;
let preguntar= true;

do {
    if(datoIngresado== "marca"){
        dato= prompt("ingrese la marca").toLowerCase();
        buscarBici= bicicletas.filter((bici)=>bici.marca== dato);
        preguntar= false; 
        console.log(buscarBici)  
    }
    else if(datoIngresado== "color"){
        dato= prompt("ingrese el color").toLowerCase();
        buscarBici= bicicletas.filter((bici)=>bici.color== dato);
        preguntar= false;
        console.log(buscarBici) 
    }
    else if (datoIngresado=="rodado") {
        dato=Number(prompt("ingrese el rodado")) ;
        buscarBici= bicicletas.filter((bici)=>bici.rodado== dato);
        preguntar= false;
        console.log(buscarBici) 
    }
    else if (datoIngresado=="lugar") {
        dato= prompt("ingrese el el lugar").toUpperCase();
        buscarBici= bicicletas.filter((bici)=>bici.ubicacion== dato);
        preguntar= false;
        console.log(buscarBici) 
    }
    else if (datoIngresado=="todo") {
        bicicletas.sort((a,b)=> {
            if(a.marca < b.marca){
                return -1;
            }
            if(a.marca > b.marca){
                return 1;
            }
            return 0;
        })
        console.log(bicicletas)
        preguntar=false
    }
    else{
        alert("No se ha ingresado el dato correctamente")
    }
    } while (preguntar);

