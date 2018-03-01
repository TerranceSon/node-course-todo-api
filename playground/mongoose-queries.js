const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

var id = '5a966d2ce01d7a1cabe6e1bf'

// Todo.find({
//   text: 'I am from postman'
// }).where('_id').equals('5a966d2ce01d7a1cabe6e1bf')
// .then((data) => {
//   console.log("Find and where", data)
// }).catch((e) => console.log(e));

var id = '5a966d2ce01d7a1cabe6e1bf';

Todo.find({
  _id: id
})
.then((data) => {
  console.log('Todos', data);
});
//
// Todo.findOne({
//   _id: id,
// })
// .then((data) => {
//   console.log('FindOne', data);
// });
//
//
// Todo.findById(id)
// .then((data) => {
//   console.log("FindebyId", data)
// })
