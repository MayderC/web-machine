import fetch from 'node-fetch';

const getRepos = async(req, res) =>{


  const response = await fetch('https://api.github.com/users/MayderC/repos')
  const data = await response.json();

  console.log(data)

  const promisesArr = data.map(CreatePromise)

  console.log(promisesArr)

  const repoNames = data.map( d => ({name : d.name}))

  console.log(repoNames)

  const dataLanguages = await Promise.all(promisesArr)
  
  //  const langauges = await  dataLanguages.json()

  //  const lan2 = dataLanguages.map(async(d) => await d.json())

  console.log(dataLanguages)

  const finalRepoArr = []

  for(const i in repoNames) {finalRepoArr.push({name : repoNames[i].name, data : dataLanguages[i]})}

  console.log(finalRepoArr)


  res.send(finalRepoArr)

}

const CreatePromise = (data) =>{

  return fetch(data.languages_url).then(response => response.json())

}


module.exports = {getRepos}