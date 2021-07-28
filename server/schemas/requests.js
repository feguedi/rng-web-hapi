const Joi = require('joi')

const getDataSchema = Joi.object({
    x: Joi.string().alphanum().required(),
    a: Joi.string().alphanum().required(),
    c: Joi.string().alphanum(),
    m: Joi.string().alphanum().required(),
    metodo: Joi.string().pattern(/^mixto|multiplicativo$/i).required(),
}).label('solicitarDatos')

module.exports = {
    getDataSchema,
}
