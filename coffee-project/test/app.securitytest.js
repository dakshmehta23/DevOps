const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');

const expect = chai.expect;
const request = supertest(app);

describe('Security Testing', () => {
    it('should not be vulnerable to cross site scripting attacks in coffee name', async () => {
        const attack = '<img src=abc onerror=alert("Your code is vulnerable to XSS")>';
        const quantity = 1;

        const response = await request
            .post('/order')
            .send({
                coffeeId: 1,
                quantity,
                coffeeName: attack,
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('coffeeName').that.does.not.include('<script>');
    });

    it('should not should not be vulnerable to cross site scripting attacks in quantity', async () => {
        const attack = '<img src=abc onerror=alert("Your code is vulnerable to XSS")>';
        const response = await request
            .post('/order')
            .send({
                coffeeId: 1,
                quantity: attack,
                coffeeName: 'Cappuccino',
            });
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('quantity').that.does.not.include('<script>');
    });

    it('should not should not be vulnerable to cross site scripting attacks in total', async () => {
        const attack = '<img src=abc onerror=alert("Your code is vulnerable to XSS")>';
        const quantity = 1;
        const response = await request
            .post('/order')
            .send({
                coffeeId: 1,
                quantity,
                coffeeName: 'Espresso',
            });

        response.body.total = attack;
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('total').that.does.not.include('<script>');
    });
});
