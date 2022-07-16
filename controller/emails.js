const fs = require('fs');
const path = require('path')

var emails = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/emails.json')));

const getAllEmails = async (req, resp) => {
    return emails;
}

const getEmail = async (req, resp) => {
    const id = Number(req.params.id)
    const email = emails.find(email => email.id == id)
    return email
}

const getRandomEmail = async (req, resp) => {
    return emails[Object.keys(emails)[Math.floor(Math.random() * Object.keys(emails).length)]]
}

module.exports = {
    getAllEmails,
    getEmail,
    getRandomEmail,
}