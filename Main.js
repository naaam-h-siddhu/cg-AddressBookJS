import {AddressBookContact} from "./AddressBookContact.js";

class AddressBook{
  constructor(){
    this.contacts =  [];
  }
  addContact(contact){
    let duplicateContact = this.contacts.filter((c) => c.first_name === contact.first_name && c.last_name === contact.last_name).map((c) => c.first_name+" "+c.last_name);
    if(duplicateContact.length > 0){
      console.log(`Error: Contact "${contact.first_name} ${contact.last_name}" already exists!`);
      return;
    }
    this.contacts.push(contact);
    console.log("Successfully added the contact");
  }
  displayContact(){
    console.log("Address Book Contact");
    this.contacts.forEach((contact, index) => console.log(`${index + 1}. ${contact.toString()}`));

  }
  findAndEditContact(name, newContact){
    let contact = this.contacts.find(c => c.first_name === name);
    if (contact){
      Object.assign(contact, newContact);
      console.log(`Contact updated successfully: `+contact);

    }else{
      console.log(`Contact with name "${name}" not found!`);
    }

  }
  deleteContact(name){
    let index = this.contacts.findIndex(c => c.first_name === name)
    if(index !== -1){
      this.contacts.splice(index,1)
        console.log(`Contact "${name}" deleted successfully`)
    }else{
      console.log(`Contact with name "${name}" not found`)
    }
  }
  getContactCount(){
    return this.contacts.reduce((count) => count + 1, 0)
  }
  searchByCity(city) {
    let peopleInCity = this.contacts
      .filter(contact => contact.city.toLowerCase() === city.toLowerCase()) // Convert both to lowercase
      .map(contact => contact.first_name + " " + contact.last_name);
    console.log(`People in ${city}:`, peopleInCity.length > 0 ? peopleInCity.join(", ") : "No contacts found");
  }
  searchByState(state) {
    let peopleInState = this.contacts
      .filter(contact => contact.state.toLowerCase() === state.toLowerCase()) // Convert both to lowercase
      .map(contact => contact.first_name + " " + contact.last_name);
    console.log(`People in ${state}:`, peopleInState.length > 0 ? peopleInState.join(", ") : "No contacts found");
  }

  viewPersonsByCity() {
    let cityMap = this.contacts.reduce((acc, contact) => {
      acc[contact.city] = acc[contact.city] || [];
      acc[contact.city].push(contact.first_name + " " + contact.last_name);
      return acc;
    }, {});
    console.log("People grouped by City:", cityMap);
  }

  sortContactsByName() {
    const sortedList = [...this.contacts].sort((a, b) => a.first_name.localeCompare(b.first_name) || a.last_name.localeCompare(b.last_name));
    console.log("\nContacts sorted alphabetically by name (using Stream-like approach):");
    sortedList.forEach(contact => console.log(contact.toString()));
  }
  viewPersonsByState() {
    let stateMap = this.contacts.reduce((acc, contact) => {
      acc[contact.state] = acc[contact.state] || [];
      acc[contact.state].push(contact.first_name + " " + contact.last_name);
      return acc;
    }, {});
    console.log("People grouped by State:", stateMap);
  }
  sortContactsByStateZipCity(){
    const sortedList = [...this.contacts].sort((a, b) => a.state.localeCompare(b.state) || a.zipcode - b.zipcode || a.city.localeCompare(b.city));
    console.log("\n Contact sorted by city,zip of city");
    sortedList.forEach(c => console.log(c.toString()));
  }
}

const addressBook = new AddressBook();

let contact1 = new AddressBookContact("Sudhakar", "Singh","201A", "Bhopal", "Madhya Pradesh",462041,4889323242,"sudhakar@example.com")
let contact2 = new AddressBookContact("Siddhu","Singh","456 Avenue","Bhopal","Madhya Pradesh",462021,4242556421,"siddhu@example.com")
let contact3 = new AddressBookContact("Tanuj","Singh","5235","Delhi","Delhi",462021,4242556421,"tanu@example.com")
let contact4 = new AddressBookContact("Nitish","Singh","5t243 Avenue","Mumbai","Maharastra",462021,4242556421,"nitish@example.com")
let contact5 = new AddressBookContact("Sudhakar", "Singh","201A", "Bhopal", "Madhya Pradesh",462041,4889323242,"sudhakar@example.com")


addressBook.addContact(contact1)
addressBook.addContact(contact2)
addressBook.addContact(contact3)
addressBook.addContact(contact4)
addressBook.addContact(contact5)
addressBook.findAndEditContact("Siddhu",{phone_number: 1234556789,city:"Jabalpur"})

// addressBook.deleteContact("Siddhu")
addressBook.findAndEditContact("nitish",{phone_number:42224242244242,city:"Jharkhand"})
addressBook.deleteContact("diss")
console.log(`Total Contacts: ${addressBook.getContactCount()}`);

addressBook.searchByCity("Bhopal");
addressBook.searchByState("Madhya Pradesh");

addressBook.viewPersonsByCity();
addressBook.viewPersonsByState();
addressBook.sortContactsByName()
addressBook.sortContactsByStateZipCity()