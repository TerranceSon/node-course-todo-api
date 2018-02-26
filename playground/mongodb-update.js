const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  //findOneAndUpdate
  // db.collection("Todos").findOneAndUpdate({
  //   completed: false,
  //   _id: new ObjectID("5a936d7b783c4b4688aa1185")
  // }, {
  //   $set: {
  //     completed: true,
  //     text: 'Update new lesson'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log("Update success", result)
  // }, (err) => {
  //
  // });

  db.collection("Users").findOneAndUpdate({
    name: 'Tris'
  }, {
    $set: {
      location: 'Kampot'
    },
    $mul: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log("Update success", result)
  }, (err) => {

  });

  // db.close()

});
