// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.


// the contactCollection variable stores 2 functions.  getContact performs a fetch to get data from the DB
let contactCollection = {
  getContact() {
    return fetch("http://localhost:8088/entries")
      .then((response) => response.json())
  },

  // the 2nd function addContact posts data to DB.  The argument "savedContact" is referenced in contactForm.js
  addContact(savedContact) {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(savedContact)
      })
  }
}
export default contactCollection