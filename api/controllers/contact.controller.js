import fetch from 'node-fetch';
const ContactForm = require('../models/contact.model')

const contactSave = async(req, res)=>{

  const {contact} = req.body
  const contactToSave = new ContactForm({email: contact.email, msg: contact.msg})
  

  

  try {
  
    await contactToSave.save()
  } catch (error) {
    return res.json({error : true})
  }

  try {
    fetch(`https://alertzy.app/send?accountKey=82wz0ouakh4j81q&title=${contact.email}&message=${contact.msg}`)
  } catch (error) {
    console.error(error);
  }


  
  return res.json({guadado : true})
}


const getAllContacts = async(req, res) => {


  const contacts = await ContactForm.find()


  res.json(contacts)

}


module.exports = { contactSave, getAllContacts }