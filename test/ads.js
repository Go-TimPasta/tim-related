const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSorted = require('chai-sorted');
const chaiEach = require('chai-each');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiSorted);
chai.use(chaiEach);

describe('Ads', () => {
  describe('GET related/ads/1', () => {
    it('it should GET 12 products that are ads ', (done) => {
      chai.request(server)
        .get('/related/ads/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(12);
          res.body.should.each.have.property('ad').that.is.eql(true);
          done();
        });
    });

    it('it should GET products in descending order of clicks', (done) => {
      chai.request(server)
        .get('/related/ads/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.sortedBy('clicks', { descending: true });
          done();
        });
    });
  });
});
