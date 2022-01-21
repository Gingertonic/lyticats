const request = require('supertest');
const app = require('./app');

describe('cats routes', () => {
    test('responds to GET / with a 200 on success', function(done) {
        request(app)
            .get('/cats')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    test('retrieves a cat by id', (done) => {
        request(app)
            .get('/cats/3')
            .expect(200)
            .expect({ id: 3, name: 'Bob' }, done);
    });


    test('responds to delete / with status 204', (done) => {
        request(app)
            .delete('/cats')
            .expect(204, done);
    });
});
