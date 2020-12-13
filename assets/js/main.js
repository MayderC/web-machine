
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

    


}


