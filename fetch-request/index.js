const URL = 'http://localhost:3000/api/contact'


const sendContactForm = async(data)=>{
  const {contact} = data
  const response = await fetch(URL,{
    method: 'POST',
    body: JSON.stringify({contact}),
    headers:{'Content-Type': 'application/json'}})
  
  return await response.json()
}


const getContacts = async() =>{

  try {

    const response = await fetch(URL)

    return await response.json()

  } catch (error) {
    return false
  }

}

module.exports = {sendContactForm, getContacts}