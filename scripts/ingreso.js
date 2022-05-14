// Local Storage Primera Version!
//function obtener_localstorage(){
//
//    if( localStorage.getItem("infouser") ){
//        const userback = JSON.parse( localStorage.getItem("infouser"));
//        
//        console.log( userback.ci );
//    }else{
//        
//        console.log("No hay entradas")
//    }
//
//}
//
//function guardar_localstorage(){
//    const usuario ={
//        nombre: "Pablo",
//        apellido: "Trucido",
//        ci: "54515499"
//    }
//    localStorage.setItem("infouser", JSON.stringify(usuario))
//}

//Login
function login()
{
    let cedula = document.getElementById("ci").value;
    if(cedula=="admin_mode"){ //Entrada al panel de admin
        mlogin("Redirigiendo");
        setTimeout( function() { window.location.href = "panel.html"; }, 2000 );
        return 1;
    }
    if( localStorage.getItem(cedula)){ //Si la cedula figura con un usuario
        console.log("Yes")
        let userinfo = JSON.parse( localStorage.getItem(cedula)); //Convertimos en Objeto el string
        mlogin("Bienvenido " + userinfo.nombre + " " + userinfo.apellido); /*Mensaje de Bienvenida*/
        setTimeout( function() { window.location.href = "logged.html"; }, 1000 );
        sessionStorage.setItem("LoginN", userinfo.nombre);
        sessionStorage.setItem("LoginA", userinfo.apellido);
    }else{
        mlogin("Cedula Invalida"); /*Mensaje de Error*/
    }

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

