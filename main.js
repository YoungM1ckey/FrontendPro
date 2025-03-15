const phoneContacts = {
    contact: [
        {
            name: 'Masha',
            phoneNumber: '0123456789',
            email: 'masha@gmail.com',
        },
        {
            name: 'Vaha',
            phoneNumber: '412345234',
            email: 'dasdev@gmail.com',
        },
        {
            name: 'Artem',
            phoneNumber: '892347891',
            email: 'artev321sad@gmail.com',
        },
        {
            name: 'Tanya',
            phoneNumber: '3248523908',
            email: 'tatifsavewv@gmail.com',
        },
        {
            name: 'Roma',
            phoneNumber: '9142082310937',
            email: 'mvdlksmsvdnv324@gmail.com',
        },
    ],
    findContactByName: function (name) {
        const contact = this.contact.find((contact) => contact.name === name);
        console.log('contact', contact);
    },
    addNewContact: function (name, phoneNumber, email) {
        const newContact = {name, phoneNumber, email};
        this.contact.push(newContact);
    }
}


console.log(phoneContacts.findContactByName('Artem'));

phoneContacts.addNewContact('Katya', '84712938642', 'dkmsalkmlkm@example.com');
console.log(phoneContacts.contact)