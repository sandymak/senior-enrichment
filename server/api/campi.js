const router = require('express').Router();
const {Campus} = require('../db/models');

module.exports = router;
// GET api/
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campi => {
    res.send(campi)
  })
  .catch(next)
});

