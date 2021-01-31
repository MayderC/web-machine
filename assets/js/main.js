
// EVENTO CLICK BOTON RESPONSIVE  ALICACION Y ELIMINACION DE ESTILOS
var boton_responsive = false;

//  variables para Navegacion efecto auto ocultado.
const nav = document.getElementById("nav")
var sc = []
sc[0] = window.scrollY
var y = 0;


document.getElementById("nav__btn").onclick = function () {
    //Aañade o quita animacion de menu en cada click. abre o cierra
    this.classList.toggle("btn_animation");


    // comprueba si esta abierto o cerrado el menu, boton menu.
    boton_responsive = document.getElementById("nav__btn").classList.value.split(" ").includes("btn_animation")

    //FUNCION QUE AÑADE Y QUITA ESTILOS
    estilosMenuResponsive();

    //activa border-top del menu, cuando este se cierra.
    activar_borde(boton_responsive)
}

// Todos los estilos que se deben quitar o añadir al dar click en boton responsive
function estilosMenuResponsive() {

    let nav_lista = document.getElementById("nav_res");
    let home = document.getElementById("home_li");

    nav_lista.classList.toggle("nav__lista2")
    nav_lista.classList.toggle("nav2");
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
        animacion.classList.add("visible");
        animacion.classList.add("animate__flipInX");
    } else if (pos_animacion > pantalla) {
        animacion.classList.remove("visible");
        animacion.classList.remove("animate__flipInX");

    }
}

function autoHide() {
    y = window.scrollY;
    sc[1] = y

    if (sc[0] < sc[1]) {
        nav.classList.add("hidden")
        sc[0] = sc[1]

        //console.log("Lo oculto")

    }else if(sc[0] > sc[1]+20){
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

}


