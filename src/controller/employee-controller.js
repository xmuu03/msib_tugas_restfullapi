const employeeService = require('../service/employee-service')

const list = async (req, res, next) => {
    try {
        const result = await employeeService.list()

        res.json({
            status: 200,
            message: "get list employee success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await employeeService.get(id)

        res.json({
            status: 200,
            message: "get employee success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const request = req.body                
        const result = await employeeService.create(request)

        res.json({
            status: 200,
            message: "Create employee success",
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

        const result = await employeeService.update(request)
        res.json({
            status: 200,
            message: "Update employee success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await employeeService.remove(id)

        res.json({
            status: 200,
            message: "Remove employee success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { list, get, create, update, remove }