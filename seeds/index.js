const { User } = require('../models');

const sequelize = require('../config/connection');
const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  //Create all the users.
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- Users SEEDED -----\n');
  process.exit(0);
};

seedAll();
