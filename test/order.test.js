const request = require('supertest')
const app = require('../src/app/app')
const { getLatestOrder } = require('./utils-test')

describe('Order API', () => {

    test('should able to list order', async () => {
        const response = await request(app).get("/api/orders")

        // console.log(response.body);

        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should able to create order', async () => {
        const response = await request(app).post("/api/orders").send({
            idProduct: 2,
            price: 10000
        })        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.id_product).toEqual(2)
        expect(response.body.data.price).toEqual(10000)
    })

    it('should able to remove order', async () => {
        const { id_orders } = await getLatestOrder()
        const response = await request(app).delete(`/api/orders/${id_orders}`)

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

})