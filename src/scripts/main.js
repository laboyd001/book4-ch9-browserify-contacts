/*
    Author: Lesley Boyd
    Name: main.js
    Purpose: Entry point of our application
*/


// In main.js, import the ContactList component and the ContactForm component.

import getMoreContacts from "./contactList"
import saveForm from "./contactForm"

getMoreContacts()

let save = document.getElementById("save")
save.addEventListener("click", () => {
    saveForm()
    getMoreContacts()
    location.reload()
})