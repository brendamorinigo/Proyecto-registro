/* VARIABLES */
const bici1= new DatosBici("PHILCO", "AMARIILO", 29, "ONCE")
const bici2= new DatosBici("SLP", "NEGRO", 27, "BERISSO")
const bici3= new DatosBici("VENZO", "BLANCO", 29, "LA PLATA")
const bici4= new DatosBici("LINCE", "GRIS", 27.5, "ROMERO" )
const bici5= new DatosBici("RALEIGH", "VERDE", 27.5, "QUILMES" )
const bici6= new DatosBici("KAWASAKI", "BLANCO", 29, "LA PLATA" )

/* DOM */
const selectMarca= document.querySelector(".form-select");

selectMarca.addEventListener('change', ()=>{
    console.log(selectMarca.value)
    if(selectMarca.value == 'todo'){
        imprimirProductos(bicicletas);
    }
    else{
        imprimirProductos(bicicletas.filter(elemento=> elemento.marca==selectMarca.value))
    }
})

/* ARRAY */
const bicicletas= [];
bicicletas.push(bici1, bici2, bici3, bici4, bici5, bici6);

/* Funciones */


function imprimirProductos(array){
    const seccionResultado= document.querySelector("#resultadoBuscador");
    seccionResultado.innerHTML=""
    array.forEach(cadaItem => {
        let div =document.createElement("div")
        div.classList.add("containerRes")
        div.innerHTML += 
        `<div class="card" style="width: 18rem;">
        <img src="./imagenes/3d39637d629db755b52cc80a4454.jpg" width="150px" height="200px" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${cadaItem.marca}</li>
          <li class="list-group-item">${cadaItem.color}</li>
          <li class="list-group-item">${cadaItem.rodado}</li>
        </ul>
      </div>`
        seccionResultado.appendChild(div)
    }); 
}

imprimirProductos(bicicletas);




