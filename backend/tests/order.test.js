const request = require('supertest');
const app = require('../app');
const Order = require('../models/Order');

describe('Order API', () => {
  it('should create a new order', async () => {
    const res = await request(app)
      .post('/api/orders')
      .send({
        items: [{ name: 'Pizza', quantity: 1, price: 10 }],
        total: 10,
        address: '123 Main St'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
}); 