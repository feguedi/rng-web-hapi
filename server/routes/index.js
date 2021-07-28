const route = require('../helpers/route')
const {
    getData,
    getExcel,
    getCsv,
    getJson,
} = require('../controllers')
const {
    getDataSchema,
} = require('../schemas/requests')
const {
    arrayNumerosResponse,
} = require('../schemas/response')

const routes = [
    route({
        method: 'GET',
        path: '/data',
        tags: 'usuario',
        description: 'Obtener datos dependiendo del método congruencial',
        responseSchema: arrayNumerosResponse,
        validations: {
            query: getDataSchema,
        },
        async func (request, h) {
            const { x, a, c, m, metodo } = request.query
            return getData({ x, a, c, m }, metodo)
        }
    }),
    route({
        method: 'GET',
        path: '/file/excel',
        tags: ['archivos'],
        description: 'Obtener un archivo de excel',
        validations: {
            query: getDataSchema,
        },
        async func (request, h) {
            const { x, a, c, m, metodo } = request.query
            return getExcel({ x, a, c, m }, metodo)
        },
    }),
    route({
        method: 'GET',
        path: '/file/json',
        tags: ['archivos'],
        description: 'Obtener un archivo en formato JSON',
        validations: {
            query: getDataSchema,
        },
        async func (request, h) {
            const momento = new Date()
            const { x, a, c, m, metodo } = request.query
            const file = getJson({ x, a, c, m }, metodo)

            const response = h.response(file)
            response.bytes(file.length)
            response.header('content-disposition', `attachment; filename=${metodo}-${momento.getTime()}.json;`)
            response.type('text/html')

            return response
        }
    }),
    route({
        method: 'GET',
        path: '/file/csv',
        tags: ['archivos'],
        description: 'Obtener un archivo en formato CSV',
        validations: {
            query: getDataSchema,
        },
        async func (request, h) {
            const momento = new Date()
            const { x, a, c, m, metodo } = request.query
            const file =  getCsv({ x, a, c, m }, metodo)
            
            const response = h.response(file)
            response.bytes(file.length)
            response.header('content-disposition', `attachment; filename=${metodo}-${momento.getTime()}.csv;`)
            response.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

            return response
        }
    })
]

module.exports = routes
