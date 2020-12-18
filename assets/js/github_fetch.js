class Consulta{

    constructor(id_avatar_dom){
        // elementos del dom
        this.id_avatar_dom = id_avatar_dom;

        // lista o array de repositorios
        this.repositorios = []
    }
    // Metodo que hace peticion a api.
     getData(url){
        fetch(url)
            .then( response => response.json())
            .then( data => {
                //metodos que muestran info de la api en el dom
                this.printAvatar(data)
                this.reposCantidad(data)
            }).catch( error => console.error(error))
    }

    printAvatar(data){
        console.log(this.id_avatar_dom)
        document.getElementById(this.id_avatar_dom).innerHTML = `<img class="container__img" src="${data.avatar_url}" alt="avatar_github">`
        document.getElementById("id_name_github").innerHTML = `${data.login}`
    }

    reposCantidad(data){
        document.getElementById("repos").innerHTML =`${data.public_repos}<br> Repositories`
        console.log(data.public_repos)
    }
}

//let consulta = new Consulta("img_avatar")
//consulta.getData("https://api.github.com/users/MayderC")
    