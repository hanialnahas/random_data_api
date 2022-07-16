const app = require('fastify')({
    logger: true
})

routesURLs = []

app.addHook('onRoute', (routeOption) => {
    console.log(routeOption.url)
    routesURLs.push(routeOption.url)
})


app.get('/', function (req, reply) {
    console.log(routesURLs)
    reply.send(routesURLs)
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

