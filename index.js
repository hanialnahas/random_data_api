const app = require('fastify')({
    logger: true
})

app.get('/', function (req, reply) {
    reply.send({hello: 'wolrd'})
})

const emailsRoute = require('./routes/emails')
emailsRoute.forEach((route, index) => {
    app.route(route)
})

app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }

    app.log.info(`server running on ${address}`)
})