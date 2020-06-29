const axios = require('axios') ;
const request = require('request'); 
const client_id = '7bffb64a2ec54fea9831252aaba9cc65'; 
const client_secret = '773610915d194a73b6ebbef5b3dd471f'; 
function getMusic(temp,callback){
    var category_url ;
    temp = Math.round(temp);
    var genre;
    
    
      if(temp > 30){
        category_url = 'https://api.spotify.com/v1/browse/categories/party/playlists?limit=1';
        genre="party"
      }
      
      if(temp <= 30 && temp >= 15){
        category_url = 'https://api.spotify.com/v1/browse/categories/pop/playlists?limit=1';
        genre="pop"
      }
      
      if(temp <= 14 && temp >= 10){
        category_url = 'https://api.spotify.com/v1/browse/categories/rock/playlists?limit=1';
        genre="rock"
      }
      
      if(temp < 10){
        category_url = 'https://api.spotify.com/v1/browse/categories/classical/playlists?limit=1';
        genre="classical"
      }
     
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    request.post(authOptions, function(error, response, body,) {
      if (!error && response.statusCode === 200) {

      
        var token = body.access_token;
        var optionsSearchCategory = {
          url: category_url,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(optionsSearchCategory, function(error, response, body) {
        
          
          var optionsSearchTracks = {
            url: "https://api.spotify.com/v1/playlists/category/tracks?limit=100".replace(/category/, body.playlists.items[0].id),
            headers: {
              'Authorization': 'Bearer ' + token
            },
            json: true
          }
          request.get(optionsSearchTracks, function(error, response, body) {
         
            callback(error,body,genre)
          })
        })

      }
     
    });
    

  
}
function getTemp(lat,log,city,cb){
 
  if(city != ""){
    
    let url = "http://api.openweathermap.org/data/2.5/weather?q=cityname&appid=558af5ea93234806e14ffe5dadd9587a";        
    url = url.replace(/cityname/, city); 
    
    axios({
      method: 'get',
      url: url,
      
      //headers: {'Content-type': 'aplication/json'}
      })
      .then(function (response) {
        
        
        
        cb(null,response.data.main.temp-273.15)
        

      })
      .catch(function (response) {
          
          cb(null,"Cidade Nao Encontrada")
          
           
          
          
         
      });


    }else{
    if((lat != "" && log != "")&& city == "" ){
     
      let url = "http://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=558af5ea93234806e14ffe5dadd9587a";        
      url = url.replace(/latitude/, lat); 
      url = url.replace(/longitude/, log); 
      
      axios({
        method: 'get',
        url: url,
        
        //headers: {'Content-type': 'aplication/json'}
        })
        .then(function (response) {
          
          
          
          cb(null,response.data.main.temp-273.15)
         
  
        })
        .catch(function (response) {
          
               
          
            
            
           
        });

    }else{
      cb(null,"Bad Params")
    }
  }

}
module.exports ={
    async mainRoute(req, res) {  
      if((req.body.lat && req.body.log)||req.body.city){
        
      
        if(!req.body.lat){
          req.body.lat = ""
        }
        if(!req.body.log){
            req.body.log = ""
        }
        if(!req.body.city){
            req.body.city = ""
        }
        let {lat,log,city} = req.body; 
        
        lat = parseInt(lat)
        log = parseInt(log)
        var object = [];
        vartemp = getTemp(lat,log,city,function(err,temp){          
          if(temp != "Bad Params" && temp != "Cidade Nao Encontrada"){
            object.push({Temperatura:temp}); 
              var tracklist =  getMusic(temp, function(err, tracklist,genre) {
              object.push({genre:genre})         
                tracklist.items.forEach(element => {
                object.push({Musica:element.track.name})                
              });           
                      
              res.status(200).send(object)
          });
          
          }else{
            res.status(400).send(temp)
          }

        })
      }else{
        res.status(400).send("Bad Params")
      }
      


        
      },
     
     
}
