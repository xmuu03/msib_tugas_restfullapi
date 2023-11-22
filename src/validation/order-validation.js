const Joi = require("joi");

const createOrderValidation = Joi.object({
    idProduct: Joi.number().positive().required(),
    price: Joi.number().positive().required()
})

const removeOrderValidation = Joi.number().positive().required()

module.exports = { createOrderValidation, removeOrderValidation}