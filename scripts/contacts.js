const {
  existsSync,
  writeFileSync,
} = require('fs');

const {
  join,
} = require('path');

const sites = require('./sites')();

function getSiteContact(site) {
  const contactsFile = join(__dirname, '..', 'sites', site, 'contacts.json');
  if (!existsSync(contactsFile)) {
    return 'MISSING';
  }
  /** not the email service :P */
  const contacts = require(contactsFile);
  return contacts.join(', ');
}

function run() {
  let table = `| site | contacts |\n| - | -: |`;

  for (const site of sites) {
    const contacts = getSiteContact(site);
    table = `${table}\n| ${site} | ${contacts} |`;
  }

  const content = `# Site Contacts 
  ${table}`;
  writeFileSync(join(__dirname, '..', 'CONTACTS.md'), content);
}

run();
