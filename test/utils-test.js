const prisma = require('../src/app/database')

const getLatestEmployee = async () => {
    const employee = await prisma.employee.findMany({
        orderBy: {
            id_employee: 'desc'
        },
        take: 1
    })

    return employee[0]
}

const getLatestManager = async () => {
    const manager = await prisma.manager.findMany({
        orderBy: {
            id_manager: 'desc'
        },
        take: 1
    })

    return manager[0]
}

const getLatestProduct = async () => {
    const product = await prisma.products.findMany({
        orderBy: {
            id_product: 'desc'
        },
        take: 1
    })

    return product[0]
}

const getLatestOrder = async () => {
    const order = await prisma.orders.findMany({
        orderBy: {
            id_orders: 'desc'
        },
        take: 1
    })

    return order[0]
}

module.exports = { getLatestEmployee, getLatestManager, getLatestProduct, getLatestOrder }