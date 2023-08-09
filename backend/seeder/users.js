const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    name: "Petras",
    lastName: "Petraitis",
    email: "petras@petraitis.com",
    password: bcrypt.hashSync("petras@petraitis.com", 10),
  },
  {
    name: "Jonas",
    lastName: "Jonaitis",
    email: "jonas@jonaitis.com",
    password: bcrypt.hashSync("jonas@jonaitis.com", 10),
    isAdmin: true,
  },
  {
    name: "Petrone",
    lastName: "Petraitiene",
    email: "petrone@petraitiene.com",
    password: bcrypt.hashSync("petrone@petraitiene.com", 10),
  },
  {
    name: "Jone",
    lastName: "Jonaitiene",
    email: "jone@jonaitiene.com",
    password: bcrypt.hashSync("jone@jonaitiene.com", 10),
  },
];

module.exports = users;
