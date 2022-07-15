const emailController = require('../controller/emails');

const routes = [{
        method: 'GET',
        url: '/emails',
        handler: emailController.getAllEmails
    },
    {
        method: 'GET',
        url: '/email',
        handler: emailController.getRandomEmail
    },
    {
        method: 'GET',
        url: '/email/:id',
        handler: emailController.getEmail
    }
]

module.exports = routes
