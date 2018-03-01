var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongodb://terrance:terrance@ds151528.mlab.com:51528/tododb
console.log("process.env", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
