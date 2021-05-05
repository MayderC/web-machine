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
                this.printAvatar(data)

            }).catch( error => console.error(error))
    }

    getRepos(){
        fetch("https://api.github.com/users/MayderC/repos")
        .then(response =>response.json())
        .then( data => {
            console.log(data)
        }).catch( error => {
            console.error(error)
        })
    }

    printRepositories(data, config){
        

    }



    printAvatar(data){
        console.log(this.id_avatar_dom)
        document.getElementById(this.id_avatar_dom).innerHTML = `<img class="container__img" src="${data.avatar_url}" alt="avatar_github">`
        document.getElementById("id_name_github").innerHTML = `${data.login}`
    }

}

//let consulta = new Consulta("img_avatar")
//consulta.getData("https://api.github.com/users/MayderC")
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 20, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 3
        }]
    }
});