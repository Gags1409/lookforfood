const request = require('supertest');

describe('loading express', function () {
  let server;
  beforeEach(function () {
    // eslint-disable-next-line global-require
    server = require('./app');
  });

  it('responds to /trucks with invalid request', function testSlash(done) {
    request(server)
      .post('/trucks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          errors: [
            'instance requires property "latitude"',
            'instance requires property "longitude"'
          ],
          data: []
        },done
      );
  });

  it('responds to /trucks with valid request', function (done) {
    request(server)
      .post('/trucks')
      .send({ latitude: 37.7767362127501, longitude: -122.416394930077 })
      .expect(200, {
        errors: [],
        data: [
          {
            applicant: 'Street Meet',
            address: '564 HOWARD ST',
            latitude: '37.7875398934675',
            longitude: '-122.397726709152',
            distance: '2.033'
          },
          {
            applicant: "BOWL'D ACAI, LLC.",
            address: '15 MARINA BLVD',
            latitude: '37.8045778690901',
            longitude: '-122.433010774343',
            distance: '3.423'
          },
          {
            applicant: 'MOMO INNOVATION LLC',
            address: '160 PINE ST',
            latitude: '37.792524940842',
            longitude: '-122.399415781865',
            distance: '2.304'
          },
          {
            applicant: 'Treats by the Bay LLC',
            address: '201 02ND ST',
            latitude: '37.7868016505971',
            longitude: '-122.397871635003',
            distance: '1.975'
          },
          {
            applicant: 'MOMO INNOVATION LLC',
            address: '101 CALIFORNIA ST',
            latitude: '37.7929489528347',
            longitude: '-122.398098613167',
            distance: '2.416'
          }
        ]
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('404 everything else', function testPath(done) {
    request(server).get('/foo/bar').expect(404, done);
  });
});
