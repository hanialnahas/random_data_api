const emailController = require('../controller/emails');

const getEmailValidation = {
    params: {
        id: {type: 'integer'}
    },
    response: {
        200: {
            type:'object',
            properties: {
                id: {type: 'integer'},
                email: {type: 'string'},
                name: {type: 'string'},
                gender: {type: 'string'}
            }
        }
    }
}

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
        schema: getEmailValidation,
        handler: emailController.getEmail
    }
]

module.exports = routes
