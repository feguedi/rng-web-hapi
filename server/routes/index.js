const route = require('../helpers/route')
const {
    getData,
    getExcel,
} = require('../controllers')
const {
    getDataSchema,
} = require('../schemas/requests')

const routes = [
    route({
        method: 'GET',
        path: '/data',
        description: '',
        validations: {
            query: getDataSchema,
        },
        async func (request, h) {
        }
    }),
]

module.exports = routes
