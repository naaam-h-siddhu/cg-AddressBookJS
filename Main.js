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
}

const addressBook = new AddressBook();

let contact1 = new AddressBookContact("Sudhakar", "Singh","201A", "Bhopal", "Madhya Pradesh",462041,4889323242,"sudhakar@example.com")
let contact2 = new AddressBookContact("Siddhu","Singh","456 Avenue","Bhopal","Madhya Pradesh",462021,4242556421,"siddhu@example.com")

addressBook.addContact(contact1)
addressBook.addContact(contact2)

addressBook.displayContact()