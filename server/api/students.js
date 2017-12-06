const router = require('express').Router();
const {
  Student
} = require('../db/models');

module.exports = router;

// GET api/students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.send(students)
    })
    .catch(next)
});
