// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

import contactCollection from "./contactCollection"


// the saveForm function is storing values from the HTML inputs into 3 variable.  Then the savedContant object puts all the data together.
function saveForm() {
  let nameBox = document.getElementById("name_box").value
  let numberBox =
    document.getElementById("number_box").value
  let addressBox =
    document.getElementById("address_box").value

  let savedContact = {
    name: nameBox,
    number: numberBox,
    address: addressBox
  }


// the line below is calling the contactCollection function from contactCollection.js file and performing the addContact function while passing the argument savedContact.  That will ulitimately post data to database.
  contactCollection.addContact(savedContact)
}

export default saveForm