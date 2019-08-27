const router = require('express').Router();
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'nate',
  password        : 'password',
  database        : 'finalproject'
});

const groupBy = (objectArray, property) => {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

router.get('/', (req, res, next) => {
  pool.query(
  `select UserTable.userID as "userID", UserTable.name as "userName", 
  Widget.wID as "widgetID", Widget.name as "widgetName", UserWidgetJoin.location
  from UserTable, Widget, UserWidgetJoin
  where UserTable.userID = UserWidgetJoin.userID
  and Widget.wID = UserWidgetJoin.wID
  order by userName`, (error, results, fields) => {
    if (error) throw error;
    let users = groupBy(results, 'userName')
    res.json(users);
  })
})

module.exports = router;
