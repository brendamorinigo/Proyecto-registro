const form = document.querySelector("form")
const button= document.querySelector("button")
let uCuit=""
let uContrasenia=""
let nombreRegistro= document.querySelector("#nombre-registro");
let cuitRegistro= document.querySelector("#cuit-registro");
let apellidoRegistro=document.querySelector("#apellido-registro")
let correoRegistro=document.querySelector("#correo-registro");

const arrayDatos= [
    {nombre: "ADRIAN", cuit:27401858151, pass:"185815bdm"},
    {nombre: "ALESSIO", cuit:271658154, pass:"5698asdfgk"}
]

function iniciarSesion(){
    uCuit=document.querySelector('#cuit').value;
    uContrasenia= document.querySelector('#password').value;
    acceso= validarUsuario(uCuit, uContrasenia)
}

function validarUsuario (){
  for (let i=0; i<arrayDatos.length; i++){
      if( uCuit== arrayDatos[i].cuit && uContrasenia==arrayDatos[i].pass){
          window.location.href="registroDeBicicletas.html"
      } 
      else{
          console.log("datos incorrectos")
      }
  }
}
button.addEventListener("click", iniciarSesion);  

/* registro de usuario */
const nuevoRegistro=[];

function registrarUsuario (e) {
    e.preventdefault();
    const nuevoUsuario= new DatosUsuario(cuitRegistro, nombreRegistro, apellidoRegistro, correoRegistro)
    push.arrayDatos(nuevoUsuario)
}