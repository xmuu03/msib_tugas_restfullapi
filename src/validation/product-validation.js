const Joi = require("joi");

const createProductValidation = Joi.object({
    name: Joi.string().min(3).required()
})

const updateProductValidation = Joi.object({
    id: Joi.number().positive().required(),
    name: Joi.string().min(3).required()
})

const getProductValidation = Joi.number().positive().required()

module.exports = { createProductValidation, getProductValidation, updateProductValidation }