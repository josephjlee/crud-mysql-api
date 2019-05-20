module.exports = {
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  db: "apps_node"
};

// Remember to create this table on your database
/*
  CREATE TABLE `crud_users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `age` INT NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`));
*/
