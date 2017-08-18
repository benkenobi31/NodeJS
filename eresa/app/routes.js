// app/routes.js

// load the todo model
var Person = require('./models/person');
var Resto = require('./models/resto');


// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/persons', function(req, res) {

        // use mongoose to get all todos in the database
        Person.find(function(err, persons) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
            res.send(err)

            res.json(persons); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/persons', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Person.create({
            name : req.body.name,
            surname : req.body.surname,
            email : req.body.email
        }, function(err, person) {
            if (err)
            res.send(err);

            // get and return all the todos after you create another
            Person.find(function(err, persons) {
                if (err)
                res.send(err)

                res.json(persons);
            });
        });

    });

    // delete a todo
    app.delete('/api/persons/:person_id', function(req, res) {
        Person.remove({
            _id : req.params.person_id
        }, function(err, person) {
            if (err)
            res.send(err);

            // get and return all the todos after you create another
            Person.find(function(err, persons) {
                if (err)
                res.send(err)

                res.json(persons);
            });
        });
    });

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/restos', function(req, res) {

        // use mongoose to get all todos in the database
        Resto.find(function(err, restos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
            res.send(err)

            res.json(restos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/restos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Resto.create({
            name : req.body.name,
            tel : req.body.tel,
            location : req.body.location
        }, function(err, resto) {
            if (err)
            res.send(err);

            // get and return all the todos after you create another
            Resto.find(function(err, restos) {
                if (err)
                res.send(err)

                res.json(restos);
            });
        });

    });

    // delete a todo
    app.delete('/api/restos/:resto_id', function(req, res) {
        Resto.remove({
            _id : req.params.resto_id
        }, function(err, resto) {
            if (err)
            res.send(err);

            // get and return all the todos after you create another
            Resto.find(function(err, restos) {
                if (err)
                res.send(err)

                res.json(restos);
            });
        });
    });
};
