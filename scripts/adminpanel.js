function cargar(a){ //Carga de Menus segun el clickeado.
    var añadircss = document.getElementsByClassName("container-añadir");
    var eliminarcss = document.getElementsByClassName("container-eliminar");
    if (a == 1){ //Si Es Eliminar Usuarios
        añadircss[0].style.zIndex = -2;
        if (eliminarcss.length > 0) {
            if (eliminarcss[0].style.zIndex == "-2" || eliminarcss[0].style.zIndex == ""){
                eliminarcss[0].style.zIndex = 2;
            }else{
                eliminarcss[0].style.zIndex = -2;
            }
        } 
    }else{ //Si es Añadir
        eliminarcss[0].style.zIndex = -2;
        if (añadircss.length > 0) {
            if (añadircss[0].style.zIndex == "-2" || añadircss[0].style.zIndex == ""){
                añadircss[0].style.zIndex = 2;
            }else{
                añadircss[0].style.zIndex = -2;
            }
        }
    }
}
function removeusr(){
    let f = document.getElementById("cielim").value;
    if (f =="" || f.length!=8 || containsAnyLetter(f) || !localStorage.getItem(f)){
        alert("Error al Eliminar el Usuario");
    }else{
        localStorage.removeItem(f)
        alert("Usuario Removido con Exito");
        document.getElementById("cielim").value = "";
    }
}


function adduser(){ //Pre registro y recopilado de datos. (Se puede optimizar!)
    let n = document.getElementById("fn").value;
    let a = document.getElementById("ln").value;
    let c = document.getElementById("ci").value;
    if (c=="" || n=="" || a=="" || c.length!=8 || containsAnyLetter(c) || localStorage.getItem(c)){ //Si hay campos vacios o la ci es erronea
        if (localStorage.getItem(c)){
            alert("Este usuario ya esta ingresado, eliminalo primero!")    
        }else{
            alert("Error, Campos Vacio o Cedula Mal Ingresada");
        }
    }else{ //Se ejecuta el codigo
        alert("¡Usuario Añadido con Exito!")
        register(n, a, c);
        document.getElementById("ci").value = "";
        document.getElementById("fn").value = "";
        document.getElementById("ln").value = "";
        }
    console.log(n + a + c);
}
function register(fn, ln, ci){ //Registar usuario
    if (fn && ln && ci){ //Los campos estan rellenados
        console.log(fn + " "+ ln + " " + ci)
        const usuario = {
            nombre: fn,
            apellido: ln,
            ci: ci
        }
        console.log(usuario)
        localStorage.setItem(usuario.ci, JSON.stringify(usuario))
    }else{
        console.log("No estan todos los datos");
    }
}
function login(ci){ //Prueba del Login
    let userinfo = JSON.parse( localStorage.getItem(ci));

    console.log(userinfo);
}

function regresar(){ //Regresar al index.html
    setTimeout( function() { window.location.href = "index.html"; }, 1500 );
}

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }