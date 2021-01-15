//var visible = false;
if(screen.width >= 700){
        document.getElementById("menu").style.display = "flex";
    }
iniciar();
function iniciar(){
    
    var elemento = document.getElementById("botonNav");
    elemento.addEventListener("click", mostrarMenu);
}

function mostrarMenu(){
    var elemento = document.getElementById("menu");
    if(elemento.style.display == "none"){
        elemento.style.display="flex";
        //visible=true;
    }
    /*else if(elemento.style.display == "none" && document.getElementById("botonNav").style.display == "none"){
        elemento.style.display="flex";
        //visible=false;
    }*/
    else {
        elemento.style.display="none";
    }
    
}