function ingreso(){
    var contrasena=document.getElementById("inputPassword").value;
    var usuario=document.getElementById("inputEmail").value;
    if (contrasena=="cefa2024"){
        alert ("BIENVENIDO " + usuario);
    }else {
        alert ("ACCESO DENEGADO " + usuario);
    }
}