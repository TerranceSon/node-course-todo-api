const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  // Delete many
  // db.collection('Todos').deleteMany({text: 'exercise'}).then((result)=>{
  //   console.log("Deleted success", result)
  // }, (error) => {
  //   console.log("unable to deleteMany")
  // })
  // DeleteOne
  // db.collection('Todos').deleteOne({text: 'exercise'}).then((result)=>{
  //   console.log("Deleted success", result)
  // }, (error) => {
  //   console.log("unable to deleteMany")
  // })
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'exercise'}).then((result)=>{
  //   console.log("Deleted success", result)
  // }, (error) => {
  //   console.log("unable to deleteMany")
  // })  
});
