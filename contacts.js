const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const contactById = contacts.find(({ id }) => id === contactId);

    if(!contactById) {
        return null;
    }

    return contactById;
}

async function updateContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };

    contacts.push(newContact);
    await updateContacts(contacts);

    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
};
