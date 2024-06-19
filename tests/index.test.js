import { test } from "./jest.setup";

let token;
let id;

describe('Rotas /users', () => {

    it('[POST] Deverá retornar 201 caso o usuário seja criado com sucesso', async () => {
        const response = await test.post('/users').send({ name: 'Test Jest', email: 'test@test.com.br', pass: 'test@jest' });
        expect(response.status).toBe(201);
    });

    it('Realizar Login com usuário de teste', async () => {
        const response = await test.post('/login').send({ email: 'test@test.com.br', pass: "test@jest" });
        token = response.body.message;
        expect(response.status).toBe(200);
    });

    it('[GET] Deverá retornar 200 caso localize os usuários cadastrados', async () => {
        const response = await test.get('/users').set('Authorization', `Bearer ${token}`);
        id = response.body.users[0].id;
        expect(response.status).toBe(200);
    });

    it('[PUT] Deverá retornar 200 caso a senha do usuário seja alterada com sucesso', async () => {
        const response = await test.put('/users').set('Authorization', `Bearer ${token}`).query({ pass: '123456', passConfirm: '123456' });
        expect(response.status).toBe(200);
    });

    it('[DELETE] Deverá retornar 200 caso o usuário seja removido com sucesso', async () => {
        const response = await test.delete('/users').set('Authorization', `Bearer ${token}`).query({ id: id });
        expect(response.status).toBe(200);
    });

})