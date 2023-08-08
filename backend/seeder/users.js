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
];

module.exports = users;
