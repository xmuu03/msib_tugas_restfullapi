const Joi = require("joi");

const createManagerValidation = Joi.object({
    nama: Joi.string().min(3).required(),
    job: Joi.string().min(3).required(),
})

const updateManagerValidation = Joi.object({
    id: Joi.number().positive().required(),
    nama: Joi.string().min(3),
    job: Joi.string().min(3),
})

const getManagerValidation = Joi.number().positive().required()

module.exports = { createManagerValidation, updateManagerValidation, getManagerValidation }