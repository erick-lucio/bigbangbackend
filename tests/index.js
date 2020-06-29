const supertest = require("supertest");
const assert = require('assert');
const app = require("../server");

describe("GET /getsugestions", ()=> {
  it("it should has status code 200 sending city", (done)=> {
     supertest(app)
      .get("/getsugestions")
      .send({         
        city:"belo horizonte",       
    })
      .expect(200)
      .end(function(err, res){
        if(err){
          done(err)
        }else{
          done()
        }
        
      });
  });
  it("it should has status code 200 sending latitude longitude", (done)=> {
    supertest(app)
     .get("/getsugestions")
     .send({        
       lat:45,
       log:34
   })
     .expect(200)
     .end(function(err, res){
       if(err){
         done(err)
       }else{
         done()
       }
       
     });
 });
 it("it should has status code 200 sending string latitude longitude", (done)=> {
  supertest(app)
   .get("/getsugestions")
   .send({        
     lat:"49",
     log:"52"
 })
   .expect(200)
   .end(function(err, res){
     if(err){
       done(err)
     }else{
       done()
     }
     
   });
});
 it("it should has status code 200 sending city latitude longitude", (done)=> {
  supertest(app)
   .get("/getsugestions")
   .send({         
     city:"sao paulo",
     lat:34,
     log:28
 })
   .expect(200)
   .end(function(err, res){
     if(err){
       done(err)
     }else{
       done()
     }
     
   });
});
it("it should has status code 400 sending wrong city name", (done)=> {
  supertest(app)
   .get("/getsugestions")
   .send({         
     city:"wrong name",  
 })
   .expect(400)
   .end(function(err, res){
     if(err){
       done(err)
     }else{
       done()
     }
     
   });
});
it("it should has status code 400 sending blank params", (done)=> {
  supertest(app)
   .get("/getsugestions")
   .send({         

  })
   .expect(400)
   .end(function(err, res){
     if(err){
       done(err)
     }else{
       done()
     }
     
   });
});


});
