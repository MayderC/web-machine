
function getData(url, callback) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(null, data);
		})
		.catch((error) => {
			let error_api = new Error(error);
			return callback(error_api, null);
		});
}
//Estructura de URL para lenguajes usados y su porcentaje
//https://api.github.com/repos/MayderC/App_contactos/languages


let url = "https://api.github.com/users/MayderC/repos"
// todo: Mejorar esta consulta anidada. todos los nombres de los repos
// todo: consultar porcentaje de lenjuage usado, con todos los nombres - segunda consulta
// todo: los nombres no vienen en la segunda consulta. 
// todo: se necesita el nombre y la data de cada nombre en un solo objeto.
getData(url, (error, response) => {
	if (error) { return; }
	let namesOfRepoAndRepo = [];


	for (let i in response) {
		if (response[i].name == undefined) { return; }

		// Todo: Nombre de todos los repositorios. 
		let nombre = `https://api.github.com/repos/MayderC/${response[i].name}/languages`
		//let nombre = `http://127.0.0.1:5501/localdata/${response[i].name}.json`;

		// todo: repos a omitir
		if (
			response[i].name != "MayderC" &&
			response[i].name != "MayderC.github.io" &&
			response[i].name != "uptask"
		) {
			getData(nombre, (error2, response2) => {
				if (error2) {
					return;
				}

				console.log(response2)
				// Todo: name es una propiedad de la primera consulta. se adjunta con el data de la segunda.
				// Todo: response2 no obtiene el nombre del repositorio y es necesario.

				namesOfRepoAndRepo.push({ "name": response[i].name, "data": response2 })

				//todo: error mejorar esto. entra a la funcion que prepara el grafico, despudes de recorrer...
				// todo: la consulta y antes de terminar el for.
				if (i == response.length - 1) {
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

	for (let i = 0; i < data.length; i++) {

		labels.push(Object.keys(data[i].data))
		dataValue.push(Object.values(data[i].data))
	}

	let newColors = []

	for (let i = 0; i < labels.length; i++) { generateElementDom(data[i].name); }
	for (let i = 0; i < labels.length; i++) {

		newColors = getColorFrom(labels.length);
		printChart(labels[i], dataValue[i], newColors, data[i].name)

	}
}

function printChart(labels, data, colors, id) {

	Chart.defaults.font.size = 16;
	Chart.defaults.color = " ";

	new Chart(document.getElementById(id), {
		type: "doughnut",
		data: {
			labels: labels,
			datasets: [
				{
					label: "",
					data: data,
					backgroundColor: colors,
					borderWidth: 2,
				},
			],
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top',
					}
				}
			}
		},
	})
}

function getColorFrom(n) {

	let simbolos = "0123456789ABCDEF"
	let color = "#"
	let colors = []

	for (let i = 0; i < n; i++) {
		color = "#"
		for (let j = 0; j < 6; j++) {
			color = color + simbolos[Math.floor(Math.random() * 16)];
		}
		colors.push(color)
	}
	return colors
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

				<div class="header__text--title_repo"></div>
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
}
