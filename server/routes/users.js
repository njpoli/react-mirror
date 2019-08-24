const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
  User
    .find()
    .exec((err, users) => {
      if (err) {
        res.status(400).send('Unable to find users')
      }
      res.send(users);
    })
})

module.exports = router;
