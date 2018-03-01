var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

// Todo.remove({}).then(() => {
//
// })

var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body)
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
});

app.post('/users', (req, res) => {
  var user = new User({
    User: req.body.User,
    Email: req.body.Email
  });

  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  // Todo.find().then((data) => {
  //   res.send({data});
  // }, (e) => {
  //   res.status(400).send(e)
  // })  
});
app.get('/getTodo', (req, res) => {
  console.log(req.query)
}, (err) => {
  res.status(400).send(err);
});

app.get('/geTodoList/:id', (req, res) => {
  // res.send(req.params)
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(400).send(JSON.stringify({
      error_option: `error occure whilte trying to filter ${id}`,
    }));
  };
  console.log(req.params.id)

  Todo.find({
    // completed: req.params.id,
    _id: id
  })
  .then((data) => {
    console.log("data", data)
    if(!data || !data.length){
      return res.status(404).send();
    }
    res.send(data)
  }).catch((e) => {
    res.status(400).send(e)
  });

}, (e) => {
  res.status(400).send(e);
});

// GET /todos/
app.listen(port, () => {
  console.log("App now running on port", port);
})

module.exports = {app}
