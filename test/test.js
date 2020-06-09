const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Landing Page', () => {
    it('Shows the landing page', (done) => {
        chai.request(app)
            .get('/').end((err, res) => {
                if (err) {
                    return done(err);
                }
                res.should.have.status(200)
                res.should.have.header('content-type', 'text/html; charset=UTF-8');
                res.body.should.be.a('object');
            })
        done();
    })
})

describe('API Calls', () => [
    // TODO add API test functionality
    it('This passes for now pending proper config', (done) => {
        done();
    })
]);
