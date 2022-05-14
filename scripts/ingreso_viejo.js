//Obtener Local Storage//
function obtener_localstorage(){

    if( localStorage.getItem("infouser") ){
        const userback = JSON.parse( localStorage.getItem("infouser"));
        
        console.log( userback.ci );
    }else{
        
        console.log("No hay entradas")
    }

}

function guardar_localstorage(){
    const usuario ={
        nombre: "Pablo",
        apellido: "Trucido",
        ci: "54515499"
    }
    localStorage.setItem("infouser", JSON.stringify(usuario))
}






/*Local Storage*/

//Login
function login()
{
    let cedula = document.getElementById("ci").value;
    if(cedula=="admin_mode"){ //Entrada al panel de admin
        mlogin("Redirigiendo");
        setTimeout( function() { window.location.href = "panel.html"; }, 5000 );
        return 1;
    }
    if( localStorage.getItem("infouser") ){ //Si hay usuarios cargados al sistema se ejecuta todo.
        let userback = JSON.parse( localStorage.getItem("infouser"));
                //Consulta si esta Vacia la CI, si es mayor a 8 digitos, Si tiene Letras, y si es igual a la de un usuario cargado.
        if(cedula=="" || cedula!=userback.ci || cedula.length!=8 || containsAnyLetter(cedula)){
            mlogin("Cedula Invalida"); /*Mensaje de Error*/
        }else{
            mlogin("Bienvenido " + userback.nombre + " " + userback.apellido); /*Mensaje de Bienvenida*/
            return 1;
            }
        }else{ //Si no hay usuarios cargados en el Local Storage tira un alert
            alert("No hay Usuarios Cargados en el Sistema")
        }
    document.getElementById("ci").value = ""; /*Reiniciar campo de entrada*/
}

















//Mensaje de Login
function mlogin(mensaje)
{
  document.getElementById("mlogin").value = mensaje;
  document.getElementById("mlogin").style.opacity = "1";

  setTimeout(reset_mlogin, 5000);

  function reset_mlogin()
  {
    document.getElementById("mlogin").value = " ";
    document.getElementById("mlogin").style.opacity = "0";
  }
}

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }

