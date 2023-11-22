const managerService = require('../service/manager-service')

const list = async (req, res, next) => {
    try {
        const result = await managerService.list()

        res.json({
            status: 200,
            message: "get list manager success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await managerService.get(id)

        res.json({
            status: 200,
            message: "get manager success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const request = req.body                
        const result = await managerService.create(request)

        res.json({
            status: 200,
            message: "Create manager success",
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
        const result = await managerService.update(request)
        res.json({
            status: 200,
            message: "Update manager success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await managerService.remove(id)

        res.json({
            status: 200,
            message: "Remove manager success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { list, get, create, update, remove }