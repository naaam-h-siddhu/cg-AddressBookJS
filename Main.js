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
      console.log(`Contact with name "${name} not found!`);
    }

  }
}

const addressBook = new AddressBook();

let contact1 = new AddressBookContact("Sudhakar", "Singh","201A", "Bhopal", "Madhya Pradesh",462041,4889323242,"sudhakar@example.com")
let contact2 = new AddressBookContact("Siddhu","Singh","456 Avenue","Bhopal","Madhya Pradesh",462021,4242556421,"siddhu@example.com")

addressBook.addContact(contact1)
addressBook.addContact(contact2)
addressBook.findAndEditContact("Siddhu",{phone_number: 1234556789,city:"Jabalpur"})

addressBook.findAndEditContact("nitish",{phone_number:42224242244242,city:"Jharkhand"})
// addressBook.displayConta,