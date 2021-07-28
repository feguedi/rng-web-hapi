const { ip } = require('../helpers/network')
const pack = require('../../package.json')

exports.blippRoutes = {
    plugin: require('blipp'),
    options: {
        showAuth: true,
        showScope: true,
    },
}

exports.swaggerPlugins = {
    'hapi-swagger': {
        responses: {
            '200': {
                description: 'Ok',
            },
            '400': {
                description: 'Bad request',
            },
            '401': {
                description: 'Unauthorized',
            },
            '404': {
                description: 'Not found',
            },
            '406': {
                description: 'Not acceptable',
            },
            '500': {
                description: 'Internal Server Error',
            },
        },
    },
}

exports.swaggerOptions = {
    plugin: require('hapi-swagger'),
    options: {
        info: {
            title: 'API de generador de números pseudo-aleatorios',
            version: pack.version,
            contact: {
                name: pack.author
            },
        },
        schemes: ['http', 'https'],
        grouping: 'tags',
        sortEndpoints: 'alpha',
        tags: [{
            name: 'usuario',
            description: 'Rutas del usuario',
        }, {
            name: 'archivos',
            description: 'Rutas de archivos',
        }],
        documentationPath: '/docs/api',
        jsonPath: '/docs/swagger.json',
        swaggerUIPath: '/docs/swaggerui',
        host: `${ip}:${process.env.PORT}`,
    }
}
