
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
}
