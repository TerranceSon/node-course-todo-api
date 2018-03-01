var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  User: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Email: {
    type: String,
    required: true,
    minlength: 10,
    trim: true
  }
});
// var newUser = new User({
//   User: 'Terrance',
//   Email: 'Terrance@pathmazing.com',
// });
// newUser.save().then((docs) => {
//   console.log(JSON.stringify(docs, undefined , 2))
// }, (err) => {
//   console.log('Unable to save user.', err);
// });

module.exports = {User}
