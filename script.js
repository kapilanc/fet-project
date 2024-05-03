var contacts = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321" }
];
function renderContact(contact) {
    var contactList = document.getElementById('contact-list');
    var contactItem = document.createElement('div');
    contactItem.innerHTML = "\n        <p>Name: ".concat(contact.name, "</p>\n        <p>Email: ").concat(contact.email, "</p>\n        <p>Phone: ").concat(contact.phone, "</p>\n    ");
    contactList.appendChild(contactItem);
}
function renderContacts() {
    var contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(function (contact) {
        renderContact(contact);
    });
}
renderContacts();
