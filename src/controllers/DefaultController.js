const axios = require('axios') ;
function getMusic(number){
  axios({
    method: 'get',
    url: "https://api.spotify.com/v1/browse/categories/party/playlists",
    
    headers: {'Authorization': 'Bearer 773610915d194a73b6ebbef5b3dd471f'}
    })
    .then(function (response) {
        console.log(response.response)
        
        

    })
    .catch(function (response) {
        //handle error
        console.log(response)
        if(response.name=='Error'){
          
        }
        
       
    });
}
module.exports ={
    async mainRoute(req, res) {  
        
        if(!req.body.lat){
          req.body.lat = ""
        }
        if(!req.body.log){
            req.body.log = ""
        }
        if(!req.body.city){
            req.body.city = ""
        }
        const {lat,log,city} = req.body; 
        if(city != "" && (lat == "" && log == "")){
          let url = "http://api.openweathermap.org/data/2.5/weather?q=cityname&appid=558af5ea93234806e14ffe5dadd9587a";        
          url = url.replace(/cityname/, city); 
          console.log(url,lat,log,city)
          axios({
            method: 'get',
            url: url,
            
            //headers: {'Content-type': 'aplication/json'}
            })
            .then(function (response) {
                console.log(response.data.main.temp-273.15)
                res.status(200).send("ok")
                getMusic(5)
  
            })
            .catch(function (response) {
                //handle error
                console.log(response)
                if(response.name=='Error'){
                  res.status(404).send("Cidade nao encontrada") ;
                }
                
               
            });


        }else{
          if((lat != "" && log != "")&& city == "" ){

          }else{

          }
        }

        
      },
     
     
}
/*
Acre 	AC 	Rio Branco
Alagoas 	AL 	Maceió
Amapá 	AP 	Macapá
Amazonas 	AM 	Manaus
Bahia 	BA 	Salvador
Ceará 	CE 	Fortaleza
Distrito Federal 	DF 	Brasília
Espírito Santo 	ES 	Vitória
Goiás 	GO 	Goiânia
Maranhão 	MA 	São Luís
Mato Grosso 	MT 	Cuiabá
Mato Grosso do Sul 	MS 	Campo Grande
Minas Gerais 	MG 	Belo Horizonte
Pará 	PA 	Belém
Paraíba 	PB 	João Pessoa
Paraná 	PR 	Curitiba
Pernambuco 	PE 	Recife
Piauí 	PI 	Teresina
Rio de Janeiro 	RJ 	Rio de Janeiro
Rio Grande do Norte 	RN 	Natal
Rio Grande do Sul 	RS 	Porto Alegre
Rondônia 	RO 	Porto Velho
Roraima 	RR 	Boa Vista
Santa Catarina 	SC 	Florianópolis
São Paulo 	SP 	São Paulo
Sergipe 	SE 	Aracaju
Tocantins 	TO 	Palmas


*/