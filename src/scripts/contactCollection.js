// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

let contactCollection = {
  getContact() {
    return fetch("http://localhost:8088/entries")
      .then((response) => response.json())
  },
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