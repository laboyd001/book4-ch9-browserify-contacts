// A Contact component that displays a person's name, phone number, and address.



let parsedContacts = (entry) => {
  return `
      <br><br>
        <p>Name: ${entry.name}</p>
        <p>Number: ${entry.number}</p>
        <p>Address: ${entry.address}</p>
      <br><br>
`
  }
  export default parsedContacts