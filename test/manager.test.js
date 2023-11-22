const request = require('supertest')
const app = require('../src/app/app')
const { getLatestManager } = require('./utils-test')

describe('Manager API', () => {

    it('should able to list manager', async () => {
        const response = await request(app).get("/api/managers")        

        // console.log(response.body);

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should able to get manager by id', async () => {
        const response = await request(app).get("/api/managers/1")        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should able to create manager', async () => {
        const response = await request(app).post("/api/managers").send({
            nama: "test",
            job: "test",
        })        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.nama).toEqual("test")
        expect(response.body.data.job).toEqual("test")
    })

    it('should able to update manager by id', async () => {

        const { id_manager } = await getLatestManager()

        const response = await request(app).put(`/api/managers/${id_manager}`).send({
            job: "test job updated",
        })        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.job).toEqual("test job updated")
    })

    it('should able to remove manager', async () => {
        const { id_manager } = await getLatestManager()

        const response = await request(app).delete(`/api/managers/${id_manager}`)        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

})