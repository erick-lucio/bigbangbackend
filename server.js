const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();




app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

/*
You can call by city name or city name, state code and country code. API responds with a list of weather parameters that match a search request.
API call:
http://api.openweathermap.org/data/2.5/weather?q=cityname&appid=558af5ea93234806e14ffe5dadd9587a
http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=558af5ea93234806e14ffe5dadd9587a
-273,15

Criar um micro-serviço que receba requisições HTTP no formato REST que receba como parâmetro o nome de uma cidade ou uma combinação de latitude e longitude e retorne uma sugestão de playlist (array com o título das músicas) de acordo com a temperatura atual da cidade.
Você pode usar qualquer linguágem e framework que quiser, use o que se sentir mais a vontade (sugerimos PHP ou NodeJS).

Regras de negócio

Se a temperatura (Celsius) estiver acima de 30 graus, sugerir músicas para festa
Se a temperatura está entre 15 e 30 graus, sugerir músicas do gênero Pop.
Entre 10 e 14 graus, sugerir músicas do gênero Rock
Abaixo de 10 graus, segerir músicas clássicas.


Dicas
Você pode usar a API do OpenWeatherMaps (https://openweathermap.org) para buscar a temperatura das cidades/coordenadas (se atente a unidade em que a temperatura é retornada).
Você pode usar a Spotify API para buscar os títulos das músicas em uma playlist, a API também da sugestões de playlist por categoria (ex: Rock).

Pontos extras

Pensar em tornar o serviço resiliente e tolerante a falhas
Considere o uso de containers (Docker) para facilitar a criação do ambiente da sua aplicação


Critérios de avaliação

Cumprimento dos requisitos
Cobertura de testes
Organização do código (cleancode, DRY, SOLID, etc.)


Submentendo a entrega
Envie um email para thiago@bigbangdigital.com.br com o link para o código feito para cumprir o desafio (repositório público no GitHub/Gitlab/Gitbucket...)

Client ID 7bffb64a2ec54fea9831252aaba9cc65
Client Secret 773610915d194a73b6ebbef5b3dd471f
*/