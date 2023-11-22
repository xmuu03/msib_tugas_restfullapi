const express = require('express')
const employeeController = require('../controller/employee-controller')
const productController = require('../controller/product-controller')
const managerController = require('../controller/manager-controller')
const orderController = require('../controller/order-controller')

const apiRouter = express.Router()

// api employee
apiRouter.post("/api/employees", employeeController.create)
apiRouter.get("/api/employees", employeeController.list)
apiRouter.put("/api/employees/:id", employeeController.update)
apiRouter.get("/api/employees/:id", employeeController.get)
apiRouter.delete("/api/employees/:id", employeeController.remove)

// api products
apiRouter.get("/api/products", productController.list)
apiRouter.post("/api/products", productController.create)
apiRouter.get("/api/products/:id", productController.get)
apiRouter.put("/api/products/:id", productController.update)
apiRouter.delete("/api/products/:id", productController.remove)

// api managers
apiRouter.get("/api/managers", managerController.list)
apiRouter.post("/api/managers", managerController.create)
apiRouter.get("/api/managers/:id", managerController.get)
apiRouter.put("/api/managers/:id", managerController.update)
apiRouter.delete("/api/managers/:id", managerController.remove)

// api orders
apiRouter.get("/api/orders", orderController.list)
apiRouter.post("/api/orders", orderController.create)
apiRouter.delete("/api/orders/:id", orderController.remove)

module.exports = apiRouter