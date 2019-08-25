const router = require('express').Router();
const Compliment = require('../models/compliment');
const User = require('../models/user')

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

const defaultUsers = [
  {
    name: 'Nate',
    widgets: [{
      name: 'Clock',
      location: 'region left'
    },
    {
      name: 'Compliment',
      location: 'region lower third'
    },
    {
      name: 'Twitch',
      location: 'region bar'
    },
    {
      name: 'Weather',
      location: 'region bottom'
    }]
  },
  {
    name: 'Krysti',
    widgets: [{
        name: 'Clock',
        location: 'region right'
      },
      {
        name: 'Weather',
        location: 'region left'
      },
      {
        name: 'Compliment',
        location: 'region lower third'
      },
      {
        name: 'News',
        location: 'region bar'
      }
    ]
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

router.get('/users', (req, res, next) => {
  defaultUsers.forEach(userItem => {
    let user = new User();
    user.name = userItem.name;
    user.widgets = userItem.widgets;

    user.save((err) => {
      if (err) throw err;
    })
  })
  res.status(200).send('Users saved!')
})

module.exports = router;