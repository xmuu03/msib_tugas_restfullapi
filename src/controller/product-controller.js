const productService = require('../service/product-service')

const list = async (req, res, next) => {
    try {
        const result = await productService.list()
        res.json({
            status: 200,
            message: "get products success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productService.get(id)
        res.json({
            status: 200,
            message: "get products success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const request = req.body
        const result = await productService.create(request)
        res.json({
            status: 200,
            message: "create product success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const request = req.body
        request.id = req.params.id
        const result = await productService.update(request)
        res.json({
            status: 200,
            message: "update product success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productService.remove(id)
        res.json({
            status: 200,
            message: "remove product success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { list, get, create, update, remove }