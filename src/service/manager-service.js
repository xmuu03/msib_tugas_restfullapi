const prisma = require('../app/database')
const ResponseError = require("../error/ResponseError")
const { getManagerValidation, createManagerValidation, updateManagerValidation } = require('../validation/manager-validation')
const validate = require("../validation/validate")

/**
 * Manager Service Module
 * @module managerService
 */

/**
 * Retrieve all manager
 * @returns {Promise<Object[]>} manager array of object
 */
const list = async () => {
    return prisma.manager.findMany({})
}

/**
 * Retrieve Manager by id
 * @param {(string | number)} id - manager id
 * @returns {Promise<Object>} manager object
 */
const get = async (id) => {
    id = validate(getManagerValidation, id)
    const manager = await prisma.manager.findUnique({
        where: {
            id_manager: id
        }
    })
    
    if(!manager) throw new ResponseError(404, "Manager Not Found !!")
    return manager
}

/**
 * Create Manager
 * @param {Object} request - request object {nama, job}
 * @returns {Promise<Object>} created manager object
 */
const create = async (request) => {
    request = validate(createManagerValidation, request)
    return prisma.manager.create({
        data: request,
        select: {
            nama: true,
            job: true,
        }
    })
}

/**
 * Update Manager
 * @param {Object} request - request object {id, nama?, job?}
 * @returns {Promise<Object>} updated manager object
 */
const update = async (request) => {
    request = validate(updateManagerValidation, request)
    const manager = await prisma.manager.findFirst({
        where: {
            id_manager: request.id
        }
    })

    if (!manager) throw new ResponseError(404, "Data Not Found")

    return prisma.manager.update({
        where: {
            id_manager: manager.id_manager
        },
        data: {
            nama: request.nama,
            job: request.job,
        },
        select: {
            nama: true,
            job: true,
        }
    })
}

/**
 * Remove Manager
 * @param {(string | number)} id - manager id
 * @returns {Promise<Object>} removed manager object
 */
const remove = async (id) => {
    id = validate(getManagerValidation, id)
    const manager = await prisma.manager.findFirst({
        where: {
            id_manager: id
        }
    })

    if (!manager) throw new ResponseError(404, "Data Not Found")

    return prisma.manager.delete({
        where: {
            id_manager: manager.id_manager
        }
    })
}

module.exports = { list, get, create, update, remove }