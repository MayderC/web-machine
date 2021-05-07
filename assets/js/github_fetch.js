class Consulta {
	constructor() {
		// elementos del dom

		// lista o array de repositorios
		this.repositorios = [];
	}
	// Metodo que hace peticion a api.

	getData(uri, callback) {
		fetch(uri)
			.then((response) => response.json())
			.then((data) => {
				this.repositorios = data;

				callback(null, this.repositorios);
			})
			.catch((error) => {
				let error_api = new Error(error);
				return callback(error_api, null);
			});
	}
}
//Estructura de URL para lenguajes usados y su porcentaje
//https://api.github.com/repos/MayderC/App_contactos/languages

let consulta = new Consulta();
 let uri = "https://api.github.com/users/MayderC/repos"
consulta.getData(
	uri,
	(error, response) => {
		if (error) { return; }

		let namesOfRepoAndRepo = [];


		for (let i in response) {
			if (response[i].name == undefined) { return; }

			
			let nombre = `https://api.github.com/repos/MayderC/${response[i].name}/languages`
			//let nombre = `http://127.0.0.1:5501/localdata/${response[i].name}.json`;

			if (
				response[i].name != "MayderC" &&
				response[i].name != "MayderC.github.io"&&
				response[i].name != "uptask"
			) {
				consulta.getData(nombre, (error2, response2) => {
					if (error2) {
						return;
					}

					namesOfRepoAndRepo.push({"name": response[i].name, "data": response2})

					if(i == response.length-1){
						prepareChart(namesOfRepoAndRepo);
					}
				});
			}
		}
	}
);

function prepareChart(data) {

	let labels = [];
	let dataValue = [];
	let globalArray = []

	for(let i = 0; i < data.length; i++ ){

		labels.push(Object.keys(data[i].data))
		dataValue.push(Object.values(data[i].data))
	}


	let newColors = []
	
	for(let i =0; i < labels.length; i++){
		
		newColors = getColorFrom(labels.length);
		generateElementDom(data[i].name);
		
	}
	for(let i =0; i < labels.length; i++){
		
		printChart(labels[i], dataValue[i], newColors, data[i].name)
	}



	console.log(arrayChart)


}

let arrayChart = []
function printChart(labels, data, colors, id){

	Chart.defaults.font.size = 16;
	Chart.defaults.color = "white";


		new Chart(document.getElementById(id), {
			type: "pie",
			data: {
				labels: labels,
				datasets: [
					{
						data: data,
						backgroundColor: colors,
						borderWidth: 5,
					},
				],
			},
		})
	

}

function getColorFrom(n) {
	const colors = [
		"#92F0A1",
		"#585186",
		"#F02996",
		"purple",
		"#7DF029",
		"#29EDF0",
		"#2956F0",
		"#59B7D5",
		"#15657F",
	];

	return colors.slice(0, n);
}

function generateElementDom(name) {
	const cardContainer = document.getElementById("card_container");

	let htmlString = ``;

		htmlString = `
		<div class="proyects__item">

			<div class="proyects__header">

				<div class="proyects__img">
					<img src="https://avatars.githubusercontent.com/u/44930667?v=4" alt="">
				</div>
				<div class="header__text--user">
					<p>MayderC</p>
				</div>
				<div class="header__text--title_repo">
				</div>
				
				</div>
				<div class="proyects__body">
				<p>${name}</p>
					<div class="chart-container chart-container">
						<canvas id="${name}" width="400" height="400"></canvas>
					</div>
			</div>

		</div>
		`;
	
	cardContainer.innerHTML += htmlString;
	console.log(htmlString)
}
