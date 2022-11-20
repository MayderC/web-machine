import fetch from "node-fetch";
import ContactForm from "../models/contact.model.js";

export const contactSave = async (req, res) => {
  const { contact } = req.body;
  const contactToSave = new ContactForm({
    email: contact.email,
    msg: contact.msg,
  });
  try {
    await contactToSave.save();
  } catch (error) {
    return res.json({ error: true });
  }

  try {
    fetch(
      `https://alertzy.app/send?accountKey=82wz0ouakh4j81q&title=${contact.email}&message=${contact.msg}`
    );
  } catch (error) {
    console.error(error);
  }
  return res.json({ guadado: true });
};
