// A Contact component that displays a person's name, phone number, and address.



class ContactDetails {
  constructor (name, number, address) {
    this.name = name
    this.number = number
    this.address = address
  }
}

const contact = (name, number, address) => new ContactDetails(name, number, address)

export default contact