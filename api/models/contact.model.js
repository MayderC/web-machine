import {Schema, model} from 'mongoose';


const contactShema = new Schema({

  email: {type: 'string', required: true},
  msg : {type: 'string', required: true}

})



module.exports = model('contactform', contactShema)