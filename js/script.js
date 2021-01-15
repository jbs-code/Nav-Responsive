var visible = false;

iniciar();

function iniciar() {
    var elemento = document.getElementById("menu");

    document.getElementById("botonNav").addEventListener("click", function () {
        if (!visible) {
            elemento.style.display = "flex";
            visible = true;
        }
        else {
            elemento.style.display = "none";
            visible = false;
        }
    });
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
        document.getElementById("menu").style.display = "flex";
    }
    else{
        document.getElementById("menu").style.display = "none";
    }
});
