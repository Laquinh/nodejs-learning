CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;

CREATE TABLE customer
(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

DESCRIBE customer;