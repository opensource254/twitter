const { expect } = require('chai');
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
    it('Should get tweets by a user', async () => {
        const res = await chai.request(app)
            .get('/api/v3/opensource254?count=5')
            expect(res.status).equals(200)
            expect(res.body).to.be.an('array')
            expect(res.body.length).equals(5)
    })
]);
