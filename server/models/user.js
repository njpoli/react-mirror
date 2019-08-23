const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
  },
  widgets: [{
    name : String,
    location: String
  }],
  created_at: Date
})

UserSchema.pre('save', next => {
  const currentDate = new Date();
  this.created_at = currentDate;
  next();
})

module.exports = mongoose.model('User', UserSchema);
