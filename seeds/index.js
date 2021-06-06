const { User, Post, Comment } = require('../models');

const sequelize = require('../config/connection');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  //Create all the users.
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  //Create all the posts.
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true
  });
  //Create all the comments.
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true
  });

  console.log('\n----- Users SEEDED -----\n');
  process.exit(0);
};

seedAll();
