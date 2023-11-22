const prisma = require("../app/database")
const { getProductValidation, createProductValidation, updateProductValidation } = require("../validation/product-validation")
const validate = require("../validation/validate")
const ResponseError = require("../error/ResponseError")

/**
 * Product Service Module
 * @module productService
 */

/**
 * Retrieve all product
 * @returns {Promise<Object[]>} product array of object
 */
const list = async () => {
    return prisma.products.findMany({})
}

/**
 * Retrieve product by id
 * @param {(string | number)} id - product id
 * @returns {Promise<Object>} product object
 */
const get = async (id) => {
    id = validate(getProductValidation, id)

    const product = await prisma.products.findFirst({
        where: {
            id_product: id
        }
    })

    if (!product) throw new ResponseError(404, "Product Not Found")
    return product
}

/**
 * Create product
 * @param {Object} request - request object {name}
 * @returns {Promise<Object>} created product object
 */
const create = async (request) => {
    request = validate(createProductValidation, request)
    return prisma.products.create({
        data: request
    })
}

/**
 * Update product
 * @param {Object} request - request object {id, name}
 * @returns {Promise<Object>} updated product object
 */
const update = async (request) => {
    request = validate(updateProductValidation, request)
    const product = await prisma.products.findFirst({
        where: {
            id_product: request.id
        }
    })

    if (!product) throw new ResponseError(404, "Product Not Found !!")

    return prisma.products.update({
        where: {
            id_product: product.id_product
        },
        data: {
            name: request.name
        }
    })

}

/**
 * Remove product
 * @param {(string | number)} id - product id
 * @returns {Promise<Object>} removed product object
 */
const remove = async (id) => {
    id = validate(getProductValidation, id)
    const product = await prisma.products.findFirst({
        where: {
            id_product: id
        }
    })

    if (!product) throw new ResponseError(404, "Product Not Found")
    return prisma.products.delete({
        where: {
            id_product: product.id_product
        }
    })
}

module.exports = { list, get, create, update, remove }