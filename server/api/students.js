const router = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = router;

// PARAM api/students/id <-- extracts logic in a separate middleware
router.param('id', (req, res, next, id) => {
  Student.findById(id)
  .then(student => {
    if (!student) {
      const error = new Error('Oops! Student not found!');
      error.status = 404;
      throw error;
    }
    else {
      req.student = student;
      next()
    }
  })
  .catch(next)
});

// GET api/students
router.get('/', (req, res, next) => {
  Student.findAll({
    include: { all: true}
  })
    .then(students => {
      res.json(students)
    })
    .catch(next)
});

// GET api/students
router.get('/:id', (req, res, next) => {
  res.json(req.student)
});

// POST api/students
router.post('/', (req, res, next) => {
  // Promise.all([
    Student.create(req.body)
    // ,

    .then(student => {
      res.json(student)
    })
    // Campus.findOrCreate({
    //   where: {
    //     name: req.body.name
    //   }
    // })
  // ])
  // .then(([createdStudent, [theCampus, createdCampusBool]]) => createdStudent.setCampus(theCampus))
  .catch(next)
})

// PUT api/students , this is INSTANCE update
router.put('/:id', (req, res, next) => {
  req.student.update(req.body)
  .then(updatedStudent => {
    res.json(updatedStudent)
  })
  .catch(next)
})

// Delete api/student
router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.param.id
    }
  })
  .then(() => res.sendStatus(202))
  .catch(next)
});
