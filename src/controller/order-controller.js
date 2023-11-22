const orderService = require('../service/order-service')

const list = async (req, res, next) => {
    try {
        const result = await orderService.list()
        res.json({
            status: 200,
            message: "get all order success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const request = req.body        
        const result = await orderService.create(request)
        res.json({
            status: 200,
            message: "create order success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await orderService.remove(id)
        res.json({
            status: 200,
            message: "remove order success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { create, remove, list }