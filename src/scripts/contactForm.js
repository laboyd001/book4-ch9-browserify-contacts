// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

import contactCollection from "./contactCollection"

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



  contactCollection.addContact(savedContact)
  console.table(savedContact)
}

export default saveForm