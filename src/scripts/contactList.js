// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.


import contactCollection from "./contactCollection"
import parsedContacts from "./contact.js"


// the container variable is referencing the DOM element with ID "output"
let container = document.querySelector(".output")


// the displayContacts function is performing a loop, referencing a created DIV, referencing the contactContents as the parsedContacts from the contact.js page.  That then throws that HTML structure into a DIV and the DIV gets appended to the container with ID "output"
function displayContacts(contacts) {
  contacts.forEach((contact) => {
    let div = document.createElement("div")
    let contactContents = parsedContacts(contact)
    div.innerHTML = contactContents
    container.appendChild(div)
  })
}

// function to clear the output element
function clear() {
  container.innerHTML = ""
}

// variable getMoreContacts that stores a function that calls the clear function, contactCollection function(gets data from DB), and then calls the function displayContacts for the data output to the DOM
const getMoreContacts = () => {
  clear()
  contactCollection.getContact().then(contacts => displayContacts(contacts))
}

export default getMoreContacts