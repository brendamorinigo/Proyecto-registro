/* DOM/ VARIABLES*/
const bici1= new DatosBici("PHILCO", "AMARIILO", 29, "ONCE")
const seccionResultado= document.querySelector("#resultadoBuscador");
const selectMarca= document.querySelector(".form-select");
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
  imprimirProductos(bicicletas.filter(elemento=>elemento.color== selectColor.value))
})

selectRodado.addEventListener('change', ()=>{
  imprimirProductos(bicicletas.filter(elemento=>elemento.rodado== selectRodado.value))
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

  const nuevoRegistro= new DatosBici(marcaIngresada,colorIngresado,rodadoIngresado,ubicacionIngresada)
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

/* AJAX */

const URL= "http://api.weatherunlocked.com/api/current/ar.M5500HKA?lang=es&app_id=21da7596&app_key=e07917f396cb606b9370a612aba1cce4"

$("body").prepend('<button id="btn1" class="btn-clima">Traer datos</button>');

$("#btn1").click(()=>{
    $.get(URL, function (respuesta, estado){
        let dato= respuesta;
          console.log(respuesta)
          $("body").prepend(`<div class="clima">
           <h3 class="titulo-clima">Temperatura actual: ${dato.temp_c}°C</h3>
           <h3 class="titulo-clima">Humedad actual: ${dato.humid_pct}%</h3>
           </div>`)
    })
}) 



