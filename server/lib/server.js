require('../config')
const path = require('path')
const Hapi = require('@hapi/hapi')
const Qs = require('qs')

const {
    swaggerOptions,
    blippRoutes,
} = require('../plugins/documentation')

const plugins = []
const isDev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'

const Server = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8010,
        query: {
            parser: query => Qs.parse(query),
        },
        routes: {
            cors: true,
            files: {
                relativeTo: path.join(__dirname, '..', '..', 'client'),
            },
        },
    })

    isDev && plugins.push(swaggerOptions)
    isDev && plugins.push(blippRoutes)
    isDev && plugins.push(require('@hapi/vision'))
    plugins.push(require('@hapi/inert'))

    await server.register(plugins, { once: true })

    server.route(require('../routes'))

    return server
}

exports.start = async () => {
    try {
        const server = await Server()
        await server.start()

        console.log(`Server on ${server.info.uri}`)

        return server
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

exports.init = async () => {
    try {
        const server = await Server()
        await server.init()

        return server
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
