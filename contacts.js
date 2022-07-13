const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

module.exports = {
    listContacts,
};
