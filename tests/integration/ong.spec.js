const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
// utilizar a biblioteca super teste
describe('ONG', () => {
    beforeEach( async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    }) // antes de cada test

  afterAll( async() =>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () =>{
        const response = await request(app).post('/ongs')// .set('Authorization','asd')
        .send({
                name: "DW",
                email: "suport@dw.com",
                whatsapp: "11666666666",
                city: "Rio de Janeiro",
                uf: "RJ"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
}) // chamar a API e verificar se o retorno é válido