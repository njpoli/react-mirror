const router = require('express').Router();
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'nate',
  password        : 'password',
  database        : 'finalproject'
});

router.get('/', (req, res, next) => {
  let timeQuery = req.query.time;
  if (!timeQuery) {
    pool.query(
      `select * from Compliment`, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
      }
    )
  } else if (timeQuery) {
    const morning = [5, 11]
    const noon = [12, 18]
    if (timeQuery >= morning[0] && timeQuery <= morning[1]) {
      pool.query(
        `select * from compliment
          where time = "Morning"
          or time = "Anytime"`, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
          })
    } else if (timeQuery >= noon[0] && timeQuery <= noon[1]) {
      pool.query(
        `select * from compliment
          where time = "Afternoon"
          or time = "Anytime"`, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
          })
    } else {
      pool.query(
        `select * from compliment
          where time = "Night"
          or time = "Anytime"`, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
          })
    }
  }
})

module.exports = router;
