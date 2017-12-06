const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
}, {
  getterMethods: {
    fullname() {
      return this.getDataValue('firstName') + ' ' +
        this.getDataValue(
          'lastName')
    }
  }
});
