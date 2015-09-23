process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var server = require('../server/app');
var Exercise = require('../server/models/exercises.js');
// var Exercise = mongoose.model('exercises');

var should = chai.should();
chai.use(chaiHttp);


describe('Exercises', function() {
  Exercise.collection.drop();

  beforeEach(function(done) {
    var newExercise = new Exercise ({
      name: 'Javascript',
      description: 'Write javascript functions',
      tags: ['test']
    });
    newExercise.save(function(err) {
      done();
    });
  });
  afterEach(function(done) {
    Exercise.collection.drop();
    done();
  });


  it('should list ALL exercises on /exercises GET', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('description');
        res.body[0].should.have.property('tags');
        res.body[0].name.should.equal('Javascript');
        res.body[0].description.should.equal('Write javascript functions');
        res.body[0].tags[0].should.equal('test');
        done();
      });
  });


  it('should list a SINGLE exercise on /exercise/<id> GET', function(done) {
    var newExercise = new Exercise({
      name: 'Python',
      description: 'Code',
      tags: ['stuff']
    });
    newExercise.save(function(err, data) {
      chai.request(server)
        .get('/api/v1/exercise/'+data.id)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('name');
            res.body.should.have.property('description');
            res.body.should.have.property('tags');
            res.body.name.should.equal('Python');
            res.body.description.should.equal('Code');
            res.body.tags.should.to.deep.equal(['stuff']);
            res.body._id.should.equal(data.id);
            done();
        });
    });

  });


  it('should add a SINGLE exercise on /exercise POST', function(done) {
    chai.request(server)
      .post('/api/v1/exercises')
      .send({'name': 'Java', 'description': 'Script', 'tags': 'html'})
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.a.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('description');
        res.body.SUCCESS.should.have.property('tags');
        res.body.SUCCESS.name.should.equal('Java');
        res.body.SUCCESS.description.should.equal('Script');
        res.body.SUCCESS.tags[0].should.equal('html');
        done();
      });
  });


  it('should update a SINGLE exercise on /exercise/<id> PUT', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res) {
        chai.request(server)
          .put('/api/v1/exercise/'+ res.body[0]._id)
          .send({'name': 'Python'})
          .end(function(error, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('UPDATED');
            res.body.UPDATED.should.be.a('object');
            res.body.UPDATED.should.have.property('name');
            res.body.UPDATED.should.have.property('_id');
            res.body.UPDATED.name.should.equal('Python');
            done();
          });
      });
  });


  it('should delete a SINGLE exercise on /exercise/<id> DELETE', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res) {
        chai.request(server)
          .delete('/api/v1/exercise/'+res.body[0]._id)
          .end(function(error, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('REMOVED');
            res.body.REMOVED.should.be.a('object');
            res.body.REMOVED.should.have.property('name');
            res.body.REMOVED.should.have.property('description');
            res.body.REMOVED.should.have.property('tags');
            res.body.REMOVED.name.should.equal('Javascript');
            done();
          });
      });
  });


});
