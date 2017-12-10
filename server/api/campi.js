const router = require('express').Router();
const { Campus } = require('../db/models');

module.exports = router;

// PARAM /api/campi
router.param('id', (req, res, next, id) => {
  Campus.findById(id)
  .then(campus => {
    if (!campus) {
      const err = new Error('Oops! Campus not found!');
      err.status = 404;
      throw err
    }
    else {
      req.campus = campus;
      next()
    }
  })
  .catch(next)
});

// GET api/campi
router.get('/', (req, res, next) => {
  Campus.findAll({include: {all: true}})
  .then(campi => {
    res.json(campi)
  })
  .catch(next)
});

// GET api/campi
router.get('/:id', (req, res, next) => {
  res.json(req.campus)
});

// POST api/campi
router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(createdCampus => {
    res.json(createdCampus)
  })
  .catch(next);
})

//Put api/campi/
router.put('/:id', (req, res, next) => {
  req.campus.update(req.body)
  .then(updatedCampus => {
    res.json(updatedCampus)
  })
  .catch(next)
});

// Delete api/campi
router.delete('/:id', (req, res, next) => {
  req.campus.destroy()
  .then(() => res.sendStatus(202))
  .catch(next)
});
