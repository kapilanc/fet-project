interface Contact {
    name: string;
    email: string;
    phone: string;
}

const contacts: Contact[] = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321" }
];

function renderContact(contact: Contact) {
    const contactList = document.getElementById('contact-list');
    const contactItem = document.createElement('div');
    contactItem.innerHTML = `
        <p>Name: ${contact.name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
    `;
    contactList.appendChild(contactItem);
}

function renderContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        renderContact(contact);
    });
}

renderContacts();
