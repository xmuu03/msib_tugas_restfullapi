const {PrismaClient}  = require('@prisma/client')

const prisma = new PrismaClient({
    log: ['error', 'info', 'query', 'warn']
})

module.exports = prisma