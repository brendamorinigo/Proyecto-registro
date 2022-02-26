const button= document.querySelector("#btn-IniciarSesion")
const btnRegistro= document.querySelector("#btn-Registrarse")
let uCuit=""
let uContrasenia=""
/* variables de registro */

/* variable warning */
let warning= document.querySelector("#warning")

const arrayDatos= [];

function iniciarSesion(e){
    e.preventDefault();
    uCuit=document.querySelector('#cuit').value;
    uContrasenia= document.querySelector('#password').value;
    acceso= validarUsuario(uCuit, uContrasenia)
}

function validarUsuario (){
  for (let i=0; i<arrayDatos.length; i++){
      if( uCuit== arrayDatos[i].cuit && uContrasenia==arrayDatos[i].pass){
          window.location.href="registroDeBicicletas.html"
      } 
      else if( uCuit!= arrayDatos[i].cuit && uContrasenia!=arrayDatos[i].pass){
        warning.innerHTML= "<p>Alguno de los datos ingresados no son validos</p>"
      }
  }
}
button.addEventListener("click", iniciarSesion);  

/* registro de usuario */

function registrarUsuario(e){
    e.preventDefault();
    let cuitRegistro= document.querySelector("#cuit-registro").value;
    let nombreRegistro= document.querySelector("#nombre-registro").value;
    let passRegistro=document.querySelector("#pass-registro").value;
    let correoRegistro=document.querySelector("#correo-registro").value;
    let nuevoUsuario= new DatosUsuario(cuitRegistro, nombreRegistro, passRegistro, correoRegistro)
    arrayDatos.push(nuevoUsuario);
}
btnRegistro.addEventListener("click", registrarUsuario);

