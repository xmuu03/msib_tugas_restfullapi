const Joi = require("joi");

const createEmployeeValidation = Joi.object({
    nama: Joi.string().min(3).required(),
    job: Joi.string().min(3).required(),
    salary: Joi.number().required()
})

const updateEmployeeValidation = Joi.object({
    id: Joi.number().positive().required(),
    nama: Joi.string().min(3),
    job: Joi.string().min(3),
    salary: Joi.number()
})

const getEmployeeValidation = Joi.number().positive().required()

module.exports = { createEmployeeValidation, updateEmployeeValidation, getEmployeeValidation }