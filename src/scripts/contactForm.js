// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.

import contactCollection from "./contactCollection"



function contactValues() {
  let name = document.getElementById("name").value
  let number = document.getElementById("number").value
  let address = document.getElementById("address").value

  let savedContact = {
    name: name,
    number: number,
    address: address
  }
  return savedContact
}


  function contactPost(entry) {fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
}

document.getElementById("save").addEventListener("click", function () {
  contactPost(contactValues())
})

