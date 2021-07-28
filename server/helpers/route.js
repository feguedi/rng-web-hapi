const Boom = require('@hapi/boom')
const {
    failAction,
} = require('./validation')
const {
    swaggerPlugins,
} = require('../plugins/documentation')

const route = ({
    method,
    path,
    tags,
    description,
    notes,
    responseSchema,
    validations,
    func,
}) => {
    const isObject = typeof func === 'object'
    const handler = isObject ? func : async (request, h) => {
        try {
            return await func(request, h)
        } catch (error) {
            throw new Boom.Boom(error)
        }
    }
    const arrayTags = Array.isArray(tags) ? [...tags] : tags && String(tags).length >= 1 ? [tags] : []

    return {
        method,
        path,
        options: {
            tags: ['api', ...arrayTags],
            plugins: {
                ...swaggerPlugins,
            },
            description,
            notes,
            response: {
                failAction: 'log',
                schema: responseSchema,
            },
            validate: {
                failAction,
                ...validations,
            }
        },
        handler,
    }
}

module.exports = route
