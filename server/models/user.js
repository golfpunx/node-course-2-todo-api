var mongoose = require('mongoose');

// {
//   email: 'prakhan@example.com',
//   password: 'password',
//   tokens: [{
//     access: 'auth',
//     token: 'palksjdlkfja;sdf;kj'
//   }]
// }

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  }
});

module.exports = {User};
