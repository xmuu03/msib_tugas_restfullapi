const request = require('supertest')
const app = require('../src/app/app')
const { getLatestProduct } = require('./utils-test')

describe('Product API', () => {
    test('should able list product', async () => {
        const response = await request(app).get("/api/products")

        // console.log(response.body);

        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should able get product by id', async () => {
        const response = await request(app).get("/api/products/1")

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should able create product', async () => {
        const response = await request(app).post("/api/products").send({
            name: "test"
        })

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.name).toEqual("test")
    })

    it('should able update product by id', async () => {
        const { id_product } = await getLatestProduct()

        const response = await request(app).put(`/api/products/${id_product}`).send({
            name: "test updated",
        })

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.name).toEqual("test updated")
    })

    it('should able remove product', async () => {
        const { id_product } = await getLatestProduct()

        const response = await request(app).delete(`/api/products/${id_product}`)

        expect(response.body.status).toBe(200)
    })

})