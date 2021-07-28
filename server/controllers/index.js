const Boom = require('@hapi/boom')
const {
    arrayMixto,
    arrayMultiplicativo,
    siguienteSemillaMixto,
    siguienteSemillaMultiplicativo,
    soloMixto,
    soloMultiplicativo,
} = require('./generador')

const getData = async ({ x, a, c, m }, metodo) => {
    try {
        switch (metodo) {
            case 'multiplicativo':
                return arrayMultiplicativo(x, a, m)

            case 'mixto':
                return arrayMixto(x, a, c, m)
        
            default:
                throw new Error('No existe ese método')
        }
    } catch (error) {
        throw Boom.badRequest(error)
    }
}

const getExcel = async ({ x, a, c, m }, metodo) => {
    try {
        const datos = await getData({ x, a, c, m }, metodo)
    } catch (error) {
        throw Boom.badRequest(error)
    }
}

module.exports = {
    getData,
    getExcel,
}
