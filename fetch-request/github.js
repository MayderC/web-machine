async function getRepos(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const nameRepos = data.map((d) => d.name);
    return nameRepos;
  } catch (error) {
    //  console.log(error)
  }
}

function preparePromise(name) {
  const arrayPromises = [];
  const url3 = "https://api.github.com/repos/MayderC";
  for (const i in name) {
    arrayPromises.push(
      fetch(`${url3}/${name[i]}/languages`).then((response) => response.json())
    );
  }
  return arrayPromises;
}

function JustMyRepos(n) {
  if (
    n !== "uptask" &&
    n !== "MayderC" &&
    n !== "33-js-concepts" &&
    n !== "CSS2020" &&
    n !== "AspNetCore-Developer-Roadmap" &&
    n !== "faztware"
  ) {
    return n;
  }
}

export const getPercent = async (url) => {
  try {
    const names = await getRepos(url);
    let namesToPromises = [];
    let promises = [];

    //  Filtro de repos a omitir
    namesToPromises = names.filter((n) => JustMyRepos(n));
    promises = preparePromise(namesToPromises);

    return { promises, namesToPromises };
  } catch (error) {
    //  console.log(error)
  }
};
