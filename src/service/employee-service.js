const prisma = require('../app/database')
const ResponseError = require("../error/ResponseError")
const { getEmployeeValidation, createEmployeeValidation, updateEmployeeValidation } = require('../validation/employee-validation')
const validate = require("../validation/validate")

/**
 * Employe Service Module
 * @module employeService
 */

/**
 * Retrieve employee list
 * @returns {Promise<Object[]>} employee list object
 */
const list = async () => {
    return prisma.employee.findMany({})
}

/**
 * Retrive employee by id
 * @param {(number | string)} id - employee id
 * @returns {Promise<Object>} employee object
 */
const get = async (id) => {    
    id = validate(getEmployeeValidation, id)
    const employee = await prisma.employee.findUnique({
        where: {
            id_employee: id
        }
    })

    if(!employee) throw new ResponseError(404, "Employe Not Found")
    return employee
}

/**
 * Create employee
 * @param {Object} request - request object {nama, job, salary}
 * @returns {Promise<Object>} created employe object
 */
const create = async (request) => {
    request = validate(createEmployeeValidation, request)
    return prisma.employee.create({
        data: request,
        select: {
            nama: true,
            job: true,
            salary: true
        }
    })
}

/**
 * Update employee
 * @param {Object} request - request object {id, nama?, job?, salary?}
 * @returns {Promise<Object>} updated employe object
 */
const update = async (request) => {
    request = validate(updateEmployeeValidation, request)
    const employee = await prisma.employee.findFirst({
        where: {
            id_employee: request.id
        }
    })

    if (!employee) throw new ResponseError(404, "Employee Not Found")

    return prisma.employee.update({
        where: {
            id_employee: employee.id_employee
        },
        data: {
            nama: request.nama,
            job: request.job,
            salary: request.salary
        },
        select: {
            nama: true,
            job: true,
            salary: true
        }
    })
}

/**
 * remove employee
 * @param {(string | number)} id - employee id
 * @returns {Promise<Object>} - removed employee object
 */
const remove = async (id) => {
    id = validate(getEmployeeValidation, id)
    const employee = await prisma.employee.findFirst({
        where: {
            id_employee: id
        }
    })

    if (!employee) throw new ResponseError(404, "Data Not Found")

    return prisma.employee.delete({
        where: {
            id_employee: id
        }
    })
}

module.exports = { list, get, create, update, remove }