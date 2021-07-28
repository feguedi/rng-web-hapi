const Joi = require('joi')

const getDataSchema = Joi.object({
    x: Joi.number().required(),
    a: Joi.number().required(),
    c: Joi.number(),
    m: Joi.number().required(),
    metodo: Joi.string().pattern(/^mixto|multiplicativo$/i).example(['mixto', 'multiplicativo']).required(),
}).label('solicitarDatos')

module.exports = {
    getDataSchema,
}
