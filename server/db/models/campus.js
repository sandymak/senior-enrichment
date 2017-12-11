const Sequelize = require('sequelize');
const db = require('../index');

const description = `In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.
“Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.`

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: `${description}`
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/rP71Q5Q.png'
  }
});
