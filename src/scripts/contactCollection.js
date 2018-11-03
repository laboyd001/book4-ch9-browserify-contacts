// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

let contactCollection = {
  get: {
    value: (resource, id) => {
      return fetch("http://localhost:8088/entries")
        .then(result => result.json())
    }
  },

  add: {
    value: (resource, item) => {
      return fetch("http://localhost:8088/entries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        })
        .then(result => result.json())
    }
  }
}

export default contactCollection