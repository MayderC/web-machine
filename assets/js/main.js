

document.getElementById("title").onmouseover = () => {

    this.title.classList.add("animate__bounce");
    this.title.classList.add("animate__animated");

    setTimeout(() => {
        this.title.classList.remove("animate__bounce");
        this.title.classList.remove("animate__animated");
    }, 1000)

}

document.getElementById("nav__btn").onclick = function () {

    this.classList.toggle("btn_animation");

    let bandera_btn = this.classList.contains("btn_animation")
    if (bandera_btn == false && window.matchMedia("(min-width: 872px)").matches) {
        this.style.visibility = "";
    }

    let nav_lista = document.getElementById("nav_res");
    let home = document.getElementById("home_li");

    nav_lista.classList.toggle("nav__lista2")
    nav_lista.classList.toggle("nav2");
    home.classList.toggle("item__home2")

    let elementos_li = document.getElementsByClassName("nav__lista__item")
    for (let i = 1; i < elementos_li.length; i++) {
        elementos_li[i].classList.toggle("nav__lista__item2")
    }

    let contact = document.getElementById("btn_contact");
    contact.classList.toggle("item__contact2")
}


// Arregla, boton responsive, se mantiene cuando la ventana se hace grande.

function media_resize() {
    let mql = window.matchMedia("(min-width: 872px)")
    let lista_clases = document.getElementsByClassName("nav__lista__item");
    let bandera = lista_clases[2].classList.contains("nav__lista__item2")
    //console.log("el macht es :",mql.matches)
    //console.log(bandera)
    if (bandera == true && mql.matches) {
        //console.log("Ya entre")
        //cuando desaparece es true y entra al if para volverle a aplicar vivibility en boton,
        document.getElementById("nav__btn").style.visibility = "visible";
        let elementos_li = document.getElementsByClassName("nav__lista__item")
        for (let i = 1; i < elementos_li.length; i++) {

        }
        console.log("entre")
    }

}
window.onresize = () => { media_resize(); }
media_resize()

