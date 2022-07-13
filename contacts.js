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

module.exports = {
    listContacts,
    getContactById,
};
