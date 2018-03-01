var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongodb://terrance:terrance@ds151528.mlab.com:51528/tododb
mongoose.connect("mongodb://terrance:terrance@ds151528.mlab.com:51528/tododb" || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
