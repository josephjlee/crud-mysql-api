module.exports = {
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  db: "tests"
};

// Remember to create this table on your database
/*
  CREATE TABLE `tests`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `age` INT NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`));
*/
