const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Futebol No bairro",
        email: "fbairroj@gmail.com",
        whatsapp: "85989077890",
        city: "Maracanau",
        uf: "CE"
      })
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
  })
})