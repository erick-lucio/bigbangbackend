const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const helmet = require('helmet')

require('./src/database');

app.use(bodyParser.json());
app.use(cors());
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

/*


app.use(bodyParser.json());
app.use(cors());
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

try {
    app.use(routes);
} catch (error) {
    console.log(error)
}

app.listen(3100);




s
*/