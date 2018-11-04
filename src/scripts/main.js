/*
    Author: Lesley Boyd
    Name: main.js
    Purpose: Entry point of our application
*/


// In main.js, import the ContactList component and the ContactForm component.

import getMoreContacts from "./contactList"
import saveForm from "./contactForm"


// loads contents of DB  on page load
getMoreContacts()


// save variable declared to reference save button, event listener added to save button, on click a function is called to push user's input to the DB with saveForm and then display results with getMoreContacts.  location.reload to reset the page on reload
let save = document.getElementById("save")
save.addEventListener("click", () => {
    saveForm()
    getMoreContacts()
    location.reload()
})