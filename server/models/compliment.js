const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplimentSchema = new Schema({
  message: {
    type: String, 
    required: [true, 'Please supply a compliment']},
  time: {
    type: String,
    enum: ['Anytime', 'Morning', 'Afternoon', 'Night'],
    required: [true, 'Please supply a time']
  },
  created_at: Date
});

ComplimentSchema.pre('save', (next) => {
  const currentDate = new Date();
  this.created_at = currentDate;
  next();
})

module.exports = mongoose.model('Compliment', ComplimentSchema);