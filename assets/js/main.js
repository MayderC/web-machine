
document.getElementById("title").onmouseover = ()=>{
    
    this.title.classList.add("animate__bounce");
    this.title.classList.add("animate__animated");

    setTimeout(()=>{
        this.title.classList.remove("animate__bounce");
        this.title.classList.remove("animate__animated");
    }, 1000)
}


document.getElementById("nav__btn").onclick = function(){

    this.classList.toggle("btn_animation");

    let bandera_btn = this.classList.contains("btn_animation")
    console.log(bandera_btn)

    if(bandera_btn == false && window.matchMedia("(min-width: 872px)").matches){
        this.style.visibility="";
    }


    let nav_lista = document.getElementById("nav_res");
    let home =  document.getElementById("home_li");

    nav_lista.classList.toggle("nav__lista2")
    nav_lista.classList.toggle("nav2");
    home.classList.toggle("item__home2")

    let elementos_li = document.getElementsByClassName("nav__lista__item")

    for(let i =1; i<elementos_li.length; i++){
        elementos_li[i].classList.toggle("nav__lista__item2")
    }

    let contact = document.getElementById("btn_contact");
    contact.classList.toggle("item__contact2")

}

//Simular click a boton de menu maximizar o pasar media querie
// todo arriba de 872 y bajo 890
let mql = window.matchMedia("(min-width: 872px) and (max-width: 880)")
// no se si hay que ponerle evento vamos aprobar
function media_resize(){
    let lista_clases = document.getElementsByClassName("nav__lista__item");
    let bandera = lista_clases[2].classList.contains("nav__lista__item2")
    if(bandera == true){
        //cuando desaparece es true i entra al if para volverle a aplicar vivibility en boton,
        document.getElementById("nav__btn").style.visibility = "visible";
}


window.onresize = ()=>
    media_resize();
}

media_resize()