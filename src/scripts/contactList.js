// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.


import contactCollection from "./contactCollection"
import parsedContacts from "./contact.js"


let container = document.querySelector(".output")

function displayContacts(contacts) {
  contacts.forEach((contact) => {
    let div = document.createElement("div")
    let contactContents = parsedContacts(contact)
    div.innerHTML = contactContents
    container.appendChild(div)
  })
}

function clear() {
  container.innerHTML = ""
}

const getMoreContacts = () => {
  clear()
  contactCollection.getContact().then(contacts => displayContacts(contacts))
}



export default getMoreContacts