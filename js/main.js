/* DOM/ VARIABLES*/
const bici1= new DatosBici("PHILCO", "AMARILLO", 29, "ONCE")
const seccionResultado= document.querySelector("#resultadoBuscador");
const selectMarca= document.querySelector("#selectMarca");
const selectColor= document.querySelector("#selectColor");
const selectRodado= document.querySelector("#selectRodado");
const mostrarTodo= document.querySelector("#todo");
const btnAñadir= document.querySelector("#btn-cargar");
let numeroInicial= 82347;

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
  let marcaIngresada= document.querySelector("#marca-ingresada").value.toUpperCase();
  let colorIngresado= document.querySelector("#color-ingresado").value.toUpperCase();
  let rodadoIngresado= document.querySelector("#rodado-ingresado").value;
  let ubicacionIngresada= document.querySelector("#ubicacion-ingresada").value.toUpperCase();
  const form= document.querySelector("#formulario-agregar");
  const nuevoRegistro= new DatosBici(marcaIngresada,colorIngresado,rodadoIngresado,ubicacionIngresada);
  bicicletas.push(nuevoRegistro)
  form.reset();
  localStorage.setItem("bicicletas", JSON.stringify(bicicletas));
   
  if(bicicletas.find(element => element.marca!== marcaIngresada)){
    const selectorDeMarca= document.querySelector("#selectMarca");
    let crearOption= document.createElement("option");
    crearOption.setAttribute("value",marcaIngresada);
    crearOption.innerHTML=`${marcaIngresada}`;
    selectorDeMarca.appendChild(crearOption);
  } 
  if(bicicletas.find(element => element.color!== colorIngresado)){
    const selectorDeColor= document.querySelector("#selectColor");
    let crearColor= document.createElement("option");
    crearColor.setAttribute("value",colorIngresado);
    crearColor.innerHTML=`${colorIngresado}`;
    selectorDeColor.appendChild(crearColor);
  }
  if(bicicletas.find(element => element.rodado!== rodadoIngresado)){
    const selectorDeRodado= document.querySelector("#selectRodado");
    let crearRodado= document.createElement("option");
    crearRodado.setAttribute("value",rodadoIngresado);
    crearRodado.innerHTML=`${rodadoIngresado}`;
    selectorDeRodado.appendChild(crearRodado);
  }
}
/* FUNCION PARA IMPRIMIR LOS DATOS GUARDADOS EN MI ARRAY */
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

let local= JSON.parse(localStorage.getItem("bicicletas"));

local.forEach(dato => {
    let datos=document.querySelector("#resultadoLocalStorage");
    let contenedor= document.createElement("div");
    contenedor.innerHTML= `<div class="card" style="width: 18rem;">
    <img src="./imagenes/3d39637d629db755b52cc80a4454.jpg" width="150px" height="200px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${dato.marca}</li>
      <li class="list-group-item">${dato.color}</li>
      <li class="list-group-item">${dato.rodado}</li>
      <li class="list-group-item">Numero de registro: #732${++numeroInicial}</li>
    </ul>
  </div>`;
    datos.appendChild(contenedor);
  }) 
