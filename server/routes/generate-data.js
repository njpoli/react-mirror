const router = require('express').Router();
const Compliment = require('../models/compliment');

const defaultCompliments = [
  {
    message: 'You look great this morning!',
    time: 'Morning'
  },
  {
    message: 'Hire me!',
    time: 'Anytime'
  },
  {
    message: 'You look great this afternoon!',
    time: 'Afternoon'
  },
  {
    message: 'You look great this evening!',
    time: 'Night'
  }
]

router.get('/compliments', (req, res, next) => {
  defaultCompliments.forEach(complimentItem => {
    let compliment = new Compliment();
    compliment.message = complimentItem.message;
    compliment.time = complimentItem.time;
    
    compliment.save((err) => {
      if (err) throw err;
    })
  })
  res.status(200).send('Compliments saved!')
})

module.exports = router;