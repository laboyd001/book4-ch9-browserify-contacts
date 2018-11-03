// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
import contactCollection from "./contactCollection"

const container = document.querySelector(".output")

const makeContactComponent = function (entry) {

  // Create your own HTML structure for a journal entry
  return `
<div class = "contactEntry">
<p>${entry.name}</p>
<p>${entry.number}</p>
<p>${entry.address}</p>
</div>
`
}

function renderContactEntry(parsedEntry) {
  parsedEntry.forEach(entry => {
    container.innerHTML += makeContactComponent(entry);
  })
}

export default makeContactComponent
module.exports = renderContactEntry