//  consoleconst URL = 'http://localhost:3000/api/contact'
const URL = "https://mayder.herokuapp.com/api/contact";

export const sendContactForm = async (data) => {
  const { contact } = data;
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ contact }),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
