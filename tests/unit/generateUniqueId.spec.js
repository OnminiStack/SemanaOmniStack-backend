const generateUniqueId = require('../../src/utils/generateUniqueId')
// testa uma funcionalidade em especifico
describe('Generate Unique Id', ()=> {
    it('should generate an unique ID', () =>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    }) // isto deve gerar algo...
})