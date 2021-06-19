let isTranparent = document.getElementById('nav').classList.contains('nav__tranparent-scrolly')
let isColor = document.getElementById('nav').classList.contains('nav__color-scrolly')
// EVENTO CLICK BOTON RESPONSIVE  ALICACION Y ELIMINACION DE ESTILOS
var boton_responsive = false;

//  variables para Navegacion efecto auto ocultado.
const nav = document.getElementById("nav")
var sc = []
sc[0] = window.scrollY
var y = 0;

let nav_lista = document.getElementById("nav_res");

let home = document.getElementById("home_li");

let isMenuClose = true;


document.getElementById("nav__btn").onclick = function () {
    //Aañade o quita animacion de menu en cada click. abre o cierra
    this.classList.toggle("btn_animation");

    isMenuClose = !isMenuClose;





    // comprueba si esta abierto o cerrado el menu, boton menu.
    boton_responsive = document.getElementById("nav__btn").classList.value.split(" ").includes("btn_animation")

    //FUNCION QUE AÑADE Y QUITA ESTILOS
    estilosMenuResponsive();

    //activa border-top del menu, cuando este se cierra.
    activar_borde(boton_responsive)
}

// Todos los estilos que se deben quitar o añadir al dar click en boton responsive


function estilosMenuResponsive() {

    if (nav_lista.parentNode.classList.contains('nav__color-scrolly') && isColor) {

        nav_lista.classList.toggle('nav3')
    } else {

        nav_lista.classList.toggle("nav2");
    }

    nav_lista.classList.toggle("nav__lista2")
    home.classList.toggle("item__home2")


    let elementos_li = Array.from(document.getElementsByClassName("nav__lista__item"))
    elementos_li.map(function (element) {
        element.classList.toggle("nav__lista__item2");
        element.classList.toggle("li_relative");
    })

    let contact = document.getElementById("btn_contact");
    contact.classList.toggle("item__contact2")

}


// avtiva el border-top del menu. cuando se cierra el menu responsive
function activar_borde(animation) {
    if (animation == false) {
        let menu_border = Array.from(document.querySelectorAll(".nav__lista__item:not(:first-child):not(:last-child)"));
        //document.getElementById("nav").style.cssText = "position: absolute;"
        menu_border.map(function (element) {
            element.style.cssText = "border-top: ; height: ;"
        })
    }
}


/*Quita el border menu  cuando supera los 872px que no cubren las media queries, 
cuando se expande la ventana con el menu responsive abierto  las media queries activan el bordertop 
del menu, pero no deben activarse ya que el menu esta abierto.  esta funcion  las desactiva el superar esa resolusion
y las activa cuando se desactiva los estilos del menu responsive. y la ventana es superior a 872px
*/
function media_resize() {


    let med = window.matchMedia("(min-width: 872px)");
    let btn = document.getElementById("nav__btn");
    let estilo_responsive = btn.classList.value.split(" ").includes("btn_animation")

    if (med.matches && estilo_responsive) {
        let menu_border = Array.from(document.querySelectorAll(".nav__lista__item:not(:first-child):not(:last-child)"));
        menu_border.map(function (element) {
            element.style.cssText = "border-top: 0px; height: 50px"
        })
    }

    if (med.matches && estilo_responsive == false) {
        let menu_border = Array.from(document.querySelectorAll(".nav__lista__item:not(:first-child):not(:last-child)"));
        menu_border.map(function (element) {
            element.style.cssText = "border-top: ; height: "
        })
    }
}


function animacion_scroll() {
    let animacion = document.getElementById('flipX')
    let pos_animacion = animacion.getBoundingClientRect().top;
    let pantalla = window.innerHeight - 200;
    if (pos_animacion < pantalla) {

        animacion.classList.add("flip-img");
    } else if (pos_animacion > pantalla + 50) {
        animacion.classList.remove("flip-img");

    }
}

//cambia el estilo de la barra de navegacion, cerca o lejos del top.

function changeStyleNavOnScroll() {

    isTranparent = document.getElementById('nav').classList.contains('nav__tranparent-scrolly')
    isColor = document.getElementById('nav').classList.contains('nav__color-scrolly')
    //Comprueba si es tranparente o tiene color. para evitar entrar a los if. con scroll

    // mayor a 175 Color
    // Menor a 175 estilo Transparente
    let items_menu = [...document.querySelectorAll('.item__link')]

    if (window.scrollY > 175 && !isColor && isMenuClose) {

        document.getElementsByClassName('link__contact')[0].style.color = "white"
        document.getElementById('btn_contact').style.backgroundColor = ""
        document.getElementById('nav').classList.remove('nav__tranparent-scrolly')
        document.getElementById('nav').classList.add('nav__color-scrolly')

    } else if (window.scrollY < 176 && !isTranparent && isMenuClose) {


        document.getElementById('btn_contact').style.backgroundColor = "white"
        document.getElementById('nav').classList.remove('nav__color-scrolly')
        document.getElementById('nav').classList.add('nav__tranparent-scrolly')
        document.getElementsByClassName('link__contact')[0].style.color = "rgb(36, 36, 36)"

    }
}



function autoHide() {
    y = window.scrollY;
    sc[1] = y

    if (sc[0] < sc[1]) {
        nav.classList.add("hidden")
        sc[0] = sc[1]

        //console.log("Lo oculto")

    } else if (sc[0] > sc[1] + 20) {
        nav.classList.remove("hidden")
        //console.log("Lo muestro", sc[0], sc[1])
        sc[0] = sc[1]
    }
    if (sc[0] < 10) {
        // nav.style.position = "relative"
    } else {

        nav.style.position = "fixed"
    }
}

//evento onreize al cambiar el tamaño del la ventana
window.onresize = () => { media_resize(); }
media_resize()

window.onscroll = () => {
    animacion_scroll();
    autoHide();
    //changeStyleNavOnScroll()
}


