import {AddressBookContact} from "./AddressBookContact.js";

class AddressBook{
  constructor(){
    this.contacts =  [];
  }
  addContact(contact){
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
}

const addressBook = new AddressBook();

let contact1 = new AddressBookContact("Sudhakar", "Singh","201A", "Bhopal", "Madhya Pradesh",462041,4889323242,"sudhakar@example.com")
let contact2 = new AddressBookContact("Siddhu","Singh","456 Avenue","Bhopal","Madhya Pradesh",462021,4242556421,"siddhu@example.com")
let contact3 = new AddressBookContact("Tanuj","Singh","5235","Delhi","Madhya Pradesh",462021,4242556421,"tanu@example.com")
let contact4 = new AddressBookContact("Nitish","Singh","5t243 Avenue","Mumbai","Madhya Pradesh",462021,4242556421,"nitish@example.com")

addressBook.addContact(contact1)
addressBook.addContact(contact2)
addressBook.addContact(contact3)
addressBook.addContact(contact4)
addressBook.findAndEditContact("Siddhu",{phone_number: 1234556789,city:"Jabalpur"})

addressBook.deleteContact("Siddhu")
addressBook.findAndEditContact("nitish",{phone_number:42224242244242,city:"Jharkhand"})
addressBook.deleteContact("diss")
console.log(`Total Contacts: ${addressBook.getContactCount()}`);
// addressBook.displayConta,