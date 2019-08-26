const router = require('express').Router();
const User = require('../models/user');


// select UserTable.userID as "userID", userTable.name as "userName", 
// widget.wID as "widgetID", widget.name as "widgetName", userWidgetJoin.location
// from UserTable, Widget, UserWidgetJoin
// where UserTable.userID = UserWidgetJoin.userID
// and Widget.wID = UserWidgetJoin.wID
// order by userName;

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
