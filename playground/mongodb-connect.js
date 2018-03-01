// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID;
// console.log(obj)
// var user = {name: 'Terrance', age: 25};
// var {name} = user;
// console.log(name)

// mongodb://terrance:terrance@ds151528.mlab.com:51528/tododb

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  db.collection('News').insertOne({
    title: 'Political',
    bodyText: "Moning news, hot news",
    language: "Khmer"
  }).then((err, result) => {
    if(err){
      return console.log("Unable to insert", err);
    }

    console.log("insert success", result)
  })

  // db.collection('Todos').count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   return console.log("Unable to count data");
  // });
  // COUNT

  // db.collection('Users').find({
  //   name: "Terrance"
  // }).toArray().then((docs) => {
  //   console.log('Todo');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch todos", err);
  // });
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Terrance',
  //   age: 25,
  //   location: 'Phnom Penh'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   };
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.close();

});
