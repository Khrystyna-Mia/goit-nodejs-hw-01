const contactsOperations = require("./contacts.js");

const { program } = require("commander");

program
.option('-a, --action <type>', 'choose action')
.option('-i, --id <type>', 'user id')
.option('-n, --name <type>', 'user name')
.option('-e, --email <type>', 'user email')
.option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone}) {
    switch (action) {
        case 'list':
            const contacts = await contactsOperations.listContacts();
            console.table(contacts);
            break;
    }
}

invokeAction(argv);