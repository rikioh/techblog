const { User } = require('../models');

const userData = [
  {
    username: "Tamara Quitzon",
    email: "Sibyl_Ullrich@hotmail.com",
    password: "VjRKoEcgGkRLu5j"
  },
  {
    username: "Dana Halvorson",
    email: "Roman.Ortiz78@gmail.com",
    password: "60Xbp99AjZYmWIA"
  },
  {
    username: "Lee Langosh",
    email: "Marley_Donnelly@yahoo.com",
    password: "X9hxK58iVW4JOYI"
  },
  {
    username: "Oscar Mann MD",
    email: "Garrison_Aufderhar@gmail.com",
    password: "tS9gK4nR9Jpgbfo"
  },
  {
    username: "Geraldine Sauer",
    email: "Addie94@yahoo.com",
    password: "LWojgMZe_cHSYPh"
  }
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
