const Joi = require('joi')

const arrayNumerosResponse = Joi.array().items(Joi.number()).label('arrayNumeros')

module.exports = {
    arrayNumerosResponse,
}
