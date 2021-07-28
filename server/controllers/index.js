const { Buffer } = require('buffer')
const Boom = require('@hapi/boom')
const _ = require('underscore')
const {
    generarExcel,
    bufferToStream,
} = require('../helpers/files')
const {
    arrayMixto,
    arrayMultiplicativo,
    siguienteSemillaMixto,
    siguienteSemillaMultiplicativo,
    soloMixto,
    soloMultiplicativo,
} = require('./generador')

const getData = ({ x, a, c, m }, metodo) => {
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

const getExcel = ({ x, a, c, m }, metodo) => {
    try {
        const datos = getData({ x, a, c, m }, metodo)
        const keys = _.flatten(_.keys(datos))
        const values = _.flatten(_.values(datos))
        const array = Array.isArray(datos) ? datos : [keys, values]
        const buf = generarExcel(array)

        return buf
    } catch (error) {
        throw Boom.badRequest(error)
    }
}

const getJson = ({ x, a, c, m }, metodo) => {
    try {
        const datos = getData({ x, a, c, m }, metodo)
        const toString = JSON.stringify(datos, null, 2)

        const buf = Buffer.from(toString, 'utf-8')
        console.log(buf)

        const fileStream = bufferToStream(buf)
        console.log('fileStream', fileStream)

        return fileStream
    } catch (error) {
        throw Boom.badRequest(error)
    }
}

const getCsv = ({ x, a, c, m }, metodo) => {
    try {
        const datos = getData({ x, a, c, m }, metodo)
        const buf = generarExcel(datos, 'csv')

        return buf
    } catch (error) {
        throw Boom.badRequest(error)
    }
}

module.exports = {
    getData,
    getExcel,
    getJson,
    getCsv,
}
