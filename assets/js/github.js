let url = "https://api.github.com/users/MayderC/repos"


async function getRepos(url) {
	try {
		const response = await fetch(url)
		const data = await response.json()
		const nameRepos = data.map(d => d.name)
		return nameRepos
	} catch (error) {
		//console.log(error)
	}
}

function preparePromise(name) {
	const arrayPromises = []
	let url3 = 'https://api.github.com/repos/MayderC'
	for (let i in name) {
		arrayPromises.push(fetch(`${url3}/${name[i]}/languages`).then(response => response.json()))
	}
	return arrayPromises;
}

async function getPercent(url) {
	try {
		const names = await getRepos(url)
		let namesToPromises = []
		let promises = []

		//Filtro de repos a omitir
		namesToPromises = names.filter(n => n != "uptask" && n != "MayderC" && n != "33-js-concepts")
		promises = preparePromise(namesToPromises)

		return { promises, namesToPromises }
	} catch (error) {
		//console.log(error)
	}
}

async function getData(url) {
	try {
		let { promises, namesToPromises } = await getPercent(url)
		let infoArray = []

		Promise.all(promises).then(languajes => {

			for (let i in languajes) { infoArray.push({ name: namesToPromises[i], data: languajes[i] }) }
			prepareChart(infoArray)

		})
	} catch (error) {
		//console.log(erro)
	}
}


getData(url)


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
