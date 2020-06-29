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

module.exports = app
