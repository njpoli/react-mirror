const router = require('express').Router();
const Compliment = require('../models/compliment');

router.get('/', (req, res, next) => {
  let timeQuery = req.query.time;
  if (!timeQuery) {
    Compliment
      .find()
      .exec((err, compliments) => {
        if (err) {
          res.status(400).send('Unable to retrieve compliments')
        }
        res.send(compliments);
      })
  } else if (timeQuery) {
    const morning = [5, 11]
    const noon = [12, 18]
    if (timeQuery >= morning[0] && timeQuery <= morning[1]) {
      Compliment
        .find({ time : {$in: ["Anytime", "Morning"]}})
        .exec((err, compliments) => {
        if (err) {
          res.status(400).send('Unable to retrieve compliments')
        }
        res.send(compliments);
      })
    } else if (timeQuery >= noon[0] && timeQuery <= noon[1]) {
      Compliment
        .find({ time : {$in: ["Anytime", "Afternoon"]}})
        .exec((err, compliments) => {
        if (err) {
          res.status(400).send('Unable to retrieve compliments')
        }
        res.send(compliments);
      })
    } else {
      Compliment
        .find({ time : {$in: ["Anytime", "Night"]}})
        .exec((err, compliments) => {
        if (err) {
          res.status(400).send('Unable to retrieve compliments')
        }
        res.send(compliments);
      })
    }
  }
})

module.exports = router;