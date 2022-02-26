/* DOM/ VARIABLES*/
const bici1= new DatosBici("PHILCO", "AMARIILO", 29, "ONCE")
const seccionResultado= document.querySelector("#resultadoBuscador");
const selectMarca= document.querySelector("#selectMarca");
const selectColor= document.querySelector("#selectColor");
const selectRodado= document.querySelector("#selectRodado");
const form= document.querySelector("#form");
const mostrarTodo= document.querySelector("#todo");
const btnAñadir= document.querySelector("#btn-cargar")

/* eventos */
btnAñadir.addEventListener('click', cargarDatos)

selectMarca.addEventListener('change', ()=>{
  if(selectMarca.value=='TODO'){
    imprimirProductos(bicicletas)
  } 
  else{
    imprimirProductos(bicicletas.filter(elemento=> elemento.marca==selectMarca.value))
  } 
})

selectColor.addEventListener('change', ()=>{
  if(selectColor.value=='TODO'){
    imprimirProductos(bicicletas)
  }
  else{
    imprimirProductos(bicicletas.filter(elemento=>elemento.color== selectColor.value))
  }
})

selectRodado.addEventListener('change', ()=>{
  if(selectRodado.value=='TODO'){
    imprimirProductos(bicicletas)
  }
  else{
    imprimirProductos(bicicletas.filter(elemento=>elemento.rodado== selectRodado.value))
  }
})

/* ARRAY */
const bicicletas= [];
bicicletas.push(bici1);

/* Funciones */
function cargarDatos(e){
  e.preventDefault()
  let marcaIngresada= document.querySelector("#marca-ingresada").value;
  let colorIngresado= document.querySelector("#color-ingresado").value;
  let rodadoIngresado= document.querySelector("#rodado-ingresado").value;
  let ubicacionIngresada= document.querySelector("#ubicacion-ingresada").value;

  const nuevoRegistro= new DatosBici(marcaIngresada,colorIngresado,rodadoIngresado,ubicacionIngresada);
  bicicletas.push(nuevoRegistro)
  imprimirProductos(bicicletas)
}

function imprimirProductos(array){
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





