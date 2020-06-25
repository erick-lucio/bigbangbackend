const supertest = require("supertest");
const assert = require('assert');
const app = require("../server");

describe("GET /veiculos", function() {np
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/veiculos")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});
describe("POST /veiculos", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .post("/veiculos")
      .send({         
        placa:"eijiif",
        chassi:"fdfd45f",
        renavam:"gfrrt55gf", 
        modelo:"69b12r", 
        marca:"a9r2a", 
        ano:1973})
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});
describe("PUT /veiculos", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .put("/veiculos")
      .send({ 
        id:4,
        placa:"4g4g4",
        chassi:"fdfdf",
        renavam:"gfrgf", 
        modelo:"4f4f", 
        marca:"5g5g", 
        ano:2005})
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});
describe("DELETE /veiculos", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .delete("/veiculos")
      .send({ id: 2 })
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});