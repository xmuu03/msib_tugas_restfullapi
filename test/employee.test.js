const request = require('supertest')
const app = require('../src/app/app')
const { getLatestEmployee } = require('./utils-test')

describe('Employee API', () => {

    it('should able to list employee', async () => {
        const response = await request(app).get("/api/employees")        

        // console.log(response.body);

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()        
    })

    it('should able to get employee by id', async () => {
        const response = await request(app).get("/api/employees/1")        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
    })

    it('should response 404 status code when id to get not exist', async () => {
        const response = await request(app).get("/api/employees/10000")        

        expect(response.body.status).toBe(404)
    })

    it('should able to create employee', async () => {
        const response = await request(app).post("/api/employees").send({
            nama: "test",
            job: "test",
            salary: 100000000
        })        

        expect(response.body.status).toBe(200)
        expect(response.body.data.nama).toEqual("test")
        expect(response.body.data.job).toEqual("test")
    })

    it('should able to update employee by id', async () => {
        const { id_employee } = await getLatestEmployee()

        const response = await request(app).put(`/api/employees/${id_employee}`).send({
            nama: "test updated",
            job: "test job updated",
        })        

        expect(response.body.status).toBe(200)
        expect(response.body.data).toBeDefined()
        expect(response.body.data.nama).toEqual("test updated")
        expect(response.body.data.job).toEqual("test job updated")
    })

    it('should able to remove employee', async () => {
        const { id_employee } = await getLatestEmployee()

        const response = await request(app).delete(`/api/employees/${id_employee}`)        

        expect(response.body.status).toBe(200)
    })

    it('should response 404 status code when id to remove not exist', async () => {
        const response = await request(app).get("/api/employees/10000")        

        expect(response.body.status).toBe(404)
    })

})