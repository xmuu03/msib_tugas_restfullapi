const { createOrderValidation, removeOrderValidation } = require("../validation/order-validation")
const validate = require("../validation/validate")
const prisma = require("../app/database")
const ResponseError = require("../error/ResponseError")

/**
 * Order Service Module
 * @module orderService
 */

/**
 * Retrieve all order
 * @returns {Promise<Object[]>} order array of object
 */
const list = async () => {
    return prisma.orders.findMany({})
}

/**
 * Create order
 * @param {Object} request - request object {id_product, price}
 * @returns {Promise<Object>} created order object
 */
const create = async (request) => {
    request = validate(createOrderValidation, request)
    const product = await prisma.products.findFirst({
        where: {
            id_product: request.idProduct
        }
    })

    if (!product) throw new ResponseError(404, "Product Does'nt Exist")
    return prisma.orders.create({
        data: {
            id_product: request.idProduct,
            price: request.price
        }
    })
}

/**
 * Remove order
 * @param {(string | number)} id - order id
 * @returns {Promise<Object>} removed order object
 */
const remove = async (id) => {
    id = validate(removeOrderValidation, id)

    const order = await prisma.orders.findFirst({
        where: {
            id_orders: id
        }
    })

    if (!order) throw new ResponseError(404, "Order Does'nt Exist")

    return prisma.orders.delete({
        where: {
            id_orders: order.id_orders
        }
    })
}

module.exports = { list, create, remove }
