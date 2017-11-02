const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = []; // array of objects
var id = 0;

app.get('/lions', (req, res) => {
    res.json(lions);
});

app.get('/lions/:id', (req, res) => {
    let lion = _.find(lions, {id: req.params.id});
    res.json(lion || {});
});

app.post('/lions', (req, res) => {
    let lion = req.body;
    id++;

    lion.id = id + ''; // using coercion to cast value from number to string

    lions.push(lion);

    res.json(lion);
});

app.put('/lions/:id', (req, res) => {
    let update = req.body;
    if (update.id) {
        delete update.id;
    }

    let lion = _.findIndex(lions, {id: req.params.id});
    if (!lions[lion]) {
        res.send();
    } else {
        let updatedLion = _.assign(lions[lion], update);
        res.json(updatedLion);
    }
});

app.delete('/lions/:id', (req, res) => {
    let lion = _.findIndex(lions, {id: req.params.id});

    if (!lions[lion]) {
        res.send();
    } else {
        let deletedLion = lions[lion];
        lions.splice(lion,1);
        res.json(deletedLion);
    }
});

app.listen(port, () => {
    console.log('Listening on http://localhost', port);
});
