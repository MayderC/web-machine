
document.getElementById("title").onmouseover = ()=>{
    
    this.title.classList.add("animate__bounce");
    this.title.classList.add("animate__animated");

    console.log(this.title.classList);

    setTimeout(()=>{
        this.title.classList.remove("animate__bounce");
        this.title.classList.remove("animate__animated");
    }, 1000)

}

document.getElementById("nav__btn").onclick = function(){
    this.classList.toggle("btn_animation");
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
    console.log(contact)

}


