const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Ads', () => {
  describe('GET related/ads/1', () => {
    it('it should GET products that are ads', (done) => {
      chai.request(server)
        .get('/related/ads/1')
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(12);
          res.body[0].should.have.property('cateogryid');
          done();
        });
    });
  });
});
